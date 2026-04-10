/*
This file tests the student tasks workspace loading, editing, and submit behavior.
Edit this file when task-solving UI flow or submit payload shape changes.
Copy this file as a starting point when you add tests for another student workflow.
*/

import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TasksWorkspace } from "./TasksWorkspace";
import type { User } from "../../shared/types";

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

describe("TasksWorkspace", () => {
  it("loads task, submits solution, and shows accepted result", async () => {
    postJson.mockImplementation(async (path: string) => {
      if (path === "/tasks/list") {
        return {
          tasks: [
            {
              id: 7,
              title: "XOR task",
              statement_markdown: "# XOR",
              input_count: 2,
              output_count: 1,
              created_at: "2026-04-01T10:00:00+00:00",
              updated_at: "2026-04-01T10:00:00+00:00",
            },
          ],
        };
      }
      if (path === "/tasks/get") {
        return {
          task: {
            id: 7,
            title: "XOR task",
            statement_markdown: "# XOR",
            input_count: 2,
            output_count: 1,
            created_at: "2026-04-01T10:00:00+00:00",
            updated_at: "2026-04-01T10:00:00+00:00",
          },
        };
      }
      if (path === "/tasks/submit") {
        return { result: { accepted: true, message: "Accepted." } };
      }
      throw new Error(`Unexpected path ${path}`);
    });

    render(<TasksWorkspace onLogout={vi.fn()} user={user} />);
    expect(await screen.findByRole("heading", { name: "XOR task" })).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText("Task editor"), "scheme () main ():\nend");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith("/tasks/submit", expect.objectContaining({ task_id: 7 }));
    });
    expect(await screen.findByText("Accepted.")).toBeInTheDocument();
  });
});
