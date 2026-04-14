/*
This file adds CodeMirror syntax highlighting and completions for the teaching scheme language.
Edit this file when editor-only UX changes, like token colors or completion suggestions.
Copy this file as a starting point when you add another tiny custom editor language.
*/

import { acceptCompletion, autocompletion, type Completion, type CompletionContext, type CompletionResult } from "@codemirror/autocomplete";
import { insertNewlineAndIndent } from "@codemirror/commands";
import { Prec, RangeSetBuilder, type Extension } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin, keymap, type DecorationSet, type ViewUpdate } from "@codemirror/view";
import { BUILTIN_SCHEME_NAMES, collectEditorSymbols } from "./schemeLanguage";

type ScannedTokenType = "word" | "lparen" | "rparen" | "colon";

type ScannedToken = {
  type: ScannedTokenType;
  value: string;
  from: number;
  to: number;
};

export type SchemeHighlightToken = {
  text: string;
  from: number;
  to: number;
  kind: "keyword" | "builtin" | "helper" | "signal" | "punctuation" | "identifier";
};

type CompletionKind = "keyword" | "function" | "variable" | "text";

export type SchemeEditorCompletion = {
  label: string;
  type: CompletionKind;
  detail: string;
};

type EditorCursorContext =
  | { kind: "top-level" }
  | { kind: "scheme-input-list" }
  | { kind: "scheme-name" }
  | { kind: "scheme-output-list" }
  | { kind: "scheme-colon" }
  | { kind: "body-start"; canDeclareLocal: boolean }
  | { kind: "local-name" }
  | { kind: "statement-input-list" }
  | { kind: "statement-callee" }
  | { kind: "statement-output-list" };

const KEYWORDS = ["scheme", "local", "end"] as const;

const TOKEN_CLASS_NAMES: Record<SchemeHighlightToken["kind"], string> = {
  keyword: "cm-scheme-keyword",
  builtin: "cm-scheme-builtin",
  helper: "cm-scheme-helper",
  signal: "cm-scheme-signal",
  punctuation: "cm-scheme-punctuation",
  identifier: "cm-scheme-identifier",
};

function scanTokens(source: string): ScannedToken[] {
  const tokens: ScannedToken[] = [];
  let index = 0;
  while (index < source.length) {
    const char = source[index];
    if (/\s/.test(char)) {
      index += 1;
      continue;
    }
    if (char === "(") {
      tokens.push({ type: "lparen", value: char, from: index, to: index + 1 });
      index += 1;
      continue;
    }
    if (char === ")") {
      tokens.push({ type: "rparen", value: char, from: index, to: index + 1 });
      index += 1;
      continue;
    }
    if (char === ":") {
      tokens.push({ type: "colon", value: char, from: index, to: index + 1 });
      index += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(char)) {
      const start = index;
      while (index < source.length && /[A-Za-z0-9_]/.test(source[index])) {
        index += 1;
      }
      tokens.push({ type: "word", value: source.slice(start, index), from: start, to: index });
      continue;
    }
    index += 1;
  }
  return tokens;
}

function buildRangeKindMap(source: string) {
  const symbols = collectEditorSymbols(source, 0);
  const helperNames = new Set(symbols.helperSchemeNames);
  const kinds = new Map<string, "helper" | "signal">();

  for (const scheme of symbols.schemes) {
    for (const ref of scheme.schemeNameRefs) {
      if (helperNames.has(ref.name)) {
        kinds.set(`${ref.from}:${ref.to}`, "helper");
      }
    }
    for (const ref of scheme.signalRefs) {
      kinds.set(`${ref.from}:${ref.to}`, "signal");
    }
  }

  return kinds;
}

export function classifySchemeTokens(source: string): SchemeHighlightToken[] {
  const rangeKinds = buildRangeKindMap(source);
  return scanTokens(source).map((token) => {
    const key = `${token.from}:${token.to}`;
    let kind: SchemeHighlightToken["kind"] = "identifier";
    if (token.type !== "word") {
      kind = "punctuation";
    } else if (KEYWORDS.includes(token.value as (typeof KEYWORDS)[number])) {
      kind = "keyword";
    } else if (BUILTIN_SCHEME_NAMES.includes(token.value)) {
      kind = "builtin";
    } else if (rangeKinds.get(key)) {
      kind = rangeKinds.get(key)!;
    }

    return {
      text: token.value,
      from: token.from,
      to: token.to,
      kind,
    };
  });
}

