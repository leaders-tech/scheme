/*
This file parses and evaluates the small teaching language used for scheme files.
Edit this file when language rules, diagnostics, or visualizer evaluation behavior changes.
Copy this file as a starting point when you add another tiny language tool in the frontend.
*/

import type { SchemeAnalysis, SchemeDiagnostic } from "../../shared/types";

type TokenType = "word" | "lparen" | "rparen" | "colon";

type Token = {
  type: TokenType;
  value: string;
  line: number;
  column: number;
  from: number;
  to: number;
};

type SignalRef = {
  name: string;
  line: number;
  column: number;
  from: number;
  to: number;
};

type SignalList = {
  items: SignalRef[];
  line: number;
  column: number;
  from: number;
  to: number;
};

type StatementNode = {
  inputs: SignalList;
  callee: SignalRef;
  outputs: SignalList;
};

type SchemeNode = {
  name: SignalRef;
  inputs: SignalList;
  outputs: SignalList;
  locals: SignalRef[];
  statements: StatementNode[];
  start: number;
  end: number;
};

type ParsedFile = {
  schemes: SchemeNode[];
};

type ParseSuccess = {
  ok: true;
  parsed: ParsedFile;
};

type ParseFailure = {
  ok: false;
  diagnostic: SchemeDiagnostic;
};

type ParseResult = ParseSuccess | ParseFailure;

type EvaluateResult = {
  outputs: Record<string, 0 | 1>;
};

type AnalysisWithAst = SchemeAnalysis & {
  parsed: ParsedFile | null;
};

type EditorNameRef = {
  name: string;
  from: number;
  to: number;
};

export type EditorSchemeSymbols = {
  name: string;
  start: number;
  end: number;
  inputs: string[];
  outputs: string[];
  locals: string[];
  schemeNameRefs: EditorNameRef[];
  signalRefs: EditorNameRef[];
};

export type EditorSymbolData = {
  helperSchemeNames: string[];
  schemes: EditorSchemeSymbols[];
  activeScheme: EditorSchemeSymbols | null;
  visibleSignals: string[];
};

const BUILTIN_ARITY: Record<string, { inputs: number; outputs: number }> = {
  zero: { inputs: 0, outputs: 1 },
  one: { inputs: 0, outputs: 1 },
  not: { inputs: 1, outputs: 1 },
  and: { inputs: 2, outputs: 1 },
  or: { inputs: 2, outputs: 1 },
  xor: { inputs: 2, outputs: 1 },
};

export const BUILTIN_SCHEME_NAMES = Object.freeze(Object.keys(BUILTIN_ARITY));

class ParseError extends Error {
  diagnostic: SchemeDiagnostic;

  constructor(message: string, line: number, column: number) {
    super(message);
    this.diagnostic = { severity: "error", message, line, column };
  }
}

class TokenStream {
  private index = 0;

  constructor(private readonly tokens: Token[]) {}

  peek(offset = 0): Token | null {
    return this.tokens[this.index + offset] ?? null;
  }

  next(): Token | null {
    const token = this.peek();
    if (token) {
      this.index += 1;
    }
    return token;
  }

  expect(type: TokenType, value?: string): Token {
    const token = this.next();
    if (!token) {
      throw new ParseError(`Expected ${describeExpected(type, value)}.`, lastLine(this.tokens), lastColumn(this.tokens));
    }
    if (token.type !== type || (value !== undefined && token.value !== value)) {
      throw new ParseError(
        `Expected ${describeExpected(type, value)}, found "${token.value}".`,
        token.line,
        token.column,
      );
    }
    return token;
  }
}

function describeExpected(type: TokenType, value?: string) {
  if (value !== undefined) {
    return `"${value}"`;
  }
  if (type === "word") {
    return "an identifier";
  }
  if (type === "lparen") {
    return `"("`;
  }
  if (type === "rparen") {
    return `")"`;
  }
  return `":"`;
}

function lastLine(tokens: Token[]): number {
  return tokens[tokens.length - 1]?.line ?? 1;
}

