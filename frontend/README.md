# Schemio playground web component

This package registers a lazy-loaded `<schemio-playground>` custom element. It
contains a Schemio editor, helpful diagnostics, a live input/output debugger,
and optional browser-local saving.

Edit this file when the package API, installation command, or release process
changes. Copy it when another standalone web component needs a short package
guide.

## Install

After the package is published to npm, add it to a TypeScript or JavaScript
project with:

```bash
pnpm add @leaders-tech/schemio-playground
```

To use the latest repository version directly, install it from GitHub:

```bash
pnpm add github:leaders-tech/scheme#path:/frontend
```

The repository includes the ready-built component, so the GitHub form does not
run installation scripts. Use a versioned npm release for production course
sites.

## Use it

Import the package once in the application's browser entry point:

```ts
import "@leaders-tech/schemio-playground";
```

Then put the element in a page or a framework template:

```html
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

`storage-key` is strongly recommended: the user's code is saved under that
key in `localStorage`. Add `storage="off"` to disable saving, or `readonly` to
show a non-editable program.

The element dispatches a bubbling `schemio-change` event after every edit. Its
`event.detail` contains `{ source, isValid }`.

## Release the package

The GitHub Actions workflow publishes the package after a tag named
`schemio-playground-v<package version>` is pushed, for example
`schemio-playground-v0.1.0`. It first runs the tests, builds the package, and
installs the resulting tarball with pnpm.

The package uses npm Trusted Publishing: npm must link this package to
`leaders-tech/scheme` and the `schemio-playground-package.yml` workflow, with
the `npm publish` action allowed. The workflow uses OpenID Connect and needs
no `NPM_TOKEN` secret or bypass-2FA token. Keep npm's recommended publishing
access setting: require 2FA and disallow bypass-2FA tokens.
