//! This file parses, validates, evaluates, and formats diagnostics for Schemio.
//! Edit it when Schemio syntax, rules, runtime behavior, or CLI diagnostics change.
//! Copy its small parser structure when you add another deterministic teaching language.

use std::collections::{HashMap, HashSet};

const BUILTINS: [(&str, usize, usize); 5] = [
    ("zero", 0, 1),
    ("one", 0, 1),
    ("not", 1, 1),
    ("and", 2, 1),
    ("or", 2, 1),
];

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub struct Position {
    pub line: usize,
    pub column: usize,
}

#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Diagnostic {
    pub code: &'static str,
    pub message: String,
    pub position: Position,
    pub width: usize,
    pub hint: Option<String>,
}

impl Diagnostic {
    fn new(
        code: &'static str,
        message: impl Into<String>,
        position: Position,
        width: usize,
    ) -> Self {
        Self {
            code,
            message: message.into(),
            position,
            width: width.max(1),
            hint: None,
        }
    }

    fn with_hint(mut self, hint: impl Into<String>) -> Self {
        self.hint = Some(hint.into());
        self
    }
}

#[derive(Clone, Debug)]
struct Token {
    kind: TokenKind,
    value: String,
    position: Position,
}

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
enum TokenKind {
    Word,
    LeftParen,
    RightParen,
    Colon,
}

#[derive(Clone, Debug)]
struct SignalRef {
    name: String,
    position: Position,
}

#[derive(Clone, Debug)]
struct SignalList {
    items: Vec<SignalRef>,
}

#[derive(Clone, Debug)]
struct Statement {
    inputs: SignalList,
    callee: SignalRef,
    outputs: SignalList,
}

#[derive(Clone, Debug)]
struct Scheme {
    name: SignalRef,
    inputs: SignalList,
    outputs: SignalList,
    locals: Vec<SignalRef>,
    statements: Vec<Statement>,
}

#[derive(Clone, Debug)]
struct Program {
    schemes: Vec<Scheme>,
}

/// A checked Schemio program ready to run for many input rows.
#[derive(Clone, Debug)]
pub struct CompiledProgram {
    program: Program,
    main_index: usize,
}

impl CompiledProgram {
    pub fn input_count(&self) -> usize {
        self.program.schemes[self.main_index].inputs.items.len()
    }

    pub fn output_count(&self) -> usize {
        self.program.schemes[self.main_index].outputs.items.len()
    }

    pub fn main_name(&self) -> &str {
        &self.program.schemes[self.main_index].name.name
    }

    pub fn evaluate(&self, inputs: &[u8]) -> Vec<u8> {
        evaluate_scheme(&self.program, self.main_index, inputs)
    }
}

/// Parse and validate a source file. The first declared scheme is the main scheme.
pub fn compile(source: &str) -> Result<CompiledProgram, Vec<Diagnostic>> {
    if source.trim().is_empty() {
        return Err(vec![Diagnostic::new(
            "E100",
            "file is empty; add at least one \"scheme\" definition.",
            Position { line: 1, column: 1 },
            1,
        )]);
    }

    let program = parse_program(source)?;
    let diagnostics = validate_program(&program);
    if !diagnostics.is_empty() {
        return Err(diagnostics);
    }

    let main_index = 0;
    Ok(CompiledProgram {
        program,
        main_index,
    })
}

/// Render one source diagnostic in a compact Rust-like form without a file path.
pub fn format_program_diagnostic(source: &str, diagnostic: &Diagnostic) -> String {
    let source_line = source
        .lines()
        .nth(diagnostic.position.line.saturating_sub(1))
        .unwrap_or("");
    let padding = " ".repeat(diagnostic.position.column.saturating_sub(1));
    let marker = "^".repeat(diagnostic.width);
    let mut rendered = format!(
        "{}:{}: error[{}]: {}\n{} | {}\n  | {}{}",
        diagnostic.position.line,
        diagnostic.position.column,
        diagnostic.code,
        diagnostic.message,
        diagnostic.position.line,
        source_line,
        padding,
        marker,
    );
    if let Some(hint) = &diagnostic.hint {
        rendered.push_str(&format!("\nhelp: {hint}"));
    }
    rendered
}

