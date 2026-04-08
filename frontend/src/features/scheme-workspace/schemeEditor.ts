/*
This file adds CodeMirror syntax highlighting and completions for the teaching scheme language.
Edit this file when editor-only UX changes, like token colors or completion suggestions.
Copy this file as a starting point when you add another tiny custom editor language.
*/

import { autocompletion, type Completion, type CompletionContext, type CompletionResult } from "@codemirror/autocomplete";
import { RangeSetBuilder, type Extension } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin, type DecorationSet, type ViewUpdate } from "@codemirror/view";
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

type CompletionKind = "keyword" | "function" | "variable";

export type SchemeEditorCompletion = {
  label: string;
  type: CompletionKind;
  detail: string;
};

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

function isInsideSignalList(source: string, offset: number) {
  let depth = 0;
  for (const token of scanTokens(source)) {
    if (token.from >= offset) {
      break;
    }
    if (token.type === "lparen") {
      depth += 1;
    }
    if (token.type === "rparen" && depth > 0) {
      depth -= 1;
    }
  }
  return depth > 0;
}

function lastTokenBefore(tokens: ScannedToken[], offset: number): ScannedToken | null {
  for (let index = tokens.length - 1; index >= 0; index -= 1) {
    if (tokens[index].to <= offset) {
      return tokens[index];
    }
  }
  return null;
}

function prefixBefore(source: string, offset: number) {
  let start = offset;
  while (start > 0 && /[A-Za-z0-9_]/.test(source[start - 1])) {
    start -= 1;
  }
  return { from: start, text: source.slice(start, offset) };
}

export function collectSchemeCompletions(source: string, offset: number): SchemeEditorCompletion[] {
  const symbols = collectEditorSymbols(source, offset);
  const tokens = scanTokens(source);
  const prefix = prefixBefore(source, offset);
  const previous = lastTokenBefore(tokens, prefix.from);
  const insideSignals = isInsideSignalList(source, offset);
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

  if (!previous || (previous.type === "word" && previous.value === "end")) {
    addKeyword("scheme", "Start a new scheme definition");
  }

  if (symbols.activeScheme && !insideSignals) {
    addKeyword("local", "Declare local signals in this scheme");
    addKeyword("end", "Finish the current scheme");
  }

  if (insideSignals) {
    for (const signal of symbols.visibleSignals) {
      addVariable(signal, "Signal in the current scheme");
    }
  }

  if (!insideSignals) {
    for (const builtIn of BUILTIN_SCHEME_NAMES) {
      addFunction(builtIn, "Built-in scheme");
    }
    for (const helper of symbols.helperSchemeNames) {
      addFunction(helper, "Helper scheme from this file");
    }
  }

  if (options.length === 0) {
    addKeyword("scheme", "Start a new scheme definition");
    addKeyword("local", "Declare local signals in this scheme");
    addKeyword("end", "Finish the current scheme");
    for (const builtIn of BUILTIN_SCHEME_NAMES) {
      addFunction(builtIn, "Built-in scheme");
    }
    for (const helper of symbols.helperSchemeNames) {
      addFunction(helper, "Helper scheme from this file");
    }
    for (const signal of symbols.visibleSignals) {
      addVariable(signal, "Signal in the current scheme");
    }
  }

  return uniqueCompletions(options).sort((left, right) => left.label.localeCompare(right.label));
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
  const options = collectSchemeCompletions(source, context.pos)
    .filter((item) => item.label.startsWith(prefix.text))
    .map(toCodeMirrorCompletion);

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
    autocompletion({ override: [schemeCompletionSource] }),
  ];
}