function lastColumn(tokens: Token[]): number {
  const token = tokens[tokens.length - 1];
  if (!token) {
    return 1;
  }
  return token.column + Math.max(token.value.length - 1, 0);
}

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let line = 1;
  let column = 1;
  let index = 0;

  while (index < source.length) {
    const char = source[index];
    if (char === "\n") {
      index += 1;
      line += 1;
      column = 1;
      continue;
    }
    if (/\s/.test(char)) {
      index += 1;
      column += 1;
      continue;
    }
    if (char === "(") {
      tokens.push({ type: "lparen", value: char, line, column, from: index, to: index + 1 });
      index += 1;
      column += 1;
      continue;
    }
    if (char === ")") {
      tokens.push({ type: "rparen", value: char, line, column, from: index, to: index + 1 });
      index += 1;
      column += 1;
      continue;
    }
    if (char === ":") {
      tokens.push({ type: "colon", value: char, line, column, from: index, to: index + 1 });
      index += 1;
      column += 1;
      continue;
    }
    if (/[A-Za-z0-9_]/.test(char)) {
      const start = index;
      const startColumn = column;
      while (index < source.length && /[A-Za-z0-9_]/.test(source[index])) {
        index += 1;
        column += 1;
      }
      tokens.push({
        type: "word",
        value: source.slice(start, index),
        line,
        column: startColumn,
        from: start,
        to: index,
      });
      continue;
    }
    throw new ParseError(`Unexpected character "${char}".`, line, column);
  }

  return tokens;
}

function parseSignalList(stream: TokenStream): SignalList {
  const open = stream.expect("lparen");
  const items: SignalRef[] = [];
  while (stream.peek()?.type !== "rparen") {
    const token = stream.expect("word");
    items.push({ name: token.value, line: token.line, column: token.column, from: token.from, to: token.to });
  }
  const close = stream.expect("rparen");
  return { items, line: open.line, column: open.column, from: open.from, to: close.to };
}

function parseStatement(stream: TokenStream): StatementNode {
  const inputs = parseSignalList(stream);
  const callee = stream.expect("word");
  const outputs = parseSignalList(stream);
  return {
    inputs,
    callee: { name: callee.value, line: callee.line, column: callee.column, from: callee.from, to: callee.to },
    outputs,
  };
}

function parseScheme(stream: TokenStream): SchemeNode {
  const schemeToken = stream.expect("word", "scheme");
  const inputs = parseSignalList(stream);
  const nameToken = stream.expect("word");
  const outputs = parseSignalList(stream);
  stream.expect("colon");

  const locals: SignalRef[] = [];
  if (stream.peek()?.type === "word" && stream.peek()?.value === "local") {
    stream.next();
    while (stream.peek()?.type === "word" && stream.peek()?.value !== "end") {
      const token = stream.next()!;
      locals.push({ name: token.value, line: token.line, column: token.column, from: token.from, to: token.to });
    }
  }

  const statements: StatementNode[] = [];
  while (!(stream.peek()?.type === "word" && stream.peek()?.value === "end")) {
    if (!stream.peek()) {
      throw new ParseError(`Missing "end" for scheme "${nameToken.value}".`, schemeToken.line, schemeToken.column);
    }
    if (stream.peek()?.type !== "lparen") {
      const token = stream.peek()!;
      throw new ParseError(`Expected "(" or "end", found "${token.value}".`, token.line, token.column);
    }
    statements.push(parseStatement(stream));
  }
  const endToken = stream.expect("word", "end");

  return {
    name: { name: nameToken.value, line: nameToken.line, column: nameToken.column, from: nameToken.from, to: nameToken.to },
    inputs,
    outputs,
    locals,
    statements,
    start: schemeToken.from,
    end: endToken.to,
  };
}

function parseFile(source: string): ParseResult {
  let tokens: Token[];
  try {
    tokens = tokenize(source);
  } catch (error) {
    return { ok: false, diagnostic: (error as ParseError).diagnostic };
  }
  const stream = new TokenStream(tokens);
  const schemes: SchemeNode[] = [];
  try {
    while (stream.peek()) {
      const token = stream.peek()!;
      if (token.type !== "word" || token.value !== "scheme") {
        throw new ParseError(`Expected "scheme", found "${token.value}".`, token.line, token.column);
      }
      schemes.push(parseScheme(stream));
    }
  } catch (error) {
    return { ok: false, diagnostic: (error as ParseError).diagnostic };
  }
  return { ok: true, parsed: { schemes } };
}

function diagnostic(message: string, ref: { line: number; column: number }): SchemeDiagnostic {
  return { severity: "error", message, line: ref.line, column: ref.column };
}