/// Validate one whitespace-separated input row for a compiled program.
pub fn parse_input_row(
    line: &str,
    line_number: usize,
    input_count: usize,
) -> Result<Vec<u8>, String> {
    let values: Vec<&str> = line.split_whitespace().collect();
    if values.len() != input_count {
        return Err(format!(
            "stdin:{line_number}: error[E200]: expected {input_count} bit(s), got {}.",
            values.len()
        ));
    }

    let mut bits = Vec::with_capacity(values.len());
    for (index, value) in values.into_iter().enumerate() {
        match value {
            "0" => bits.push(0),
            "1" => bits.push(1),
            _ => {
                return Err(format!(
                    "stdin:{line_number}: error[E201]: bit {} must be \"0\" or \"1\", got \"{value}\".",
                    index + 1
                ));
            }
        }
    }
    Ok(bits)
}

fn tokenize(source: &str) -> Result<Vec<Token>, Vec<Diagnostic>> {
    let mut tokens = Vec::new();
    let mut chars = source.chars().peekable();
    let mut line = 1;
    let mut column = 1;
    let mut in_shebang = source.starts_with("#!");

    while let Some(character) = chars.next() {
        let position = Position { line, column };
        if in_shebang {
            if character == '\n' {
                in_shebang = false;
                line += 1;
                column = 1;
            } else {
                column += 1;
            }
            continue;
        }
        if character == '\n' {
            line += 1;
            column = 1;
            continue;
        }
        if character.is_whitespace() {
            column += 1;
            continue;
        }
        let (kind, value) = match character {
            '(' => (TokenKind::LeftParen, "(".to_owned()),
            ')' => (TokenKind::RightParen, ")".to_owned()),
            ':' => (TokenKind::Colon, ":".to_owned()),
            value if value.is_ascii_alphanumeric() || value == '_' => {
                let mut word = String::from(value);
                column += 1;
                while let Some(next) = chars.peek() {
                    if next.is_ascii_alphanumeric() || *next == '_' {
                        word.push(*next);
                        chars.next();
                        column += 1;
                    } else {
                        break;
                    }
                }
                tokens.push(Token {
                    kind: TokenKind::Word,
                    value: word,
                    position,
                });
                continue;
            }
            value => {
                return Err(vec![Diagnostic::new(
                    "E001",
                    format!("unexpected character \"{value}\"."),
                    position,
                    1,
                )]);
            }
        };
        tokens.push(Token {
            kind,
            value,
            position,
        });
        column += 1;
    }
    Ok(tokens)
}

struct TokenStream {
    tokens: Vec<Token>,
    index: usize,
}

impl TokenStream {
    fn peek(&self) -> Option<&Token> {
        self.tokens.get(self.index)
    }

    fn next(&mut self) -> Option<Token> {
        let token = self.tokens.get(self.index).cloned();
        if token.is_some() {
            self.index += 1;
        }
        token
    }

    fn expect(&mut self, kind: TokenKind, value: Option<&str>) -> Result<Token, Diagnostic> {
        let fallback = self
            .tokens
            .last()
            .map(|token| token.position)
            .unwrap_or(Position { line: 1, column: 1 });
        let token = self.next().ok_or_else(|| {
            Diagnostic::new(
                "E001",
                format!("expected {}.", describe_expected(kind, value)),
                fallback,
                1,
            )
        })?;
        if token.kind != kind || value.is_some_and(|expected| token.value != expected) {
            return Err(Diagnostic::new(
                "E001",
                format!(
                    "expected {}, found \"{}\".",
                    describe_expected(kind, value),
                    token.value
                ),
                token.position,
                token.value.chars().count(),
            ));
        }
        Ok(token)
    }
}

