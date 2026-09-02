/*
This file checks how HTML template source is prepared before the playground opens it.
Edit it when embedded source formatting changes. Copy it for another component that reads indented template text.
*/

import { describe, expect, it } from "vitest";
import { normaliseEmbeddedSource } from "./schemioPlaygroundElement";

describe("normaliseEmbeddedSource", () => {
  it("removes the shared template indentation and keeps relative indentation", () => {
    expect(normaliseEmbeddedSource(`
      scheme (a b c) or3 (out):
       () zero (out)

      end
    `)).toBe("scheme (a b c) or3 (out):\n () zero (out)\n\nend\n");
  });

  it("accepts a source without template indentation", () => {
    expect(normaliseEmbeddedSource("scheme () main ():\nend\n")).toBe("scheme () main ():\nend\n");
  });
});
