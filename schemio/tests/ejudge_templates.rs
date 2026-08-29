//! This file tests the Ejudge templates with the real Schemio binary.
//! Edit it when Ejudge integration or the Schemio command line changes.
//! Copy it when another interpreter needs a tested judge-system wrapper.

use std::fs;
use std::io::Write;
use std::path::PathBuf;
use std::process::{Command, Stdio};

fn temp_directory() -> PathBuf {
    let path = std::env::temp_dir().join(format!("schemio-ejudge-test-{}", std::process::id()));
    let _ = fs::remove_dir_all(&path);
    fs::create_dir_all(&path).expect("create temporary directory");
    path
}

#[test]
fn configures_and_runs_a_shebang_wrapped_submission() {
    let directory = temp_directory();
    let manifest = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    let version_template = manifest.join("ejudge/schemio-version.in");
    let compiler_template = manifest.join("ejudge/schemio.in");
    let config = directory.join("schemio.cfg");
    let source = directory.join("answer.sch");
    let executable = directory.join("answer");

    let configured = Command::new("/bin/sh")
        .arg(&version_template)
        .arg("-r")
        .arg(env!("CARGO_BIN_EXE_schemio"))
        .output()
        .expect("run version template");
    assert!(configured.status.success(), "{:?}", configured);
    let configuration = String::from_utf8(configured.stdout).expect("configuration is text");
    assert!(configuration.contains(&format!("version=\"{}\"", env!("CARGO_PKG_VERSION"))));
    assert!(configuration.contains("src_sfx=\".sch\""));
    assert!(configuration.contains("arch=\"linux-shared\""));
    fs::write(&config, configuration).expect("write language configuration");

    let full_name = Command::new("/bin/sh")
        .arg(&version_template)
        .arg("-f")
        .env("EJUDGE_LANG_CONFIG", &config)
        .output()
        .expect("read configured version");
    assert!(full_name.status.success(), "{:?}", full_name);
    assert_eq!(
        String::from_utf8(full_name.stdout).expect("full name is text"),
        format!("Schemio {}\n", env!("CARGO_PKG_VERSION"))
    );

    fs::write(
        &source,
        "scheme (a b) main (out):\n local either both not_both\n (a b) or (either)\n (a b) and (both)\n (both) not (not_both)\n (either not_both) and (out)\nend\n",
    )
    .expect("write submission");
    let compiled = Command::new("/bin/sh")
        .arg(&compiler_template)
        .arg(&source)
        .arg(&executable)
        .env("EJUDGE_LANG_CONFIG", &config)
        .output()
        .expect("run compiler template");
    assert!(compiled.status.success(), "{:?}", compiled);

    let property_executable = directory.join("answer-with-properties");
    let properties = directory.join("answer.json");
    let compiled_with_properties = Command::new("/bin/sh")
        .arg(&compiler_template)
        .arg(&source)
        .arg(&property_executable)
        .arg(&properties)
        .env("EJUDGE_LANG_CONFIG", &config)
        .env("EJUDGE_EXE_PROPERTIES", "1")
        .output()
        .expect("run compiler template with properties");
    assert!(
        compiled_with_properties.status.success(),
        "{:?}",
        compiled_with_properties
    );
    assert_eq!(
        fs::read_to_string(&property_executable).expect("read copied submission"),
        fs::read_to_string(&source).expect("read original submission")
    );
    assert!(
        fs::read_to_string(&properties)
            .expect("read executable properties")
            .contains(env!("CARGO_BIN_EXE_schemio"))
    );

    let mut child = Command::new(&executable)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .spawn()
        .expect("start wrapped submission");
    child
        .stdin
        .take()
        .expect("submission stdin")
        .write_all(b"0 1\n1 1\n")
        .expect("write test input");
    let output = child
        .wait_with_output()
        .expect("wait for wrapped submission");
    assert!(output.status.success(), "{:?}", output);
    assert_eq!(
        String::from_utf8(output.stdout).expect("submission output"),
        "1\n0\n"
    );

    fs::remove_dir_all(directory).expect("remove temporary directory");
}