function buildDecorations(source: string): DecorationSet {
  const builder = new RangeSetBuilder<Decoration>();
  for (const token of classifySchemeTokens(source)) {
    const className = TOKEN_CLASS_NAMES[token.kind];
    if (className) {
      builder.add(token.from, token.to, Decoration.mark({ class: className }));
    }
  }
  return builder.finish();
}

const schemeHighlightPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = buildDecorations(view.state.doc.toString());
    }

    update(update: ViewUpdate) {
      if (update.docChanged) {
        this.decorations = buildDecorations(update.state.doc.toString());
      }
    }
  },
  {
    decorations: (value) => value.decorations,
  },
);

function uniqueCompletions(items: SchemeEditorCompletion[]): SchemeEditorCompletion[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${item.type}:${item.label}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function prefixBefore(source: string, offset: number) {
  let start = offset;
  while (start > 0 && /[A-Za-z0-9_]/.test(source[start - 1])) {
    start -= 1;
  }
  return { from: start, text: source.slice(start, offset) };
}

function lastTokenBefore(tokens: ScannedToken[], offset: number): ScannedToken | null {
  for (let index = tokens.length - 1; index >= 0; index -= 1) {
    if (tokens[index].to <= offset) {
      return tokens[index];
    }
  }
  return null;
}

function currentLineIsBlank(source: string, offset: number) {
  const lineStart = source.lastIndexOf("\n", Math.max(offset - 1, 0)) + 1;
  return source.slice(lineStart, offset).trim() === "";
}

function readCompletedSignalList(tokens: ScannedToken[], index: number): number | null {
  if (tokens[index]?.type !== "lparen") {
    return null;
  }
  let cursor = index + 1;
  while (cursor < tokens.length && tokens[cursor].type !== "rparen") {
    if (tokens[cursor].type !== "word") {
      return null;
    }
    cursor += 1;
  }
  return tokens[cursor]?.type === "rparen" ? cursor + 1 : null;
}

function detectEditorCursorContext(source: string, offset: number): EditorCursorContext | null {
  const tokens = scanTokens(source).filter((token) => token.to <= offset);
  const lineBlank = currentLineIsBlank(source, offset);
  let index = 0;
  let state: "top-level" | "scheme-input-list" | "scheme-name" | "scheme-output-list" | "scheme-colon" | "body-start" | "local-name" | "statement-input-list" | "statement-callee" | "statement-output-list" =
    "top-level";
  let canDeclareLocal = false;
  let sawLocalName = false;

  while (true) {
    if (index >= tokens.length) {
      if (state === "local-name" && lineBlank && sawLocalName) {
        return { kind: "body-start", canDeclareLocal: false };
      }
      if (state === "body-start") {
        return { kind: "body-start", canDeclareLocal };
      }
      if (state === "top-level") {
        return { kind: "top-level" };
      }
      if (state === "scheme-input-list") {
        return { kind: "scheme-input-list" };
      }
      if (state === "scheme-name") {
        return { kind: "scheme-name" };
      }
      if (state === "scheme-output-list") {
        return { kind: "scheme-output-list" };
      }
      if (state === "scheme-colon") {
        return { kind: "scheme-colon" };
      }
      if (state === "local-name") {
        return { kind: "local-name" };
      }
      if (state === "statement-input-list") {
        return { kind: "statement-input-list" };
      }
      if (state === "statement-callee") {
        return { kind: "statement-callee" };
      }
      return { kind: "statement-output-list" };
    }

    if (state === "top-level") {
      const token = tokens[index];
      if (token.type !== "word" || token.value !== "scheme") {
        return null;
      }
      state = "scheme-input-list";
      index += 1;
      continue;
    }

    if (state === "scheme-input-list") {
      const nextIndex = readCompletedSignalList(tokens, index);
      if (nextIndex === null) {
        return { kind: "scheme-input-list" };
      }
      state = "scheme-name";
      index = nextIndex;
      continue;
    }

    if (state === "scheme-name") {
      if (tokens[index]?.type !== "word") {
        return { kind: "scheme-name" };
      }
      state = "scheme-output-list";
      index += 1;
      continue;
    }

    if (state === "scheme-output-list") {
      const nextIndex = readCompletedSignalList(tokens, index);
      if (nextIndex === null) {
        return { kind: "scheme-output-list" };
      }
      state = "scheme-colon";
      index = nextIndex;
      continue;
    }

    if (state === "scheme-colon") {
      if (tokens[index]?.type !== "colon") {
        return { kind: "scheme-colon" };
      }
      state = "body-start";
      canDeclareLocal = true;
      index += 1;
      continue;
    }

    if (state === "body-start") {
      const token = tokens[index];
      if (token.type === "word" && token.value === "end") {
        state = "top-level";
        canDeclareLocal = false;
        sawLocalName = false;
        index += 1;
        continue;
      }
      if (canDeclareLocal && token.type === "word" && token.value === "local") {
        state = "local-name";
        canDeclareLocal = false;
        sawLocalName = false;
        index += 1;
        continue;
      }
      state = "statement-input-list";
      continue;
    }

    if (state === "local-name") {
      const token = tokens[index];
      if (token.type === "word" && token.value !== "end") {
        sawLocalName = true;
        index += 1;
        continue;
      }
      if (token.type === "lparen") {
        state = "statement-input-list";
        continue;
      }
      if (token.type === "word" && token.value === "end") {
        state = "top-level";
        sawLocalName = false;
        index += 1;
        continue;
      }
      return { kind: "local-name" };
    }

    if (state === "statement-input-list") {
      const nextIndex = readCompletedSignalList(tokens, index);
      if (nextIndex === null) {
        return { kind: "statement-input-list" };
      }
      state = "statement-callee";
      index = nextIndex;
      continue;
    }

    if (state === "statement-callee") {
      if (tokens[index]?.type !== "word") {
        return { kind: "statement-callee" };
      }
      state = "statement-output-list";
      index += 1;
      continue;
    }

    const nextIndex = readCompletedSignalList(tokens, index);
    if (nextIndex === null) {
      return { kind: "statement-output-list" };
    }
    state = "body-start";
    canDeclareLocal = false;
    index = nextIndex;
  }
}

function normalizeEditorCursorContext(source: string, offset: number, cursorContext: EditorCursorContext | null): EditorCursorContext | null {
  if (!cursorContext) {
    return null;
  }

  const prefix = prefixBefore(source, offset);
  const previous = lastTokenBefore(scanTokens(source), prefix.from);
  const symbols = collectEditorSymbols(source, offset);
  const activeHeaderColon =
    symbols.activeScheme?.start !== undefined ? source.indexOf(":", symbols.activeScheme.start) : -1;

  if (previous?.type === "colon" && cursorContext.kind === "statement-input-list") {
    return { kind: "body-start", canDeclareLocal: true };
  }

  if (activeHeaderColon !== -1 && prefix.from > activeHeaderColon && cursorContext.kind === "scheme-input-list") {
    return { kind: "statement-input-list" };
  }

  return cursorContext;
}

function collectFallbackCompletions(source: string, offset: number): SchemeEditorCompletion[] {
  const symbols = collectEditorSymbols(source, offset);
  const options: SchemeEditorCompletion[] = [{ label: "scheme", type: "keyword", detail: "Start a new scheme definition" }];

  if (symbols.activeScheme) {
    options.push({ label: "(", type: "text", detail: "Start a signal list" });
    options.push({ label: "end", type: "keyword", detail: "Finish the current scheme" });
    options.push({ label: "local", type: "keyword", detail: "Declare local signals in this scheme" });
  }

  for (const builtIn of BUILTIN_SCHEME_NAMES) {
    options.push({ label: builtIn, type: "function", detail: "Built-in scheme" });
  }
  for (const helper of symbols.helperSchemeNames) {
    options.push({ label: helper, type: "function", detail: "Helper scheme from this file" });
  }
  for (const signal of symbols.visibleSignals) {
    options.push({ label: signal, type: "variable", detail: "Signal in the current scheme" });
  }

  return uniqueCompletions(options);
}

export function collectSchemeCompletions(source: string, offset: number): SchemeEditorCompletion[] {
  const symbols = collectEditorSymbols(source, offset);
  const prefix = prefixBefore(source, offset);
  const cursorContext = normalizeEditorCursorContext(source, offset, detectEditorCursorContext(source, prefix.from));
  const options: SchemeEditorCompletion[] = [];

  const addKeyword = (label: (typeof KEYWORDS)[number], detail: string) => {
    options.push({ label, type: "keyword", detail });
  };
  const addFunction = (label: string, detail: string) => {
    options.push({ label, type: "function", detail });
  };
  const addVariable = (label: string, detail: string) => {
    options.push({ label, type: "variable", detail });
  };
  const addText = (label: string, detail: string) => {
    options.push({ label, type: "text", detail });
  };

  if (!cursorContext) {
    return [];
  }

  if (cursorContext.kind === "top-level") {
    addKeyword("scheme", "Start a new scheme definition");
  }

  if (cursorContext.kind === "scheme-input-list") {
    addText("(", "Start the input signal list");
  }

  if (cursorContext.kind === "scheme-output-list") {
    addText("(", "Start the output signal list");
  }

  if (cursorContext.kind === "scheme-colon") {
    addText(":", "Finish the scheme header");
  }

  if (cursorContext.kind === "body-start") {
    addText("(", "Start a statement");
    addKeyword("end", "Finish the current scheme");
    if (cursorContext.canDeclareLocal) {
      addKeyword("local", "Declare local signals in this scheme");
    }
  }

  if (cursorContext.kind === "statement-input-list") {
    addText("(", "Start the input signal list");
    for (const signal of symbols.visibleSignals) {
      addVariable(signal, "Signal in the current scheme");
    }
  }

  if (cursorContext.kind === "statement-callee") {
    for (const builtIn of BUILTIN_SCHEME_NAMES) {
      addFunction(builtIn, "Built-in scheme");
    }
    for (const helper of symbols.helperSchemeNames) {
      addFunction(helper, "Helper scheme from this file");
    }
  }

  if (cursorContext.kind === "statement-output-list") {
    addText("(", "Start the output signal list");
    const writableSignals = symbols.activeScheme ? [...symbols.activeScheme.outputs, ...symbols.activeScheme.locals] : [];
    for (const signal of Array.from(new Set(writableSignals))) {
      addVariable(signal, "Writable signal in the current scheme");
    }
  }

  return uniqueCompletions(options);
}

function toCodeMirrorCompletion(item: SchemeEditorCompletion): Completion {
  return {
    label: item.label,
    type: item.type,
    detail: item.detail,
  };
}

function schemeCompletionSource(context: CompletionContext): CompletionResult | null {
  const source = context.state.doc.toString();
  const prefix = prefixBefore(source, context.pos);
  let options = collectSchemeCompletions(source, context.pos)
    .filter((item) => item.label.startsWith(prefix.text))
    .map(toCodeMirrorCompletion);

  if (options.length === 0 && context.explicit) {
    options = collectFallbackCompletions(source, context.pos)
      .filter((item) => item.label.startsWith(prefix.text))
      .map(toCodeMirrorCompletion);
  }

  if (options.length === 0 && !context.explicit) {
    return null;
  }

  return {
    from: prefix.from,
    options,
    validFor: /^\w*$/,
  };
}

export function schemeLanguageSupport(): Extension[] {
  return [
    EditorView.baseTheme({
      ".cm-scheme-keyword": { color: "#0f766e", fontWeight: "700" },
      ".cm-scheme-builtin": { color: "#1d4ed8", fontWeight: "600" },
      ".cm-scheme-helper": { color: "#7c3aed", fontWeight: "600" },
      ".cm-scheme-signal": { color: "#b45309" },
      ".cm-scheme-punctuation": { color: "#475569" },
      ".cm-scheme-identifier": { color: "#111827" },
    }),
    schemeHighlightPlugin,
    Prec.highest(
      keymap.of([
        { key: "Tab", run: acceptCompletion },
        { key: "Enter", run: insertNewlineAndIndent },
      ]),
    ),
    autocompletion({ interactionDelay: 0, override: [schemeCompletionSource] }),
  ];
}