function collectNameDiagnostics(items: SignalRef[], scopeName: string, diagnostics: SchemeDiagnostic[]) {
  const seen = new Map<string, SignalRef>();
  for (const item of items) {
    const previous = seen.get(item.name);
    if (previous) {
      diagnostics.push(diagnostic(`Duplicate name "${item.name}" in ${scopeName}.`, item));
      continue;
    }
    seen.set(item.name, item);
  }
}

function analyzeParsed(parsed: ParsedFile): AnalysisWithAst {
  const diagnostics: SchemeDiagnostic[] = [];
  if (parsed.schemes.length === 0) {
    diagnostics.push({ severity: "error", message: 'File must contain at least one "scheme" definition.', line: 1, column: 1 });
    return { mainSchemeName: null, inputs: [], outputs: [], diagnostics, isValid: false, parsed };
  }

  const byName = new Map<string, SchemeNode>();
  for (const scheme of parsed.schemes) {
    if (BUILTIN_ARITY[scheme.name.name]) {
      diagnostics.push(diagnostic(`Scheme name "${scheme.name.name}" is reserved for a built-in scheme.`, scheme.name));
    }
    if (byName.has(scheme.name.name)) {
      diagnostics.push(diagnostic(`Duplicate scheme name "${scheme.name.name}".`, scheme.name));
    } else {
      byName.set(scheme.name.name, scheme);
    }
  }

  for (const scheme of parsed.schemes) {
    const allNames = [...scheme.inputs.items, ...scheme.outputs.items, ...scheme.locals];
    collectNameDiagnostics(scheme.inputs.items, `inputs of "${scheme.name.name}"`, diagnostics);
    collectNameDiagnostics(scheme.outputs.items, `outputs of "${scheme.name.name}"`, diagnostics);
    collectNameDiagnostics(scheme.locals, `locals of "${scheme.name.name}"`, diagnostics);

    const declared = new Map<string, SignalRef>();
    for (const item of allNames) {
      const previous = declared.get(item.name);
      if (previous) {
        diagnostics.push(diagnostic(`Signal "${item.name}" is declared more than once in scheme "${scheme.name.name}".`, item));
        continue;
      }
      declared.set(item.name, item);
    }

    for (const statement of scheme.statements) {
      const calleeScheme = byName.get(statement.callee.name);
      const builtIn = BUILTIN_ARITY[statement.callee.name];
      if (!builtIn && !calleeScheme) {
        diagnostics.push(diagnostic(`Unknown scheme "${statement.callee.name}".`, statement.callee));
      } else {
        const expectedInputs = builtIn ? builtIn.inputs : calleeScheme!.inputs.items.length;
        const expectedOutputs = builtIn ? builtIn.outputs : calleeScheme!.outputs.items.length;
        if (statement.inputs.items.length !== expectedInputs) {
          diagnostics.push(
            diagnostic(
              `Scheme "${statement.callee.name}" expects ${expectedInputs} input(s), got ${statement.inputs.items.length}.`,
              statement.callee,
            ),
          );
        }
        if (statement.outputs.items.length !== expectedOutputs) {
          diagnostics.push(
            diagnostic(
              `Scheme "${statement.callee.name}" expects ${expectedOutputs} output(s), got ${statement.outputs.items.length}.`,
              statement.callee,
            ),
          );
        }
      }

      for (const signal of [...statement.inputs.items, ...statement.outputs.items]) {
        if (!declared.has(signal.name)) {
          diagnostics.push(diagnostic(`Signal "${signal.name}" is not declared in scheme "${scheme.name.name}".`, signal));
        }
      }
    }
  }

  const visitState = new Map<string, "visiting" | "done">();
  const stack: string[] = [];
  const visit = (name: string) => {
    const state = visitState.get(name);
    if (state === "done") {
      return;
    }
    if (state === "visiting") {
      const ref = byName.get(name)?.name ?? { line: 1, column: 1 };
      diagnostics.push(diagnostic(`Recursive scheme usage is not allowed. Cycle: ${[...stack, name].join(" -> ")}.`, ref));
      return;
    }
    visitState.set(name, "visiting");
    stack.push(name);
    const scheme = byName.get(name);
    if (scheme) {
      for (const statement of scheme.statements) {
        if (byName.has(statement.callee.name)) {
          visit(statement.callee.name);
        }
      }
    }
    stack.pop();
    visitState.set(name, "done");
  };
  for (const scheme of parsed.schemes) {
    visit(scheme.name.name);
  }

  const mainScheme = parsed.schemes[parsed.schemes.length - 1] ?? null;
  return {
    mainSchemeName: mainScheme?.name.name ?? null,
    inputs: mainScheme?.inputs.items.map((item) => item.name) ?? [],
    outputs: mainScheme?.outputs.items.map((item) => item.name) ?? [],
    diagnostics,
    isValid: diagnostics.length === 0,
    parsed,
  };
}