fn describe_expected(kind: TokenKind, value: Option<&str>) -> String {
    if let Some(value) = value {
        return format!("\"{value}\"");
    }
    match kind {
        TokenKind::Word => "an identifier".to_owned(),
        TokenKind::LeftParen => "\"(\"".to_owned(),
        TokenKind::RightParen => "\")\"".to_owned(),
        TokenKind::Colon => "\":\"".to_owned(),
    }
}

fn parse_program(source: &str) -> Result<Program, Vec<Diagnostic>> {
    let tokens = tokenize(source)?;
    let mut stream = TokenStream { tokens, index: 0 };
    let mut schemes = Vec::new();
    while let Some(token) = stream.peek() {
        if token.kind != TokenKind::Word || token.value != "scheme" {
            return Err(vec![Diagnostic::new(
                "E001",
                format!("expected \"scheme\", found \"{}\".", token.value),
                token.position,
                token.value.chars().count(),
            )]);
        }
        match parse_scheme(&mut stream) {
            Ok(scheme) => schemes.push(scheme),
            Err(diagnostic) => return Err(vec![diagnostic]),
        }
    }
    Ok(Program { schemes })
}

fn parse_scheme(stream: &mut TokenStream) -> Result<Scheme, Diagnostic> {
    stream.expect(TokenKind::Word, Some("scheme"))?;
    let inputs = parse_signal_list(stream)?;
    let name = ref_from_token(stream.expect(TokenKind::Word, None)?);
    let outputs = parse_signal_list(stream)?;
    stream.expect(TokenKind::Colon, None)?;

    let mut locals = Vec::new();
    if stream
        .peek()
        .is_some_and(|token| token.kind == TokenKind::Word && token.value == "local")
    {
        stream.next();
        while stream
            .peek()
            .is_some_and(|token| token.kind == TokenKind::Word && token.value != "end")
        {
            locals.push(ref_from_token(
                stream.next().expect("peeked token must exist"),
            ));
        }
    }

    let mut statements = Vec::new();
    while !stream
        .peek()
        .is_some_and(|token| token.kind == TokenKind::Word && token.value == "end")
    {
        let Some(token) = stream.peek() else {
            return Err(Diagnostic::new(
                "E001",
                format!("missing \"end\" for scheme \"{}\".", name.name),
                name.position,
                name.name.chars().count(),
            ));
        };
        if token.kind != TokenKind::LeftParen {
            return Err(Diagnostic::new(
                "E001",
                format!("expected \"(\" or \"end\", found \"{}\".", token.value),
                token.position,
                token.value.chars().count(),
            ));
        }
        statements.push(parse_statement(stream)?);
    }
    stream.expect(TokenKind::Word, Some("end"))?;
    Ok(Scheme {
        name,
        inputs,
        outputs,
        locals,
        statements,
    })
}

fn parse_signal_list(stream: &mut TokenStream) -> Result<SignalList, Diagnostic> {
    stream.expect(TokenKind::LeftParen, None)?;
    let mut items = Vec::new();
    while !stream
        .peek()
        .is_some_and(|token| token.kind == TokenKind::RightParen)
    {
        items.push(ref_from_token(stream.expect(TokenKind::Word, None)?));
    }
    stream.expect(TokenKind::RightParen, None)?;
    Ok(SignalList { items })
}

fn parse_statement(stream: &mut TokenStream) -> Result<Statement, Diagnostic> {
    let inputs = parse_signal_list(stream)?;
    let callee = ref_from_token(stream.expect(TokenKind::Word, None)?);
    let outputs = parse_signal_list(stream)?;
    Ok(Statement {
        inputs,
        callee,
        outputs,
    })
}

fn ref_from_token(token: Token) -> SignalRef {
    SignalRef {
        name: token.value,
        position: token.position,
    }
}

fn builtin_arity(name: &str) -> Option<(usize, usize)> {
    BUILTINS
        .iter()
        .find(|builtin| builtin.0 == name)
        .map(|builtin| (builtin.1, builtin.2))
}

