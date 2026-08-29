/*
This file tests local saving and live evaluation in the standalone Schemio playground.
Edit it when the embedded editor or debugger behavior changes.
Copy it when another browser-only learning widget needs a focused UI test.
*/

import { render, screen } from "@testing-library/react";
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

  it("saves edits locally and shows live output bits", async () => {
    const actor = userEvent.setup();
    renderPlayground();

    await actor.click(await screen.findByRole("button", { name: "a 0" }));
    expect(screen.getByLabelText("out 1")).toBeInTheDocument();

    const editor = screen.getByLabelText("Schemio code editor");
    await actor.clear(editor);
    await actor.type(editor, "scheme () main ():\nend");
    expect(window.localStorage.getItem("test.schemio-playground")).toBe("scheme () main ():\nend");
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
