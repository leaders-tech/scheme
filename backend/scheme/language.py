"""Parse and evaluate the teaching scheme language for backend submit checks.

Edit this file when scheme syntax rules or runtime evaluation behavior changes.
Copy this file as a starting point when you add another tiny deterministic language checker.
"""

from __future__ import annotations

from dataclasses import dataclass


BUILTIN_ARITY: dict[str, tuple[int, int]] = {
    "zero": (0, 1),
    "one": (0, 1),
    "not": (1, 1),
    "and": (2, 1),
    "or": (2, 1),
}


@dataclass(slots=True)
class SchemeDiagnostic:
    line: int
    column: int
    message: str

    def as_dict(self) -> dict[str, int | str]:
        return {"line": self.line, "column": self.column, "message": self.message}


@dataclass(slots=True)
class Token:
    kind: str
    value: str
    line: int
    column: int


@dataclass(slots=True)
class SignalRef:
    name: str
    line: int
    column: int


@dataclass(slots=True)
class SignalList:
    items: list[SignalRef]
    line: int
    column: int


@dataclass(slots=True)
class StatementNode:
    inputs: SignalList
    callee: SignalRef
    outputs: SignalList


@dataclass(slots=True)
class SchemeNode:
    name: SignalRef
    inputs: SignalList
    outputs: SignalList
    locals: list[SignalRef]
    statements: list[StatementNode]


@dataclass(slots=True)
class ParsedProgram:
    schemes: list[SchemeNode]


@dataclass(slots=True)
class ParsedMainScheme:
    parsed: ParsedProgram
    main_name: str
    inputs: list[str]
    outputs: list[str]


class SchemeParseError(Exception):
    def __init__(self, message: str, line: int, column: int) -> None:
        super().__init__(message)
        self.diagnostic = SchemeDiagnostic(line=line, column=column, message=message)


class TokenStream:
    def __init__(self, tokens: list[Token]) -> None:
        self._tokens = tokens
        self._index = 0

    def peek(self, offset: int = 0) -> Token | None:
        return self._tokens[self._index + offset] if self._index + offset < len(self._tokens) else None

    def next(self) -> Token | None:
        token = self.peek()
        if token is not None:
            self._index += 1
        return token

    def expect(self, kind: str, value: str | None = None) -> Token:
        token = self.next()
        if token is None:
            last_line = self._tokens[-1].line if self._tokens else 1
            last_column = self._tokens[-1].column if self._tokens else 1
            raise SchemeParseError(f'Expected {describe_expected(kind, value)}.', last_line, last_column)
        if token.kind != kind or (value is not None and token.value != value):
            raise SchemeParseError(
                f'Expected {describe_expected(kind, value)}, found "{token.value}".',
                token.line,
                token.column,
            )
        return token


def describe_expected(kind: str, value: str | None = None) -> str:
    if value is not None:
        return f'"{value}"'
    if kind == "word":
        return "an identifier"
    if kind == "lparen":
        return '"("'
    if kind == "rparen":
        return '")"'
    return '":"'


def tokenize(source: str) -> list[Token]:
    tokens: list[Token] = []
    line = 1
    column = 1
    index = 0

    while index < len(source):
        char = source[index]
        if char == "\n":
            index += 1
            line += 1
            column = 1
            continue
        if char.isspace():
            index += 1
            column += 1
            continue
        if char == "(":
            tokens.append(Token(kind="lparen", value=char, line=line, column=column))
            index += 1
            column += 1
            continue
        if char == ")":
            tokens.append(Token(kind="rparen", value=char, line=line, column=column))
            index += 1
            column += 1
            continue
        if char == ":":
            tokens.append(Token(kind="colon", value=char, line=line, column=column))
            index += 1
            column += 1
            continue
        if char.isalnum() or char == "_":
            start = index
            start_column = column
            while index < len(source) and (source[index].isalnum() or source[index] == "_"):
                index += 1
                column += 1
            tokens.append(Token(kind="word", value=source[start:index], line=line, column=start_column))
            continue
        raise SchemeParseError(f'Unexpected character "{char}".', line, column)

    return tokens


