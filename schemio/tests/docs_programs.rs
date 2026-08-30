//! This file checks real Schemio programs stored in the repository documentation.
//! Edit it when a documented program is repaired, added, or intentionally removed.
//! Copy this corpus pattern when another language fixture collection needs regression tests.

use std::fs;
use std::path::PathBuf;

use schemio::compile;

const VALID_PROGRAMS: [(&str, &str); 21] = [
    ("04_3_9.SCH", "_program"),
    ("11.SCH", "or3"),
    ("12.SCH", "or4"),
    ("13.SCH", "bol"),
    ("14.SCH", "mod2"),
    ("15.SCH", "diff"),
    ("16.SCH", "compare"),
    ("16_ALT.SCH", "cmp1"),
    ("17.SCH", "sort2"),
    ("18.SCH", "table"),
    ("31.SCH", "add2"),
    ("32.SCH", "add4"),
    ("33.SCH", "cmp4"),
    ("34.SCH", "mult"),
    ("35.SCH", "multiple3"),
    ("36.SCH", "del2pow"),
    ("37.SCH", "div"),
    ("39.SCH", "sort8"),
    ("AVVA.SCH", "avvanesmog"),
    ("IF.SCH", "if"),
    ("LIB.SCH", "gr"),
];

fn docs_path(file_name: &str) -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("..")
        .join("docs")
        .join(".solutions")
        .join(file_name)
}

#[test]
fn real_documented_programs_compile_with_their_first_scheme_as_main() {
    for (file_name, expected_main) in VALID_PROGRAMS {
        let source = fs::read_to_string(docs_path(file_name)).expect("read documented program");
        let compiled = compile(&source).unwrap_or_else(|diagnostics| {
            panic!(
                "{file_name} should compile: {}",
                diagnostics
                    .iter()
                    .map(|diagnostic| diagnostic.message.as_str())
                    .collect::<Vec<_>>()
                    .join(" | ")
            )
        });
        assert_eq!(compiled.main_name(), expected_main, "{file_name}");

        for state in 0..(1 << compiled.input_count().min(4)) {
            let inputs = (0..compiled.input_count())
                .map(|index| ((state >> index) & 1) as u8)
                .collect::<Vec<_>>();
            let outputs = compiled.evaluate(&inputs);
            assert_eq!(outputs.len(), compiled.output_count(), "{file_name}");
            assert!(
                outputs.iter().all(|bit| *bit == 0 || *bit == 1),
                "{file_name}"
            );
        }
    }
}

#[test]
fn documented_broken_programs_keep_specific_diagnostics() {
    let missing_helper =
        fs::read_to_string(docs_path("04034.SCH")).expect("read documented program");
    let diagnostics = compile(&missing_helper).expect_err("missing helper must be reported");
    assert!(diagnostics.iter().any(|diagnostic| {
        diagnostic.code == "E103" && diagnostic.message.contains("umnozhenie1")
    }));

    let duplicate_write =
        fs::read_to_string(docs_path("_g_34.SCH")).expect("read documented program");
    let diagnostics = compile(&duplicate_write).expect_err("duplicate write must be reported");
    assert!(
        diagnostics
            .iter()
            .any(|diagnostic| { diagnostic.code == "E106" && diagnostic.message.contains("h5") })
    );
}