function runBuiltIn(name: string, inputValues: number[]): number[] {
  if (name === "zero") {
    return [0];
  }
  if (name === "one") {
    return [1];
  }
  if (name === "not") {
    return [inputValues[0] === 1 ? 0 : 1];
  }
  if (name === "and") {
    return [inputValues[0] === 1 && inputValues[1] === 1 ? 1 : 0];
  }
  if (name === "or") {
    return [inputValues[0] === 1 || inputValues[1] === 1 ? 1 : 0];
  }
  if (name === "xor") {
    return [inputValues[0] === inputValues[1] ? 0 : 1];
  }
  throw new Error(`Unknown built-in ${name}`);
}

function evaluateScheme(parsed: ParsedFile, schemeName: string, inputs: number[]): number[] {
  const scheme = parsed.schemes.find((item) => item.name.name === schemeName);
  if (!scheme) {
    throw new Error(`Scheme ${schemeName} was not found.`);
  }

  const values = new Map<string, number>();
  scheme.inputs.items.forEach((signal, index) => values.set(signal.name, inputs[index] ?? 0));
  scheme.outputs.items.forEach((signal) => values.set(signal.name, 0));
  scheme.locals.forEach((signal) => values.set(signal.name, 0));

  for (const statement of scheme.statements) {
    const inputValues = statement.inputs.items.map((signal) => values.get(signal.name) ?? 0);
    const nextValues = BUILTIN_ARITY[statement.callee.name]
      ? runBuiltIn(statement.callee.name, inputValues)
      : evaluateScheme(parsed, statement.callee.name, inputValues);
    statement.outputs.items.forEach((signal, index) => values.set(signal.name, nextValues[index] ?? 0));
  }

  return scheme.outputs.items.map((signal) => (values.get(signal.name) === 1 ? 1 : 0));
}

export function analyzeSchemeSource(source: string): AnalysisWithAst {
  if (!source.trim()) {
    return {
      mainSchemeName: null,
      inputs: [],
      outputs: [],
      diagnostics: [{ severity: "error", message: "File is empty. Add at least one scheme definition.", line: 1, column: 1 }],
      isValid: false,
      parsed: null,
    };
  }
  const parsed = parseFile(source);
  if (!parsed.ok) {
    return { mainSchemeName: null, inputs: [], outputs: [], diagnostics: [parsed.diagnostic], isValid: false, parsed: null };
  }
  return analyzeParsed(parsed.parsed);
}

function buildEditorSchemesFromParsed(parsed: ParsedFile): EditorSchemeSymbols[] {
  return parsed.schemes.map((scheme) => ({
    name: scheme.name.name,
    start: scheme.start,
    end: scheme.end,
    inputs: scheme.inputs.items.map((item) => item.name),
    outputs: scheme.outputs.items.map((item) => item.name),
    locals: scheme.locals.map((item) => item.name),
    schemeNameRefs: [
      { name: scheme.name.name, from: scheme.name.from, to: scheme.name.to },
      ...scheme.statements.map((statement) => ({
        name: statement.callee.name,
        from: statement.callee.from,
        to: statement.callee.to,
      })),
    ],
    signalRefs: [
      ...scheme.inputs.items.map((item) => ({ name: item.name, from: item.from, to: item.to })),
      ...scheme.outputs.items.map((item) => ({ name: item.name, from: item.from, to: item.to })),
      ...scheme.locals.map((item) => ({ name: item.name, from: item.from, to: item.to })),
      ...scheme.statements.flatMap((statement) => [
        ...statement.inputs.items.map((item) => ({ name: item.name, from: item.from, to: item.to })),
        ...statement.outputs.items.map((item) => ({ name: item.name, from: item.from, to: item.to })),
      ]),
    ],
  }));
}

type LooseToken = {
  type: TokenType;
  value: string;
  from: number;
  to: number;
};