fn validate_program(program: &Program) -> Vec<Diagnostic> {
    if program.schemes.is_empty() {
        return vec![Diagnostic::new(
            "E100",
            "file must contain at least one \"scheme\" definition.",
            Position { line: 1, column: 1 },
            1,
        )];
    }

    let mut diagnostics = Vec::new();
    let mut scheme_indexes = HashMap::new();
    for (index, scheme) in program.schemes.iter().enumerate() {
        if builtin_arity(&scheme.name.name).is_some() {
            diagnostics.push(Diagnostic::new(
                "E101",
                format!(
                    "scheme name \"{}\" is reserved for a built-in scheme.",
                    scheme.name.name
                ),
                scheme.name.position,
                scheme.name.name.chars().count(),
            ));
        }
        if scheme_indexes
            .insert(scheme.name.name.as_str(), index)
            .is_some()
        {
            diagnostics.push(Diagnostic::new(
                "E102",
                format!("duplicate scheme name \"{}\".", scheme.name.name),
                scheme.name.position,
                scheme.name.name.chars().count(),
            ));
        }
    }

    for scheme in &program.schemes {
        validate_scheme(scheme, program, &scheme_indexes, &mut diagnostics);
    }
    validate_scheme_recursion(program, &scheme_indexes, &mut diagnostics);
    diagnostics
}

fn validate_scheme(
    scheme: &Scheme,
    program: &Program,
    scheme_indexes: &HashMap<&str, usize>,
    diagnostics: &mut Vec<Diagnostic>,
) {
    collect_duplicate_names(
        &scheme.inputs.items,
        &format!("inputs of \"{}\"", scheme.name.name),
        diagnostics,
    );
    collect_duplicate_names(
        &scheme.outputs.items,
        &format!("outputs of \"{}\"", scheme.name.name),
        diagnostics,
    );
    collect_duplicate_names(
        &scheme.locals,
        &format!("locals of \"{}\"", scheme.name.name),
        diagnostics,
    );

    let all_names: Vec<&SignalRef> = scheme
        .inputs
        .items
        .iter()
        .chain(&scheme.outputs.items)
        .chain(&scheme.locals)
        .collect();
    let mut declared = HashSet::new();
    for signal in &all_names {
        if !declared.insert(signal.name.as_str()) {
            diagnostics.push(Diagnostic::new(
                "E102",
                format!(
                    "signal \"{}\" is declared more than once in scheme \"{}\".",
                    signal.name, scheme.name.name
                ),
                signal.position,
                signal.name.chars().count(),
            ));
        }
    }

    for statement in &scheme.statements {
        let builtin = builtin_arity(&statement.callee.name);
        let user_index = scheme_indexes.get(statement.callee.name.as_str()).copied();
        if builtin.is_none() && user_index.is_none() {
            let mut diagnostic = Diagnostic::new(
                "E103",
                format!("unknown scheme \"{}\".", statement.callee.name),
                statement.callee.position,
                statement.callee.name.chars().count(),
            );
            if let Some(suggestion) = closest_scheme_name(&statement.callee.name, scheme_indexes) {
                diagnostic = diagnostic.with_hint(format!("did you mean \"{suggestion}\"?"));
            }
            diagnostics.push(diagnostic);
        } else {
            let (expected_inputs, expected_outputs) = match builtin {
                Some(arity) => arity,
                None => {
                    let called =
                        &program.schemes[user_index.expect("user scheme must have an index")];
                    (called.inputs.items.len(), called.outputs.items.len())
                }
            };
            check_arity(statement, expected_inputs, expected_outputs, diagnostics);
        }

        for signal in statement
            .inputs
            .items
            .iter()
            .chain(&statement.outputs.items)
        {
            if !declared.contains(signal.name.as_str()) {
                diagnostics.push(Diagnostic::new(
                    "E105",
                    format!(
                        "signal \"{}\" is not declared in scheme \"{}\".",
                        signal.name, scheme.name.name
                    ),
                    signal.position,
                    signal.name.chars().count(),
                ));
            }
        }
    }
    validate_signal_flow(scheme, diagnostics);
}

