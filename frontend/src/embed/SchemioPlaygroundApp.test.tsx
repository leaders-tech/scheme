/*
This file tests local saving and live evaluation in the standalone Schemio playground.
Edit it when the embedded editor or debugger behavior changes.
Copy it when another browser-only learning widget needs a focused UI test.
*/

import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SchemioPlayground } from "./SchemioPlaygroundApp";

vi.mock("@uiw/react-codemirror", () => ({
  default: (props: { value: string; onChange: (value: string) => void; editable: boolean }) => (
    <textarea aria-label="Schemio code editor" disabled={!props.editable} onChange={(event) => props.onChange(event.target.value)} value={props.value} />
  ),
}));

const xorSource = `scheme (a b) xor (out):
 local either both not_both
 (a b) or (either)
 (a b) and (both)
 (both) not (not_both)
 (either not_both) and (out)
end
`;

function renderPlayground(initialSource = xorSource) {
  return render(
    <SchemioPlayground initialSource={initialSource} onSourceChange={vi.fn()} persist readOnly={false} storageKey="test.schemio-playground" />,
  );
}

describe("SchemioPlayground", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("saves edits locally and evaluates separate live test cases", async () => {
    const actor = userEvent.setup();
    renderPlayground();

    expect(screen.queryByRole("heading", { name: "Diagnostics" })).not.toBeInTheDocument();
    await actor.click(await screen.findByRole("button", { name: "Test 1: a 0" }));
    expect(screen.getByLabelText("Test 1: out 1")).toBeInTheDocument();

    await actor.click(screen.getByRole("button", { name: "Add test" }));
    expect(screen.getByLabelText("Test 2: out 0")).toBeInTheDocument();
    await actor.click(screen.getByRole("button", { name: "Test 2: b 0" }));
    expect(screen.getByLabelText("Test 2: out 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Test 1: out 1")).toBeInTheDocument();

    const editor = screen.getByLabelText("Schemio code editor");
    fireEvent.change(editor, { target: { value: "scheme () main ():\nend" } });
    expect(window.localStorage.getItem("test.schemio-playground")).toBe("scheme () main ():\nend");
  });

  it("shows diagnostics only when the source has an error", async () => {
    const actor = userEvent.setup();
    renderPlayground();

    const editor = screen.getByLabelText("Schemio code editor");
    await actor.clear(editor);
    await actor.type(editor, "not a scheme");
    expect(await screen.findByRole("heading", { name: "Diagnostics" })).toBeInTheDocument();
    expect(screen.getByText(/Expected "scheme"/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Visualize test/ })).not.toBeInTheDocument();
  });

  it("opens a black signal diagram and animates the selected test", () => {
    vi.useFakeTimers();
    const { container } = renderPlayground();

    fireEvent.click(screen.getByRole("button", { name: "Visualize test 1" }));
    expect(screen.getByRole("dialog", { name: "Signal visualizer for Test 1" })).toBeInTheDocument();
    expect(container.querySelectorAll(".schemio-visualizer__wire--active")).toHaveLength(0);

    fireEvent.click(screen.getByRole("button", { name: "Simulate" }));
    act(() => vi.advanceTimersByTime(599));
    expect(container.querySelectorAll(".schemio-visualizer__wire--active").length).toBeGreaterThan(0);
    expect(container.querySelector('g[data-node-kind="output"] rect')?.getAttribute("fill")).toBe("#101827");
    act(() => vi.advanceTimersByTime(1));
    expect(container.querySelector('g[data-node-kind="output"] rect')?.getAttribute("fill")).toBe("#f87171");

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(container.querySelectorAll(".schemio-visualizer__wire--active")).toHaveLength(0);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Signal visualizer for Test 1" })).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it("loads and resets saved code for a stable storage key", async () => {
    const actor = userEvent.setup();
    window.localStorage.setItem("test.schemio-playground", "scheme () saved ():\nend\n");
    renderPlayground();

    expect(screen.getByLabelText("Schemio code editor")).toHaveValue("scheme () saved ():\nend\n");
    await actor.click(screen.getByRole("button", { name: "Reset saved code" }));
    expect(screen.getByLabelText("Schemio code editor")).toHaveValue(xorSource);
    expect(window.localStorage.getItem("test.schemio-playground")).toBe(xorSource);
  });
});
