/*
This file tests public admin task creation and client-side validation messaging.
Edit this file when admin task form behavior or API payload shape changes.
Copy this file as a starting point when you add tests for another admin form.
*/

import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AdminTasksWorkspace } from "./AdminTasksWorkspace";

const postJson = vi.fn();

vi.mock("../../shared/api", () => ({
  postJson: (...args: unknown[]) => postJson(...args),
}));

describe("AdminTasksWorkspace", () => {
  it("waits for the initial load before showing the form", async () => {
    let resolveList: ((value: { tasks: [] }) => void) | null = null;
    postJson.mockImplementation(
      (path: string) =>
        new Promise((resolve) => {
          if (path === "/api/admin/tasks/list") {
            resolveList = resolve as (value: { tasks: [] }) => void;
            return;
          }
          throw new Error(`Unexpected path ${path}`);
        }),
    );

    render(<AdminTasksWorkspace />);

    expect(await screen.findByRole("heading", { name: "Loading tasks" })).toBeInTheDocument();
    expect(screen.queryByLabelText("Title")).not.toBeInTheDocument();

    resolveList?.({ tasks: [] });

    expect(await screen.findByRole("heading", { name: "Create task" })).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
  });

  it("creates a task through admin endpoint", async () => {
    postJson.mockImplementation(async (path: string, body?: unknown) => {
      if (path === "/api/admin/tasks/list") {
        return { tasks: [] };
      }
      if (path === "/api/admin/tasks/create") {
        const payload = body as {
          title: string;
          statement_markdown: string;
          input_count: number;
          output_count: number;
          expected_outputs_text: string | null;
          reference_solution: string | null;
        };
        return {
          task: {
            id: 1,
            title: payload.title,
            statement_markdown: payload.statement_markdown,
            input_count: payload.input_count,
            output_count: payload.output_count,
            expected_outputs_text: payload.expected_outputs_text,
            reference_solution: payload.reference_solution,
            created_at: "2026-04-01T10:00:00+00:00",
            updated_at: "2026-04-01T10:00:00+00:00",
          },
        };
      }
      throw new Error(`Unexpected path ${path}`);
    });

    render(<AdminTasksWorkspace />);
    await screen.findByRole("heading", { name: "Create task" });

    await userEvent.type(screen.getByLabelText("Title"), "XOR");
    await userEvent.type(screen.getByLabelText("Statement markdown"), "# XOR");
    await userEvent.clear(screen.getByLabelText("Input count (N)"));
    await userEvent.type(screen.getByLabelText("Input count (N)"), "2");
    await userEvent.clear(screen.getByLabelText("Output count (M)"));
    await userEvent.type(screen.getByLabelText("Output count (M)"), "1");
    await userEvent.type(screen.getByLabelText("Expected outputs (2^N lines of M bits)"), "0\n1\n1\n0");
    await userEvent.click(screen.getByRole("button", { name: "Save task" }));

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith(
        "/api/admin/tasks/create",
        expect.objectContaining({
          title: "XOR",
          input_count: 2,
          output_count: 1,
        }),
      );
    });
    expect(await screen.findByText("Task saved.")).toBeInTheDocument();
  });

  it("shows validation error for malformed expected outputs", async () => {
    postJson.mockImplementation(async (path: string) => {
      if (path === "/api/admin/tasks/list") {
        return { tasks: [] };
      }
      throw new Error(`Unexpected path ${path}`);
    });

    render(<AdminTasksWorkspace />);
    await screen.findByRole("heading", { name: "Create task" });

    await userEvent.type(screen.getByLabelText("Title"), "Bad");
    await userEvent.type(screen.getByLabelText("Statement markdown"), "Bad");
    await userEvent.type(screen.getByLabelText("Expected outputs (2^N lines of M bits)"), "0\n1\n1");
    await userEvent.click(screen.getByRole("button", { name: "Save task" }));

    expect(await screen.findByText(/must contain exactly 4 line/)).toBeInTheDocument();
  });
});
