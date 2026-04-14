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

  it("suggests only an opening parenthesis after the scheme keyword", () => {
    const source = "scheme ";

    const labels = collectSchemeCompletions(source, source.length).map((item) => item.label);
    expect(labels).toEqual(["("]);
  });

  it("suggests built-ins and helper schemes after a statement input list", () => {
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
    expect(labels).toEqual(expect.arrayContaining(["helper", "not", "and", "or"]));
  });

  it("suggests only structure tokens after a scheme header", () => {
    const source = `
scheme (x1 x2) mod3 (out):
`;

    const labels = collectSchemeCompletions(source, source.length).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["(", "end", "local"]));
    expect(labels).not.toEqual(expect.arrayContaining(["and", "or", "not"]));
  });

  it("suggests visible signals inside statement input lists", () => {
    const source = `
scheme (left right) main (out):
 local mid
 (le
end
`;

    const offset = source.lastIndexOf("(le") + 3;
    const labels = collectSchemeCompletions(source, offset).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["left", "right", "out", "mid"]));
  });

  it("suggests only writable signals inside statement output lists", () => {
    const source = `
scheme (left right) main (out):
 local mid
 (left right) and (
end
`;

    const offset = source.indexOf("and (") + 5;
    const labels = collectSchemeCompletions(source, offset).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["out", "mid"]));
    expect(labels).not.toEqual(expect.arrayContaining(["left", "right"]));
  });

  it("still suggests structure tokens on a broken file", () => {
    const source = `
scheme (x) helper (y):

scheme (a) main (out):
`;

    const labels = collectSchemeCompletions(source, source.length).map((item) => item.label);
    expect(labels).toEqual(expect.arrayContaining(["(", "local", "end"]));
  });
});
