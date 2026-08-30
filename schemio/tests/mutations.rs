//! This file mutates a real Schemio program to check student-facing compiler errors.
//! Edit it when diagnostics or common student mistakes change.
//! Copy this mutation pattern when another documented program needs error-regression coverage.

use std::fs;
use std::path::PathBuf;

use schemio::{compile, format_program_diagnostic};

fn mod2_source() -> String {
    let path = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("..")
        .join("docs")
        .join(".solutions")
        .join("14.SCH");
    fs::read_to_string(path).expect("read documented mod2 program")
}

fn mutated(source: &str, before: &str, after: &str) -> String {
    assert!(source.contains(before), "mutation target must exist");
    source.replacen(before, after, 1)
}

#[test]
fn one_character_mutations_produce_clear_compiler_errors() {
    let source = mod2_source();
    let cases = [
        (
            "misspelled scheme",
            "and (z2)",
            "an (z2)",
            "E103",
            "did you mean \"and\"?",
        ),
        (
            "wrong input count",
            "(x1 x2) or (z1)",
            "(x1) or (z1)",
            "E104",
            "expects 2 input(s), got 1",
        ),
        (
            "unknown signal",
            "(z3 z1) and (out)",
            "(z3 zz) and (out)",
            "E105",
            "is not declared",
        ),
        (
            "missing list close",
            "(x1 x2) or (z1)",
            "(x1 x2 or (z1)",
            "E001",
            "expected an identifier",
        ),
        (
            "signal cycle",
            "(z2) not (z3)",
            "(z3) not (z3)",
            "E108",
            "must be acyclic",
        ),
    ];

    for (name, before, after, code, expected_text) in cases {
        let changed = mutated(&source, before, after);
        let diagnostics = compile(&changed).expect_err(name);
        let diagnostic = diagnostics
            .iter()
            .find(|diagnostic| diagnostic.code == code)
            .unwrap_or_else(|| panic!("{name} should produce {code}"));
        assert!(
            diagnostic.message.contains(expected_text)
                || diagnostic.hint.as_deref() == Some(expected_text),
            "{name}"
        );
        assert!(
            diagnostic.position.line > 0 && diagnostic.position.column > 0,
            "{name}"
        );
        assert!(
            format_program_diagnostic(&changed, diagnostic).contains('^'),
            "{name}"
        );
    }
}
