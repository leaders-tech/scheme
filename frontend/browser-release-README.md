# Schemio playground browser files

This folder is a ready-to-use browser distribution of the Schemio playground.
It registers the `<schemio-playground>` custom element without pnpm, React, or
another build step.

Edit this file when the direct-browser import path or public element API
changes. Copy it when another web component needs a small static-file guide.

## Put it next to a page

Keep `schemio-playground.js` and the `chunks/` folder together. For example:

```text
course-page/
├── problem-a.html
└── schemio-playground/
    ├── schemio-playground.js
    └── chunks/
```

In `problem-a.html`, load the module once and use the element:

```html
<script type="module" src="./schemio-playground/schemio-playground.js"></script>

<schemio-playground storage-key="course-problem-a">
  <script type="text/plain">
scheme (a) invert (out):
 (a) not (out)
end
  </script>
</schemio-playground>
```

Serve the page from the same static website as the component files. Do not open
the HTML file with a `file://` URL: browser modules require an HTTP(S) origin.

`storage-key` is strongly recommended. It keeps each student's code in that
browser's `localStorage`. Add `storage="off"` to disable saving or `readonly`
to show the program without editing.