fn check_arity(
    statement: &Statement,
    expected_inputs: usize,
    expected_outputs: usize,
    diagnostics: &mut Vec<Diagnostic>,
) {
    if statement.inputs.items.len() != expected_inputs {
        diagnostics.push(Diagnostic::new(
            "E104",
            format!(
                "scheme \"{}\" expects {expected_inputs} input(s), got {}.",
                statement.callee.name,
                statement.inputs.items.len()
            ),
            statement.callee.position,
            statement.callee.name.chars().count(),
        ));
    }
    if statement.outputs.items.len() != expected_outputs {
        diagnostics.push(Diagnostic::new(
            "E104",
            format!(
                "scheme \"{}\" expects {expected_outputs} output(s), got {}.",
                statement.callee.name,
                statement.outputs.items.len()
            ),
            statement.callee.position,
            statement.callee.name.chars().count(),
        ));
    }
}

fn collect_duplicate_names(items: &[SignalRef], scope: &str, diagnostics: &mut Vec<Diagnostic>) {
    let mut seen = HashSet::new();
    for item in items {
        if !seen.insert(item.name.as_str()) {
            diagnostics.push(Diagnostic::new(
                "E102",
                format!("duplicate name \"{}\" in {scope}.", item.name),
                item.position,
                item.name.chars().count(),
            ));
        }
    }
}

fn validate_signal_flow(scheme: &Scheme, diagnostics: &mut Vec<Diagnostic>) {
    let writable: HashSet<&str> = scheme
        .outputs
        .items
        .iter()
        .chain(&scheme.locals)
        .map(|signal| signal.name.as_str())
        .collect();
    let locals: HashSet<&str> = scheme
        .locals
        .iter()
        .map(|signal| signal.name.as_str())
        .collect();
    let all_signals: Vec<&SignalRef> = scheme
        .inputs
        .items
        .iter()
        .chain(&scheme.outputs.items)
        .chain(&scheme.locals)
        .collect();
    let declared: HashSet<&str> = all_signals
        .iter()
        .map(|signal| signal.name.as_str())
        .collect();
    let mut refs = HashMap::new();
    let mut signal_order = Vec::new();
    for signal in &all_signals {
        if refs.insert(signal.name.as_str(), *signal).is_none() {
            signal_order.push(signal.name.as_str());
        }
    }
    let mut graph: HashMap<&str, Vec<&str>> = signal_order
        .iter()
        .map(|name| (*name, Vec::new()))
        .collect();
    let mut produced = HashSet::new();

    for statement in &scheme.statements {
        for output in &statement.outputs.items {
            if writable.contains(output.name.as_str()) && !produced.insert(output.name.as_str()) {
                diagnostics.push(Diagnostic::new(
                    "E106",
                    format!(
                        "signal \"{}\" can only be written once in scheme \"{}\".",
                        output.name, scheme.name.name
                    ),
                    output.position,
                    output.name.chars().count(),
                ));
                continue;
            }
            if declared.contains(output.name.as_str()) {
                let neighbours = graph
                    .get_mut(output.name.as_str())
                    .expect("declared signal must have graph entry");
                for input in &statement.inputs.items {
                    if declared.contains(input.name.as_str()) {
                        neighbours.push(input.name.as_str());
                    }
                }
            }
        }
    }

    for statement in &scheme.statements {
        for input in &statement.inputs.items {
            if locals.contains(input.name.as_str()) && !produced.contains(input.name.as_str()) {
                diagnostics.push(Diagnostic::new(
                    "E107",
                    format!(
                        "local signal \"{}\" is used as an input, but no statement writes to it in scheme \"{}\".",
                        input.name, scheme.name.name
                    ),
                    input.position,
                    input.name.chars().count(),
                ));
            }
        }
    }

    let mut states: HashMap<&str, VisitState> = HashMap::new();
    let mut stack = Vec::new();
    let mut reported = HashSet::new();
    for signal in signal_order {
        visit_signal(
            signal,
            &graph,
            &refs,
            &scheme.name,
            &mut states,
            &mut stack,
            &mut reported,
            diagnostics,
        );
    }
}

