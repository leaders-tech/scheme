/*
This file tests the tiny markdown renderer used for task statements.
Edit this file when markdown rendering behavior changes.
Copy this file as a starting point when you test another shared UI helper.
*/

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SimpleMarkdown } from "./SimpleMarkdown";

describe("SimpleMarkdown", () => {
  it("renders inline backtick examples as code", () => {
    render(<SimpleMarkdown source={"A signal can carry only `0` or `1`.\n- Use the output name `out`."} />);

    expect(screen.getByText("0").tagName).toBe("CODE");
    expect(screen.getByText("1").tagName).toBe("CODE");
    expect(screen.getByText("out").tagName).toBe("CODE");
  });
});
