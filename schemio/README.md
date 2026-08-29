# Schemio command-line interpreter

This folder contains the small standalone Rust interpreter for the Schemio teaching language.

Edit this file when the command-line interface, supported platforms, or release instructions change. Copy it when another standalone project needs a short command-line guide.

## Build and run

Install Rust with [rustup](https://rustup.rs/), then run:

```bash
cargo build --release
./target/release/schemio program.sch < input.txt
```

The first `scheme` definition in the program file is the main scheme. Each non-empty input line must contain exactly one `0` or `1` for each main-scheme input. Output bits are printed in declaration order, separated by spaces.

For example, a two-input XOR program can read this input:

```text
0 0
1 1
1 0
```

and print:

```text
0
0
1
```

Run `schemio --help` for command usage and `cargo test` to run the interpreter tests.
