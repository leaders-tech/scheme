/*
This file tests the scheme parser, diagnostics, and black-box evaluator.
Edit this file when scheme language rules or evaluation behavior changes.
Copy this file as a starting point when you add another parser-level frontend test.
*/

import { describe, expect, it } from "vitest";
import { analyzeSchemeSource, collectEditorSymbols, collectSchemeNames, collectVisibleSignalsAtOffset, evaluateMainScheme } from "./schemeLanguage";

describe("schemeLanguage", () => {
  it("uses the last scheme as the main scheme and evaluates helper schemes", () => {
    const source = `
scheme (x1 x2) xor2 (out):
 local both any not_both
 (x1 x2) and (both)
 (x1 x2) or (any)
 (both) not (not_both)
 (any not_both) and (out)
end

scheme (a b) main (result):
 (a b) xor2 (result)
end
`;

    const analysis = analyzeSchemeSource(source);
    expect(analysis.isValid).toBe(true);
    expect(analysis.mainSchemeName).toBe("main");
    expect(analysis.inputs).toEqual(["a", "b"]);
    expect(analysis.outputs).toEqual(["result"]);

    expect(evaluateMainScheme(source, { a: 0, b: 0 })?.outputs).toEqual({ result: 0 });
    expect(evaluateMainScheme(source, { a: 0, b: 1 })?.outputs).toEqual({ result: 1 });
    expect(evaluateMainScheme(source, { a: 1, b: 1 })?.outputs).toEqual({ result: 0 });
  });

  it("supports zero and one built-in schemes", () => {
    const source = `
scheme () main (left right):
 () zero (left)
 () one (right)
end
`;

    expect(evaluateMainScheme(source, {})?.outputs).toEqual({ left: 0, right: 1 });
  });

  it("reports recursive usage as an error", () => {
    const source = `
scheme (x) a (out):
 (x) b (out)
end

scheme (x) b (out):
 (x) a (out)
end
`;

    const analysis = analyzeSchemeSource(source);
    expect(analysis.isValid).toBe(false);
    expect(analysis.diagnostics.some((item) => item.message.includes("Recursive scheme usage"))).toBe(true);
  });

  it("reports missing declarations and unknown schemes", () => {
    const source = `
scheme (x) main (out):
 (missing) unknown (out)
end
`;

    const analysis = analyzeSchemeSource(source);
    expect(analysis.isValid).toBe(false);
    expect(analysis.diagnostics.map((item) => item.message)).toEqual(
      expect.arrayContaining(['Unknown scheme "unknown".', 'Signal "missing" is not declared in scheme "main".']),
    );
  });

  it("collects helper names and visible signals for editor tooling", () => {
    const source = `
scheme (x1 x2) xor2 (out):
 local both any not_both
 (x1 x2) and (both)
 (x1 x2) or (any)
 (both) not (not_both)
 (any not_both) and (out)
end

scheme (a b) main (result):
 local temp
 (a b) xor2 (temp)
 (temp) not (result)
end
`;

    const offset = source.indexOf("temp") + 2;
    const symbols = collectEditorSymbols(source, offset);

    expect(collectSchemeNames(source)).toEqual(["xor2"]);
    expect(symbols.helperSchemeNames).toEqual(["xor2"]);
    expect(symbols.activeScheme?.name).toBe("main");
    expect(collectVisibleSignalsAtOffset(source, offset)).toEqual(["a", "b", "result", "temp"]);
  });

  it("keeps editor symbols available on a partially broken file", () => {
    const source = `
scheme (x) helper (y):
 local mid

scheme (a) main (out):
 (a) helper (out)
`;

    const symbols = collectEditorSymbols(source, source.length);
    expect(symbols.helperSchemeNames).toEqual(["helper"]);
    expect(symbols.schemes.some((scheme) => scheme.name === "main")).toBe(true);
  });
});