#[derive(Clone, Copy, Eq, PartialEq)]
enum VisitState {
    Visiting,
    Done,
}

#[allow(clippy::too_many_arguments)]
fn visit_signal<'a>(
    name: &'a str,
    graph: &HashMap<&'a str, Vec<&'a str>>,
    refs: &HashMap<&'a str, &'a SignalRef>,
    scheme_name: &SignalRef,
    states: &mut HashMap<&'a str, VisitState>,
    stack: &mut Vec<&'a str>,
    reported: &mut HashSet<String>,
    diagnostics: &mut Vec<Diagnostic>,
) {
    match states.get(name) {
        Some(VisitState::Done) => return,
        Some(VisitState::Visiting) => {
            let start = stack.iter().position(|item| *item == name).unwrap_or(0);
            let mut cycle: Vec<&str> = stack[start..].to_vec();
            cycle.push(name);
            let text = cycle.join(" -> ");
            if reported.insert(text.clone()) {
                let reference = refs.get(name).copied().unwrap_or(scheme_name);
                diagnostics.push(Diagnostic::new(
                    "E108",
                    format!(
                        "signal graph in scheme \"{}\" must be acyclic. Cycle: {text}.",
                        scheme_name.name
                    ),
                    reference.position,
                    reference.name.chars().count(),
                ));
            }
            return;
        }
        None => {}
    }
    states.insert(name, VisitState::Visiting);
    stack.push(name);
    for next in graph.get(name).into_iter().flatten() {
        visit_signal(
            next,
            graph,
            refs,
            scheme_name,
            states,
            stack,
            reported,
            diagnostics,
        );
    }
    stack.pop();
    states.insert(name, VisitState::Done);
}

fn validate_scheme_recursion(
    program: &Program,
    scheme_indexes: &HashMap<&str, usize>,
    diagnostics: &mut Vec<Diagnostic>,
) {
    let mut states = vec![None; program.schemes.len()];
    let mut stack = Vec::new();
    for index in 0..program.schemes.len() {
        visit_scheme(
            index,
            program,
            scheme_indexes,
            &mut states,
            &mut stack,
            diagnostics,
        );
    }
}

fn visit_scheme(
    index: usize,
    program: &Program,
    scheme_indexes: &HashMap<&str, usize>,
    states: &mut [Option<VisitState>],
    stack: &mut Vec<usize>,
    diagnostics: &mut Vec<Diagnostic>,
) {
    match states[index] {
        Some(VisitState::Done) => return,
        Some(VisitState::Visiting) => {
            let start = stack.iter().position(|item| *item == index).unwrap_or(0);
            let mut cycle: Vec<String> = stack[start..]
                .iter()
                .map(|item| program.schemes[*item].name.name.clone())
                .collect();
            cycle.push(program.schemes[index].name.name.clone());
            let name = &program.schemes[index].name;
            diagnostics.push(Diagnostic::new(
                "E109",
                format!(
                    "recursive scheme usage is not allowed. Cycle: {}.",
                    cycle.join(" -> ")
                ),
                name.position,
                name.name.chars().count(),
            ));
            return;
        }
        None => {}
    }
    states[index] = Some(VisitState::Visiting);
    stack.push(index);
    for statement in &program.schemes[index].statements {
        if let Some(next) = scheme_indexes.get(statement.callee.name.as_str()) {
            visit_scheme(*next, program, scheme_indexes, states, stack, diagnostics);
        }
    }
    stack.pop();
    states[index] = Some(VisitState::Done);
}

fn closest_scheme_name<'a>(
    name: &str,
    scheme_indexes: &'a HashMap<&str, usize>,
) -> Option<&'a str> {
    let mut candidates: Vec<&str> = BUILTINS.iter().map(|builtin| builtin.0).collect();
    candidates.extend(scheme_indexes.keys().copied());
    candidates.sort_unstable();
    candidates.dedup();
    let candidate = candidates
        .into_iter()
        .min_by_key(|candidate| levenshtein(name, candidate))?;
    let distance = levenshtein(name, candidate);
    (distance <= 2 || distance * 2 <= name.chars().count().max(candidate.chars().count()))
        .then_some(candidate)
}