function tokenizeForEditor(source: string): LooseToken[] {
  const tokens: LooseToken[] = [];
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

function readLooseSignalList(tokens: LooseToken[], index: number): { refs: EditorNameRef[]; nextIndex: number } | null {
  if (tokens[index]?.type !== "lparen") {
    return null;
  }
  const refs: EditorNameRef[] = [];
  let cursor = index + 1;
  while (cursor < tokens.length && tokens[cursor].type !== "rparen") {
    if (tokens[cursor].type === "word") {
      refs.push({ name: tokens[cursor].value, from: tokens[cursor].from, to: tokens[cursor].to });
      cursor += 1;
      continue;
    }
    return null;
  }
  if (tokens[cursor]?.type !== "rparen") {
    return null;
  }
  return { refs, nextIndex: cursor + 1 };
}

function buildEditorSchemesFromFallback(source: string): EditorSchemeSymbols[] {
  const tokens = tokenizeForEditor(source);
  const schemes: EditorSchemeSymbols[] = [];

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.type !== "word" || token.value !== "scheme") {
      continue;
    }

    const inputs = readLooseSignalList(tokens, index + 1);
    const nameToken = inputs ? tokens[inputs.nextIndex] : null;
    const outputs = nameToken ? readLooseSignalList(tokens, inputs!.nextIndex + 1) : null;
    if (!inputs || !nameToken || nameToken.type !== "word" || !outputs) {
      continue;
    }

    let cursor = outputs.nextIndex;
    if (tokens[cursor]?.type === "colon") {
      cursor += 1;
    }

    const locals: EditorNameRef[] = [];
    if (tokens[cursor]?.type === "word" && tokens[cursor]?.value === "local") {
      cursor += 1;
      while (tokens[cursor]?.type === "word" && !["scheme", "local", "end"].includes(tokens[cursor].value)) {
        locals.push({ name: tokens[cursor].value, from: tokens[cursor].from, to: tokens[cursor].to });
        cursor += 1;
      }
    }

    const nextSchemeIndex = tokens.findIndex((candidate, candidateIndex) => candidateIndex > index && candidate.type === "word" && candidate.value === "scheme");
    const endToken = tokens.find(
      (candidate, candidateIndex) =>
        candidateIndex >= cursor &&
        candidate.type === "word" &&
        candidate.value === "end" &&
        (nextSchemeIndex === -1 || candidateIndex < nextSchemeIndex),
    );

    schemes.push({
      name: nameToken.value,
      start: token.from,
      end: endToken?.to ?? source.length,
      inputs: inputs.refs.map((item) => item.name),
      outputs: outputs.refs.map((item) => item.name),
      locals: locals.map((item) => item.name),
      schemeNameRefs: [{ name: nameToken.value, from: nameToken.from, to: nameToken.to }],
      signalRefs: [...inputs.refs, ...outputs.refs, ...locals],
    });
  }

  return schemes;
}

export function collectEditorSymbols(source: string, offset: number): EditorSymbolData {
  const parsed = parseFile(source);
  const schemes = parsed.ok ? buildEditorSchemesFromParsed(parsed.parsed) : buildEditorSchemesFromFallback(source);
  const mainSchemeName = schemes[schemes.length - 1]?.name ?? null;
  const helperSchemeNames = schemes
    .map((scheme) => scheme.name)
    .filter((name, index, items) => name !== mainSchemeName && !BUILTIN_SCHEME_NAMES.includes(name) && items.indexOf(name) === index);
  const activeScheme = schemes.find((scheme) => offset >= scheme.start && offset <= scheme.end) ?? null;
  const visibleSignals = activeScheme ? Array.from(new Set([...activeScheme.inputs, ...activeScheme.outputs, ...activeScheme.locals])) : [];
  return { helperSchemeNames, schemes, activeScheme, visibleSignals };
}

export function collectSchemeNames(source: string): string[] {
  return collectEditorSymbols(source, 0).helperSchemeNames;
}

export function collectVisibleSignalsAtOffset(source: string, offset: number): string[] {
  return collectEditorSymbols(source, offset).visibleSignals;
}

export function evaluateMainScheme(source: string, inputState: Record<string, 0 | 1>): EvaluateResult | null {
  const analysis = analyzeSchemeSource(source);
  if (!analysis.isValid || !analysis.parsed || !analysis.mainSchemeName) {
    return null;
  }
  const outputValues = evaluateScheme(
    analysis.parsed,
    analysis.mainSchemeName,
    analysis.inputs.map((name) => inputState[name] ?? 0),
  );
  const outputs = Object.fromEntries(
    analysis.outputs.map((name, index) => [name, outputValues[index] === 1 ? 1 : 0]),
  ) as Record<string, 0 | 1>;
  return { outputs };
}
