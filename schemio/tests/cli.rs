//! This file tests the Schemio binary as a student uses it from a shell.
//! Edit it when CLI input, output, diagnostics, or exit codes change.
//! Copy it when you add another command-line integration scenario.

use std::fs;
use std::process::{Command, Stdio};
use std::sync::atomic::{AtomicUsize, Ordering};

static NEXT_FILE: AtomicUsize = AtomicUsize::new(0);

fn write_program(source: &str) -> std::path::PathBuf {
    let sequence = NEXT_FILE.fetch_add(1, Ordering::Relaxed);
    let path = std::env::temp_dir().join(format!(
        "schemio-cli-test-{}-{sequence}.sch",
        std::process::id()
    ));
    fs::write(&path, source).expect("write program");
    path
}

#[test]
fn evaluates_rows_and_keeps_going_after_bad_input() {
    let program = write_program(
        "scheme (a b) main (sum carry):\n local either both not_both\n (a b) or (either)\n (a b) and (both)\n (both) not (not_both)\n (either not_both) and (sum)\n (a b) and (carry)\nend\n",
    );
    let output = Command::new(env!("CARGO_BIN_EXE_schemio"))
        .arg(&program)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .expect("start interpreter");
    let mut child = output;
    use std::io::Write;
    child
        .stdin
        .take()
        .expect("stdin")
        .write_all(b"1 0\n\n1 2\n1 1\n")
        .expect("write stdin");
    let output = child.wait_with_output().expect("wait for interpreter");
    fs::remove_file(program).expect("remove program");

    assert_eq!(
        String::from_utf8(output.stdout).expect("stdout"),
        "1 0\n0 1\n"
    );
    assert_eq!(output.status.code(), Some(1));
    assert!(
        String::from_utf8(output.stderr)
            .expect("stderr")
            .contains("stdin:3: error[E201]")
    );
}