fn levenshtein(left: &str, right: &str) -> usize {
    let right: Vec<char> = right.chars().collect();
    let mut row: Vec<usize> = (0..=right.len()).collect();
    for (left_index, left_char) in left.chars().enumerate() {
        let mut next = vec![left_index + 1];
        for (right_index, right_char) in right.iter().enumerate() {
            let replace = row[right_index] + usize::from(left_char != *right_char);
            let insert = next[right_index] + 1;
            let delete = row[right_index + 1] + 1;
            next.push(replace.min(insert).min(delete));
        }
        row = next;
    }
    row[right.len()]
}

fn evaluate_scheme(program: &Program, scheme_index: usize, inputs: &[u8]) -> Vec<u8> {
    let scheme = &program.schemes[scheme_index];
    let mut values: HashMap<&str, u8> = HashMap::new();
    for (index, signal) in scheme.inputs.items.iter().enumerate() {
        values.insert(
            signal.name.as_str(),
            inputs.get(index).copied().unwrap_or(0),
        );
    }
    for signal in scheme.outputs.items.iter().chain(&scheme.locals) {
        values.insert(signal.name.as_str(), 0);
    }
    let scheme_indexes: HashMap<&str, usize> = program
        .schemes
        .iter()
        .enumerate()
        .map(|(index, item)| (item.name.name.as_str(), index))
        .collect();

    for statement in &scheme.statements {
        let statement_inputs: Vec<u8> = statement
            .inputs
            .items
            .iter()
            .map(|signal| values.get(signal.name.as_str()).copied().unwrap_or(0))
            .collect();
        let next_values = if builtin_arity(&statement.callee.name).is_some() {
            run_builtin(&statement.callee.name, &statement_inputs)
        } else {
            evaluate_scheme(
                program,
                scheme_indexes[statement.callee.name.as_str()],
                &statement_inputs,
            )
        };
        for (index, signal) in statement.outputs.items.iter().enumerate() {
            values.insert(signal.name.as_str(), next_values[index]);
        }
    }
    scheme
        .outputs
        .items
        .iter()
        .map(|signal| u8::from(values.get(signal.name.as_str()).copied().unwrap_or(0) == 1))
        .collect()
}

fn run_builtin(name: &str, inputs: &[u8]) -> Vec<u8> {
    match name {
        "zero" => vec![0],
        "one" => vec![1],
        "not" => vec![u8::from(inputs[0] != 1)],
        "and" => vec![u8::from(inputs[0] == 1 && inputs[1] == 1)],
        "or" => vec![u8::from(inputs[0] == 1 || inputs[1] == 1)],
        _ => unreachable!("the validator only allows known built-ins"),
    }
}

#[cfg(test)]
mod tests {
    //! These tests cover Schemio parsing, validation, and evaluation rules.
    //! Edit them when the language behavior changes.
    //! Copy these focused cases when you add another language rule.

    use super::{compile, format_program_diagnostic, parse_input_row};

    #[test]
    fn evaluates_builtins_and_multiple_outputs() {
        let source = "scheme (a b) main (left right):\n (a b) and (left)\n (a b) or (right)\nend\n";
        let compiled = compile(source).expect("program must compile");
        assert_eq!(compiled.evaluate(&[1, 0]), vec![0, 1]);
        assert_eq!(compiled.output_count(), 2);

        let constants =
            compile("scheme () main (left right):\n () zero (left)\n () one (right)\nend\n")
                .expect("constants compile");
        assert_eq!(constants.evaluate(&[]), vec![0, 1]);
        let inverted =
            compile("scheme (a) main (out):\n (a) not (out)\nend\n").expect("not compiles");
        assert_eq!(inverted.evaluate(&[0]), vec![1]);
    }

