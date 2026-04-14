/*
This file tests the main workspace flow for files, autosave, and visualizer output.
Edit this file when workspace UI, file CRUD, or autosave behavior changes.
Copy this file as a starting point when you add another rich workspace test.
*/

import "@testing-library/jest-dom/vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SchemeWorkspace } from "./SchemeWorkspace";
import type { SchemeFile, User } from "../../shared/types";

const codeMirrorProps = vi.fn();

vi.mock("@uiw/react-codemirror", () => ({
  default: (props: { value: string; onChange: (value: string) => void; extensions?: unknown[] }) => {
    codeMirrorProps(props);
    return <textarea aria-label="Code editor" onChange={(event) => props.onChange(event.target.value)} value={props.value} />;
  },
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

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

function renderWorkspace(files: SchemeFile[]) {
  postJson.mockImplementation(async (path: string, body?: unknown) => {
    if (path === "/scheme-files/list") {
      return { files };
    }
    if (path === "/scheme-files/create") {
      const payload = body as { name: string; content: string };
      return {
        file: {
          id: 2,
          user_id: 1,
          name: payload.name,
          content: payload.content,
          created_at: "2026-04-01T10:00:00+00:00",
          updated_at: "2026-04-01T10:00:00+00:00",
        },
      };
    }
    if (path === "/scheme-files/save") {
      const payload = body as { id: number; name: string; content: string };
      return {
        file: {
          id: payload.id,
          user_id: 1,
          name: payload.name,
          content: payload.content,
          created_at: "2026-04-01T10:00:00+00:00",
          updated_at: "2026-04-01T10:05:00+00:00",
        },
      };
    }
    if (path === "/scheme-files/delete") {
      return { deleted: true, id: 1 };
    }
    throw new Error(`Unexpected path ${path}`);
  });

  return render(<SchemeWorkspace onLogout={vi.fn()} user={user} />);
}

describe("SchemeWorkspace", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("loads files, autosaves edits, and shows the visualizer output", async () => {
    const actor = userEvent.setup();
    const startingFile: SchemeFile = {
      id: 1,
      user_id: 1,
      name: "scheme 1",
      content: "scheme () main ():\nend",
      created_at: "2026-04-01T10:00:00+00:00",
      updated_at: "2026-04-01T10:00:00+00:00",
    };
    renderWorkspace([startingFile]);

    expect(await screen.findByRole("heading", { name: "scheme 1" })).toBeInTheDocument();

    const editor = screen.getByLabelText("Code editor");
    await actor.clear(editor);
    await actor.type(
      editor,
      "scheme (in1 in2) xor2 (out):\n local both any not_both\n (in1 in2) and (both)\n (in1 in2) or (any)\n (both) not (not_both)\n (any not_both) and (out)\nend",
    );

    await act(async () => {
      await new Promise((resolve) => window.setTimeout(resolve, 650));
    });

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith(
        "/scheme-files/save",
        expect.objectContaining({
          id: 1,
          name: "scheme 1",
          content: expect.stringContaining("xor2"),
        }),
      );
    });

    await actor.click(screen.getByRole("button", { name: "Open visualizer" }));
    await actor.click(screen.getByRole("button", { name: "in1 0" }));
    expect(await screen.findByLabelText("out 1")).toBeInTheDocument();
  }, 15000);

  it("creates a file when the workspace is empty", async () => {
    const actor = userEvent.setup();
    renderWorkspace([]);
    await actor.click(await screen.findByRole("button", { name: "Create first file" }));

    await waitFor(() => {
      expect(postJson).toHaveBeenCalledWith("/scheme-files/create", { name: "scheme 1", content: "" });
    });
  });

  it("passes scheme editor extensions into CodeMirror", async () => {
    const startingFile: SchemeFile = {
      id: 1,
      user_id: 1,
      name: "scheme 1",
      content: "scheme () main ():\nend",
      created_at: "2026-04-01T10:00:00+00:00",
      updated_at: "2026-04-01T10:00:00+00:00",
    };

    renderWorkspace([startingFile]);

    await screen.findByRole("heading", { name: "scheme 1" });

    expect(codeMirrorProps).toHaveBeenCalledWith(
      expect.objectContaining({
        extensions: expect.any(Array),
      }),
    );
    const latestProps = codeMirrorProps.mock.calls.at(-1)?.[0] as { extensions?: unknown[] } | undefined;
    expect(latestProps?.extensions?.length).toBeGreaterThan(0);
  });

  it("keeps newer editor content when an older save response arrives late", async () => {
    const startingFile: SchemeFile = {
      id: 1,
      user_id: 1,
      name: "scheme 1",
      content: "scheme () main ():\nend",
      created_at: "2026-04-01T10:00:00+00:00",
      updated_at: "2026-04-01T10:00:00+00:00",
    };
    const saveResponses = [createDeferred<{ file: SchemeFile }>(), createDeferred<{ file: SchemeFile }>()];
    const savePayloads: Array<{ id: number; name: string; content: string }> = [];

    postJson.mockImplementation(async (path: string, body?: unknown) => {
      if (path === "/scheme-files/list") {
        return { files: [startingFile] };
      }
      if (path === "/scheme-files/save") {
        savePayloads.push(body as { id: number; name: string; content: string });
        return saveResponses[savePayloads.length - 1].promise;
      }
      throw new Error(`Unexpected path ${path}`);
    });

    render(<SchemeWorkspace onLogout={vi.fn()} user={user} />);
    await screen.findByRole("heading", { name: "scheme 1" });

    const firstContent = "scheme () main (out):\nend";
    const secondContent = "scheme () main (out):\n local temp\nend";

    await act(async () => {
      const latestProps = codeMirrorProps.mock.calls.at(-1)?.[0] as { onChange: (value: string) => void };
      latestProps.onChange(firstContent);
    });

    await act(async () => {
      await new Promise((resolve) => window.setTimeout(resolve, 650));
    });
    await waitFor(() => {
      expect(savePayloads).toHaveLength(1);
    });

    await act(async () => {
      const latestProps = codeMirrorProps.mock.calls.at(-1)?.[0] as { onChange: (value: string) => void };
      latestProps.onChange(secondContent);
    });

    await act(async () => {
      await new Promise((resolve) => window.setTimeout(resolve, 650));
    });
    await waitFor(() => {
      expect(savePayloads).toHaveLength(2);
    });

    await act(async () => {
      saveResponses[1].resolve({
        file: {
          ...startingFile,
          content: secondContent,
          updated_at: "2026-04-01T10:06:00+00:00",
        },
      });
      await Promise.resolve();
    });

    await act(async () => {
      saveResponses[0].resolve({
        file: {
          ...startingFile,
          content: firstContent,
          updated_at: "2026-04-01T10:05:00+00:00",
        },
      });
      await Promise.resolve();
    });

    await waitFor(() => {
      expect(screen.getByLabelText("Code editor")).toHaveValue(secondContent);
    });
  });
});
