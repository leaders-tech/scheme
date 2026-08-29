//! This file provides the small command-line interface for the Schemio interpreter.
//! Edit it when command arguments, stdin behavior, or process exit codes change.
//! Copy it when you add another tiny file-and-stdin command-line teaching tool.

use std::env;
use std::fs;
use std::io::{self, BufRead};
use std::process;

use schemio::{compile, format_program_diagnostic, parse_input_row};

const VERSION: &str = env!("CARGO_PKG_VERSION");

fn main() {
    process::exit(run());
}

fn run() -> i32 {
    let arguments: Vec<String> = env::args().skip(1).collect();
    match arguments.as_slice() {
        [flag] if flag == "--help" || flag == "-h" => {
            print_help();
            0
        }
        [flag] if flag == "--version" || flag == "-V" => {
            println!("schemio {VERSION}");
            0
        }
        [program_path] => run_program(program_path),
        [] => {
            eprintln!(
                "error[E002]: missing Schemio program file.\n\nRun `schemio --help` for usage."
            );
            2
        }
        _ => {
            eprintln!(
                "error[E002]: expected exactly one Schemio program file.\n\nRun `schemio --help` for usage."
            );
            2
        }
    }
}

fn print_help() {
    println!(
        "Schemio {VERSION}\n\nUsage:\n  schemio <program.sch> < input.txt\n\nThe first scheme in the file is the main scheme. Each non-empty input row must\ncontain one 0 or 1 for every main-scheme input. Output bits are separated by spaces."
    );
}

fn run_program(program_path: &str) -> i32 {
    let source = match fs::read_to_string(program_path) {
        Ok(source) => source,
        Err(error) => {
            eprintln!("error[E000]: could not read program \"{program_path}\": {error}");
            return 1;
        }
    };
    let compiled = match compile(&source) {
        Ok(compiled) => compiled,
        Err(diagnostics) => {
            for diagnostic in diagnostics {
                eprintln!("{}", format_program_diagnostic(&source, &diagnostic));
            }
            return 1;
        }
    };

    let mut had_input_error = false;
    for (index, line) in io::stdin().lock().lines().enumerate() {
        let line_number = index + 1;
        let line = match line {
            Ok(line) => line,
            Err(error) => {
                eprintln!("stdin:{line_number}: error[E202]: could not read input: {error}");
                had_input_error = true;
                continue;
            }
        };
        if line.trim().is_empty() {
            continue;
        }
        let inputs = match parse_input_row(&line, line_number, compiled.input_count()) {
            Ok(inputs) => inputs,
            Err(diagnostic) => {
                eprintln!("{diagnostic}");
                had_input_error = true;
                continue;
            }
        };
        let output = compiled
            .evaluate(&inputs)
            .into_iter()
            .map(|bit| bit.to_string())
            .collect::<Vec<_>>()
            .join(" ");
        println!("{output}");
    }
    i32::from(had_input_error)
}