def parse_signal_list(stream: TokenStream) -> SignalList:
    opening = stream.expect("lparen")
    items: list[SignalRef] = []
    while stream.peek() is not None and stream.peek() is not None and stream.peek().kind != "rparen":
        token = stream.expect("word")
        items.append(SignalRef(name=token.value, line=token.line, column=token.column))
    stream.expect("rparen")
    return SignalList(items=items, line=opening.line, column=opening.column)


def parse_statement(stream: TokenStream) -> StatementNode:
    inputs = parse_signal_list(stream)
    callee = stream.expect("word")
    outputs = parse_signal_list(stream)
    return StatementNode(
        inputs=inputs,
        callee=SignalRef(name=callee.value, line=callee.line, column=callee.column),
        outputs=outputs,
    )


def parse_scheme(stream: TokenStream) -> SchemeNode:
    scheme_token = stream.expect("word", "scheme")
    inputs = parse_signal_list(stream)
    name_token = stream.expect("word")
    outputs = parse_signal_list(stream)
    stream.expect("colon")

    locals_: list[SignalRef] = []
    if stream.peek() is not None and stream.peek().kind == "word" and stream.peek().value == "local":
        stream.next()
        while stream.peek() is not None and stream.peek().kind == "word" and stream.peek().value != "end":
            token = stream.next()
            assert token is not None
            locals_.append(SignalRef(name=token.value, line=token.line, column=token.column))

    statements: list[StatementNode] = []
    while not (stream.peek() is not None and stream.peek().kind == "word" and stream.peek().value == "end"):
        token = stream.peek()
        if token is None:
            raise SchemeParseError(f'Missing "end" for scheme "{name_token.value}".', scheme_token.line, scheme_token.column)
        if token.kind != "lparen":
            raise SchemeParseError(f'Expected "(" or "end", found "{token.value}".', token.line, token.column)
        statements.append(parse_statement(stream))
    stream.expect("word", "end")

    return SchemeNode(
        name=SignalRef(name=name_token.value, line=name_token.line, column=name_token.column),
        inputs=inputs,
        outputs=outputs,
        locals=locals_,
        statements=statements,
    )


def parse_program(source: str) -> ParsedProgram:
    tokens = tokenize(source)
    stream = TokenStream(tokens)
    schemes: list[SchemeNode] = []
    while stream.peek() is not None:
        token = stream.peek()
        assert token is not None
        if token.kind != "word" or token.value != "scheme":
            raise SchemeParseError(f'Expected "scheme", found "{token.value}".', token.line, token.column)
        schemes.append(parse_scheme(stream))
    return ParsedProgram(schemes=schemes)


def collect_name_diagnostics(items: list[SignalRef], scope_name: str, diagnostics: list[SchemeDiagnostic]) -> None:
    seen: dict[str, SignalRef] = {}
    for item in items:
        if item.name in seen:
            diagnostics.append(SchemeDiagnostic(line=item.line, column=item.column, message=f'Duplicate name "{item.name}" in {scope_name}.'))
            continue
        seen[item.name] = item


def analyze_signal_flow(scheme: SchemeNode, diagnostics: list[SchemeDiagnostic]) -> None:
    outputs_and_locals = [*scheme.outputs.items, *scheme.locals]
    writable: dict[str, SignalRef] = {item.name: item for item in outputs_and_locals}
    locals_by_name: dict[str, SignalRef] = {item.name: item for item in scheme.locals}
    refs_by_name: dict[str, SignalRef] = {item.name: item for item in [*scheme.inputs.items, *scheme.outputs.items, *scheme.locals]}
    produced: dict[str, SignalRef] = {}
    graph: dict[str, set[str]] = {name: set() for name in refs_by_name}
    reported_cycles: set[str] = set()

    for statement in scheme.statements:
        for output in statement.outputs.items:
            if output.name in writable:
                if output.name in produced:
                    diagnostics.append(
                        SchemeDiagnostic(
                            line=output.line,
                            column=output.column,
                            message=f'Signal "{output.name}" can only be written once in scheme "{scheme.name.name}".',
                        )
                    )
                    continue
                produced[output.name] = output

            if output.name not in graph:
                continue
            for input_signal in statement.inputs.items:
                if input_signal.name in graph:
                    graph[input_signal.name].add(output.name)

    for statement in scheme.statements:
        for input_signal in statement.inputs.items:
            if input_signal.name in locals_by_name and input_signal.name not in produced:
                diagnostics.append(
                    SchemeDiagnostic(
                        line=input_signal.line,
                        column=input_signal.column,
                        message=f'Local signal "{input_signal.name}" is used as an input, but no statement writes to it in scheme "{scheme.name.name}".',
                    )
                )

    visit_state: dict[str, str] = {}
    stack: list[str] = []

    def visit(name: str) -> None:
        state = visit_state.get(name)
        if state == "done":
            return
        if state == "visiting":
            cycle_start = stack.index(name) if name in stack else 0
            cycle_path = [*stack[cycle_start:], name]
            cycle_key = " -> ".join(cycle_path)
            if cycle_key not in reported_cycles:
                reported_cycles.add(cycle_key)
                reference = refs_by_name.get(name, scheme.name)
                diagnostics.append(
                    SchemeDiagnostic(
                        line=reference.line,
                        column=reference.column,
                        message=f'Signal graph in scheme "{scheme.name.name}" must be acyclic. Cycle: {cycle_key}.',
                    )
                )
            return
        visit_state[name] = "visiting"
        stack.append(name)
        for next_name in graph.get(name, set()):
            visit(next_name)
        stack.pop()
        visit_state[name] = "done"

    for name in refs_by_name:
        visit(name)


