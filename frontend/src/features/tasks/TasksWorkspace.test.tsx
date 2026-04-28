/*
This file tests the student tasks workspace loading, editing, submit, and debug behavior.
Edit this file when task-solving UI flow or submit payload shape changes.
Copy this file as a starting point when you add tests for another student workflow.
*/

import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TasksWorkspace } from "./TasksWorkspace";
import type { Task, TaskProgress, User } from "../../shared/types";

vi.mock("@uiw/react-codemirror", () => ({
  default: ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
    <textarea aria-label="Task editor" onChange={(event) => onChange(event.target.value)} value={value} />
  ),
}));

const postJson = vi.fn();

vi.mock("../../shared/api", () => ({
  postJson: (...args: unknown[]) => postJson(...args),
}));

const user: User = {
  id: 1,
  username: "user",
  is_admin: false,
  created_at: "2026-04-01T10:00:00+00:00",
  updated_at: "2026-04-01T10:00:00+00:00",
};

function buildTask(overrides: Partial<Task> = {}): Task {
  return {
    id: 1,
    title: "1. Build OR for Three Inputs",
    statement_markdown: "# Build OR for Three Inputs\n## Theory\nA signal can be 0 or 1.\n## Task\nBuild the circuit.\n## What to submit\n- One final scheme.",
    input_count: 3,
    output_count: 1,
    passed: false,
    attempt_count: 0,
    latest_result: null,
    latest_submitted_at: null,
    created_at: "2026-04-01T10:00:00+00:00",
    updated_at: "2026-04-01T10:00:00+00:00",
    ...overrides,
  };
}

function buildProgress(overrides: Partial<TaskProgress> = {}): TaskProgress {
  return {
    draft_solution: "",
    passed: false,
    attempt_count: 0,
    latest_result: null,
    latest_submitted_at: null,
    ...overrides,
  };
}

function mockTaskApi(task: Task, progress: TaskProgress) {
  postJson.mockImplementation(async (path: string, body?: unknown) => {
    if (path === "/api/tasks/list") {
      return { tasks: [task] };
    }
    if (path === "/api/tasks/get") {
      return { task, progress };
    }
    if (path === "/api/tasks/save-draft") {
      const payload = body as { solution: string };
      return { progress: { ...progress, draft_solution: payload.solution } };
    }
    if (path === "/api/tasks/submit") {
      return {
        result: { accepted: true, message: "Accepted." },
        progress: {
          ...progress,
          draft_solution: (body as { solution: string }).solution,
          passed: true,
          attempt_count: 1,
          latest_result: { accepted: true, message: "Accepted." },
          latest_submitted_at: "2026-04-01T10:01:00+00:00",
        },
      };
    }
    throw new Error(`Unexpected path ${path}`);
  });
}

describe("TasksWorkspace", () => {
  beforeEach(() => {
    postJson.mockReset();
    window.localStorage.clear();
  });

  it("shows the first beginner task and renders its theory markdown", async () => {
    const task = buildTask();
    mockTaskApi(task, buildProgress());

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);

    expect(await screen.findByRole("heading", { name: "1. Build OR for Three Inputs" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Theory" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What to submit" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Build OR/ })).toHaveTextContent("1. Build OR for Three Inputs");
  });

  it("loads saved task draft and latest submit result from the server", async () => {
    const task = buildTask({ id: 7, title: "XOR task", statement_markdown: "# XOR", input_count: 2 });
    const draft = "scheme (a b) main (out):\n (a b) or (out)\nend";
    mockTaskApi(
      task,
      buildProgress({
        draft_solution: draft,
        passed: true,
        attempt_count: 1,
        latest_result: { accepted: true, message: "Accepted." },
        latest_submitted_at: "2026-04-01T10:01:00+00:00",
      }),
    );

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);

    expect(await screen.findByRole("heading", { name: "XOR task" })).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByLabelText("Task editor")).toHaveValue(draft);
    });
    expect(screen.getByText("Accepted.")).toBeInTheDocument();
  });

  it("autosaves edited task draft to the server", async () => {
    const task = buildTask({ id: 7, title: "XOR task", statement_markdown: "# XOR", input_count: 2 });
    mockTaskApi(task, buildProgress());

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);
    expect(await screen.findByRole("heading", { name: "XOR task" })).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText("Task editor"), "scheme () main ():\nend");

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith(
        "/api/tasks/save-draft",
        expect.objectContaining({
          task_id: 7,
          solution: "scheme () main ():\nend",
        }),
      );
    });
    expect(await screen.findByText("Saved")).toBeInTheDocument();
  });

  it("submits solution and updates task status badge", async () => {
    const task = buildTask({ id: 7, title: "XOR task", statement_markdown: "# XOR", input_count: 2 });
    mockTaskApi(task, buildProgress());

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);
    expect(await screen.findByRole("heading", { name: "XOR task" })).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText("Task editor"), "scheme () main ():\nend");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith("/api/tasks/submit", expect.objectContaining({ task_id: 7 }));
    });
    expect(await screen.findByText("Accepted.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /XOR task/ })).toHaveTextContent("Passed");
  });

  it("opens the visualizer and evaluates the current solution", async () => {
    const task = buildTask({ id: 7, title: "NOT task", statement_markdown: "# NOT", input_count: 1 });
    const draft = "scheme (a) main (out):\n (a) not (out)\nend";
    mockTaskApi(task, buildProgress({ draft_solution: draft }));

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);
    expect(await screen.findByRole("heading", { name: "NOT task" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Open visualizer" }));
    expect(screen.getByLabelText("out 1")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "a 0" }));
    expect(screen.getByLabelText("out 0")).toBeInTheDocument();
  });
});
