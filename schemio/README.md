# Schemio command-line interpreter

This folder contains the small standalone Rust interpreter for the Schemio teaching language.

Edit this file when the command-line interface, supported platforms, or release instructions change. Copy it when another standalone project needs a short command-line guide.

## Build and run

Install Rust with [rustup](https://rustup.rs/), then run:

```bash
cargo build --release
./target/release/schemio program.sch < input.txt
```

The first `scheme` definition in the program file is the main scheme. Each non-empty input line must contain exactly one `0` or `1` for each main-scheme input. Output bits are printed in declaration order, separated by spaces. A `#` starts a comment that continues to the end of its line; this includes `#!` shebang lines.

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

## Use Schemio in Ejudge

Ejudge runs Schemio as an interpreted `linux-shared` language. This repository
contains the two Ejudge templates needed for it:

- `ejudge/schemio-version.in` finds Schemio and writes its Ejudge configuration.
- `ejudge/schemio.in` turns each `.sch` submission into an executable file.

The commands below use the usual Ejudge paths. First check
`/opt/ejudge/bin/ejudge-configure-compilers --help`: if its default helper
script directory is not `/home/ejudge/compile/scripts`, replace
`/home/ejudge/compile` in the commands below with that directory's parent.

1. On the **Linux x64 judging server**, download the
   `schemio-…-x86_64-unknown-linux-gnu.tar.gz` archive from the
   [Schemio releases page](https://github.com/leaders-tech/scheme/releases),
   unpack it, and install its `schemio` file:

   ```bash
   sudo install -d /opt/ejudge
   sudo install -m 755 schemio-schemio-v0.1.1-x86_64-unknown-linux-gnu/schemio /opt/ejudge/schemio
   /opt/ejudge/schemio --version
   ```

   Use the directory name from the release that you downloaded; the example
   above is for version 0.1.1.

2. Copy the templates into Ejudge's local template directory. They must be
   readable by the `ejudge` user:

   ```bash
   EJUDGE_COMPILE_HOME=/home/ejudge/compile
   sudo install -d -o ejudge -g ejudge "$EJUDGE_COMPILE_HOME/scripts/in"
   sudo install -o ejudge -g ejudge -m 644 ejudge/schemio.in "$EJUDGE_COMPILE_HOME/scripts/in/schemio.in"
   sudo install -o ejudge -g ejudge -m 644 ejudge/schemio-version.in "$EJUDGE_COMPILE_HOME/scripts/in/schemio-version.in"
   ```

3. Configure the language as the `ejudge` user. Do not edit `compile.cfg`
   yourself: this command generates it, the final helper scripts, and
   `schemio.cfg`.

   ```bash
   sudo -u ejudge /opt/ejudge/bin/ejudge-configure-compilers --batch --with-schemio=/opt/ejudge/schemio
   ```

   Ejudge 3.14.0 build `8232887e4` has a bug that leaves an unregistered
   custom language out of `compile.cfg`. Before the command above, open
   `/home/ejudge/compile/scripts/lang_ids.cfg` (create it if necessary) and
   add this line, without spaces around `=`. Keep any existing lines in that
   file:

   ```text
   schemio=90
   ```

4. Check the generated configuration and restart Ejudge using the normal
   command for this server:

   ```bash
   /home/ejudge/compile/scripts/schemio-version -f
   grep -A 8 'short_name = "schemio"' /home/ejudge/compile/conf/compile.cfg
   ```

   Then add **schemio** to the contest in `serve-control` and make one test
   submission before opening it to students. The generated executable starts
   with a `#! /opt/ejudge/schemio` shebang, which Schemio accepts as a comment;
   therefore the binary must remain at that path
   and must be executable by the Ejudge run user. Schemio has no compiler
   flags, so leave the contest's compiler-flags field empty for this language.

## Embed a playground on a course page

Build the standalone web component from the `frontend` directory:

```bash
npm run build:playground
```

This creates `frontend/embed-dist/`. Copy the **whole directory** to the
static assets of the course site. The main `schemio-playground.js` file loads
its CodeMirror editor lazily from the `chunks/` directory when a playground is
near the viewport.

On a page, load the module once and add one component for each example:

```html
<script type="module" src="/s/schemio/schemio-playground.js"></script>

<schemio-playground storage-key="cs0040-prob-a-xor">
  <script type="text/plain">
scheme (a b) xor (out):
 local either both not_both
 (a b) or (either)
 (a b) and (both)
 (both) not (not_both)
 (either not_both) and (out)
end
  </script>
</schemio-playground>
```

`storage-key` is strongly recommended. It makes the code persist in the
browser's `localStorage`, independently for each exercise. Without it, the
component uses the page path plus its `id` (or its position on the page), which
can change when the page is edited. Add `storage="off"` to disable saving or
`readonly` to show code without allowing changes. The component emits a
`schemio-change` event with `{ source, isValid }` in `event.detail` after each
edit.