def analyze_program(parsed: ParsedProgram) -> list[SchemeDiagnostic]:
    diagnostics: list[SchemeDiagnostic] = []
    if not parsed.schemes:
        diagnostics.append(SchemeDiagnostic(line=1, column=1, message='File must contain at least one "scheme" definition.'))
        return diagnostics

    by_name: dict[str, SchemeNode] = {}
    for scheme in parsed.schemes:
        if scheme.name.name in BUILTIN_ARITY:
            diagnostics.append(
                SchemeDiagnostic(
                    line=scheme.name.line,
                    column=scheme.name.column,
                    message=f'Scheme name "{scheme.name.name}" is reserved for a built-in scheme.',
                )
            )
        if scheme.name.name in by_name:
            diagnostics.append(
                SchemeDiagnostic(line=scheme.name.line, column=scheme.name.column, message=f'Duplicate scheme name "{scheme.name.name}".')
            )
            continue
        by_name[scheme.name.name] = scheme

    for scheme in parsed.schemes:
        all_names = [*scheme.inputs.items, *scheme.outputs.items, *scheme.locals]
        collect_name_diagnostics(scheme.inputs.items, f'inputs of "{scheme.name.name}"', diagnostics)
        collect_name_diagnostics(scheme.outputs.items, f'outputs of "{scheme.name.name}"', diagnostics)
        collect_name_diagnostics(scheme.locals, f'locals of "{scheme.name.name}"', diagnostics)

        declared: dict[str, SignalRef] = {}
        for item in all_names:
            if item.name in declared:
                diagnostics.append(
                    SchemeDiagnostic(
                        line=item.line,
                        column=item.column,
                        message=f'Signal "{item.name}" is declared more than once in scheme "{scheme.name.name}".',
                    )
                )
                continue
            declared[item.name] = item

        for statement in scheme.statements:
            called_scheme = by_name.get(statement.callee.name)
            builtin_arity = BUILTIN_ARITY.get(statement.callee.name)
            if builtin_arity is None and called_scheme is None:
                diagnostics.append(
                    SchemeDiagnostic(
                        line=statement.callee.line,
                        column=statement.callee.column,
                        message=f'Unknown scheme "{statement.callee.name}".',
                    )
                )
            else:
                expected_inputs = builtin_arity[0] if builtin_arity is not None else len(called_scheme.inputs.items)  # type: ignore[union-attr]
                expected_outputs = builtin_arity[1] if builtin_arity is not None else len(called_scheme.outputs.items)  # type: ignore[union-attr]
                if len(statement.inputs.items) != expected_inputs:
                    diagnostics.append(
                        SchemeDiagnostic(
                            line=statement.callee.line,
                            column=statement.callee.column,
                            message=f'Scheme "{statement.callee.name}" expects {expected_inputs} input(s), got {len(statement.inputs.items)}.',
                        )
                    )
                if len(statement.outputs.items) != expected_outputs:
                    diagnostics.append(
                        SchemeDiagnostic(
                            line=statement.callee.line,
                            column=statement.callee.column,
                            message=f'Scheme "{statement.callee.name}" expects {expected_outputs} output(s), got {len(statement.outputs.items)}.',
                        )
                    )

            for signal in [*statement.inputs.items, *statement.outputs.items]:
                if signal.name not in declared:
                    diagnostics.append(
                        SchemeDiagnostic(
                            line=signal.line,
                            column=signal.column,
                            message=f'Signal "{signal.name}" is not declared in scheme "{scheme.name.name}".',
                        )
                    )

        analyze_signal_flow(scheme, diagnostics)

    visit_state: dict[str, str] = {}
    stack: list[str] = []

    def visit(name: str) -> None:
        state = visit_state.get(name)
        if state == "done":
            return
        if state == "visiting":
            reference = by_name[name].name if name in by_name else SignalRef(name=name, line=1, column=1)
            diagnostics.append(
                SchemeDiagnostic(
                    line=reference.line,
                    column=reference.column,
                    message=f'Recursive scheme usage is not allowed. Cycle: {" -> ".join([*stack, name])}.',
                )
            )
            return
        visit_state[name] = "visiting"
        stack.append(name)
        scheme = by_name.get(name)
        if scheme is not None:
            for statement in scheme.statements:
                if statement.callee.name in by_name:
                    visit(statement.callee.name)
        stack.pop()
        visit_state[name] = "done"

    for scheme in parsed.schemes:
        visit(scheme.name.name)

    return diagnostics