    #[test]
    fn uses_the_first_scheme_as_main() {
        let source = "scheme (x y) main (answer):\n (x y) xor2 (answer)\nend\nscheme (a b) xor2 (out):\n local both any not_both\n (a b) and (both)\n (a b) or (any)\n (both) not (not_both)\n (any not_both) and (out)\nend\n";
        let compiled = compile(source).expect("program must compile");
        assert_eq!(compiled.main_name(), "main");
        assert_eq!(compiled.evaluate(&[1, 0]), vec![1]);
    }

    #[test]
    fn accepts_a_unix_shebang_before_a_program() {
        let source = "#!/opt/ejudge/schemio\nscheme (a) main (out):\n (a) not (out)\nend\n";
        let compiled = compile(source).expect("a shebang-wrapped program must compile");
        assert_eq!(compiled.evaluate(&[0]), vec![1]);
    }

    #[test]
    fn reports_validation_rules() {
        let reserved_name = compile("scheme (a) and (out):\n (a) not (out)\nend\n").unwrap_err();
        assert!(reserved_name.iter().any(|item| item.code == "E101"));

        let duplicate_scheme = compile(
            "scheme (a) same (out):\n (a) not (out)\nend\nscheme (a) same (out):\n (a) not (out)\nend\n",
        )
        .unwrap_err();
        assert!(duplicate_scheme.iter().any(|item| item.code == "E102"));

        let duplicate_declaration =
            compile("scheme (a a) main (out):\n (a) not (out)\nend\n").unwrap_err();
        assert!(duplicate_declaration.iter().any(|item| item.code == "E102"));

        let arity = compile("scheme (a) main (out):\n (a) and (out)\nend\n").unwrap_err();
        assert!(arity.iter().any(|item| item.code == "E104"));

        let undeclared =
            compile("scheme (a) main (out):\n (missing) not (out)\nend\n").unwrap_err();
        assert!(undeclared.iter().any(|item| item.code == "E105"));

        let duplicate_write = compile(
            "scheme (a b) main (out):\n local temp\n (a b) and (temp)\n (a b) or (temp)\nend\n",
        )
        .unwrap_err();
        assert!(duplicate_write.iter().any(|item| item.code == "E106"));

        let missing_local =
            compile("scheme (a) main (out):\n local temp\n (temp) not (out)\nend\n").unwrap_err();
        assert!(missing_local.iter().any(|item| item.code == "E107"));

        let cycle = compile("scheme (a) main (out):\n local left right\n (a right) and (left)\n (left) not (right)\n (left) not (out)\nend\n").unwrap_err();
        assert!(cycle.iter().any(|item| item.code == "E108"));

        let recursion = compile("scheme (a) left (out):\n (a) right (out)\nend\nscheme (a) right (out):\n (a) left (out)\nend\n").unwrap_err();
        assert!(recursion.iter().any(|item| item.code == "E109"));
    }

    #[test]
    fn suggests_a_nearby_scheme_name_and_formats_context() {
        let source = "scheme (a b) main (out):\n (a b) an (out)\nend\n";
        let diagnostics = compile(source).unwrap_err();
        let diagnostic = diagnostics
            .iter()
            .find(|item| item.code == "E103")
            .expect("unknown scheme error");
        assert_eq!(diagnostic.hint.as_deref(), Some("did you mean \"and\"?"));
        let rendered = format_program_diagnostic(source, diagnostic);
        assert!(rendered.contains("2:8: error[E103]"));
        assert!(rendered.contains("help: did you mean \"and\"?"));
    }

    #[test]
    fn validates_input_rows() {
        assert_eq!(
            parse_input_row(" 1  0 ", 4, 2).expect("valid row"),
            vec![1, 0]
        );
        assert!(parse_input_row("1 2", 4, 2).unwrap_err().contains("bit 2"));
        assert!(
            parse_input_row("1", 4, 2)
                .unwrap_err()
                .contains("expected 2 bit(s), got 1")
        );
    }
}
