/*
This file tests editor-only highlighting and completion helpers for the scheme language.
Edit this file when syntax colors or completion suggestions change.
Copy this file as a starting point when you add another custom editor support layer.
*/

import { describe, expect, it } from "vitest";
import { classifySchemeTokens, collectSchemeCompletions } from "./schemeEditor";

describe("schemeEditor", () => {
  it("classifies keywords, built-ins, helper schemes, signals, and punctuation", () => {
    const source = `
scheme (a b) helper (mid):
 (a b) and (mid)
end

scheme (x) main (out):
 local temp
 (x) helper (temp)
 end
`;

    const tokens = classifySchemeTokens(source);

    expect(tokens.find((token) => token.text === "scheme")?.kind).toBe("keyword");
    expect(tokens.find((token) => token.text === "local")?.kind).toBe("keyword");
    expect(tokens.find((token) => token.text === "end")?.kind).toBe("keyword");
    expect(tokens.find((token) => token.text === "and")?.kind).toBe("builtin");
    expect(tokens.find((token) => token.text === "helper")?.kind).toBe("helper");
    expect(tokens.find((token) => token.text === "temp")?.kind).toBe("signal");
    expect(tokens.find((token) => token.text === "(")?.kind).toBe("punctuation");
  });

  it("suggests built-ins and helper schemes after an input list", () => {
    const source = `
scheme (x) helper (y):
 (x) not (y)
end

scheme (a) main (out):
 (a) 
end
`;

    const offset = source.indexOf("(a) \n") + 4;
    const labels = collectSchemeCompletions(source, offset).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["helper", "not", "and", "xor"]));
  });

  it("suggests visible signals inside signal lists", () => {
    const source = `
scheme (left right) main (out):
 local mid
 (le
end
`;

    const offset = source.indexOf("(le") + 3;
    const labels = collectSchemeCompletions(source, offset).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["left", "right", "out", "mid"]));
  });

  it("still suggests keywords and helpers on a broken file", () => {
    const source = `
scheme (x) helper (y):

scheme (a) main (out):
`;

    const labels = collectSchemeCompletions(source, source.length).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["helper", "local", "end"]));
  });
});