def parse_and_validate_main_scheme(source: str) -> tuple[ParsedMainScheme | None, list[SchemeDiagnostic]]:
    if not source.strip():
        return None, [SchemeDiagnostic(line=1, column=1, message='File is empty. Add at least one scheme definition.')]
    try:
        parsed = parse_program(source)
    except SchemeParseError as error:
        return None, [error.diagnostic]
    diagnostics = analyze_program(parsed)
    if diagnostics:
        return None, diagnostics
    if not parsed.schemes:
        return None, [SchemeDiagnostic(line=1, column=1, message='File must contain at least one "scheme" definition.')]
    main = parsed.schemes[-1]
    return (
        ParsedMainScheme(
            parsed=parsed,
            main_name=main.name.name,
            inputs=[item.name for item in main.inputs.items],
            outputs=[item.name for item in main.outputs.items],
        ),
        [],
    )


def run_built_in(name: str, inputs: list[int]) -> list[int]:
    if name == "zero":
        return [0]
    if name == "one":
        return [1]
    if name == "not":
        return [0 if inputs[0] == 1 else 1]
    if name == "and":
        return [1 if inputs[0] == 1 and inputs[1] == 1 else 0]
    if name == "or":
        return [1 if inputs[0] == 1 or inputs[1] == 1 else 0]
    raise RuntimeError(f"Unknown built-in {name}")


def evaluate_scheme(parsed: ParsedProgram, scheme_name: str, inputs: list[int]) -> list[int]:
    scheme = next((item for item in parsed.schemes if item.name.name == scheme_name), None)
    if scheme is None:
        raise RuntimeError(f"Scheme {scheme_name} was not found.")

    values: dict[str, int] = {}
    for index, signal in enumerate(scheme.inputs.items):
        values[signal.name] = inputs[index] if index < len(inputs) else 0
    for signal in scheme.outputs.items:
        values[signal.name] = 0
    for signal in scheme.locals:
        values[signal.name] = 0

    for statement in scheme.statements:
        statement_inputs = [values.get(signal.name, 0) for signal in statement.inputs.items]
        if statement.callee.name in BUILTIN_ARITY:
            next_values = run_built_in(statement.callee.name, statement_inputs)
        else:
            next_values = evaluate_scheme(parsed, statement.callee.name, statement_inputs)
        for index, signal in enumerate(statement.outputs.items):
            values[signal.name] = next_values[index] if index < len(next_values) else 0

    return [1 if values.get(signal.name, 0) == 1 else 0 for signal in scheme.outputs.items]


def evaluate_main_scheme(main_scheme: ParsedMainScheme, input_state: dict[str, int]) -> list[int]:
    ordered_inputs = [1 if input_state.get(name, 0) == 1 else 0 for name in main_scheme.inputs]
    return evaluate_scheme(main_scheme.parsed, main_scheme.main_name, ordered_inputs)
