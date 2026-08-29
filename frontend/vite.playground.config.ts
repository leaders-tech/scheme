/*
This file builds the standalone Schemio playground for static course assets.
Edit it when the embed output path or lazy-loaded chunks change.
Copy it when another independently deployable frontend widget is needed.
*/

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL("./src/embed/schemioPlaygroundElement.ts", import.meta.url)),
      formats: ["es"],
      name: "SchemioPlayground",
    },
    outDir: "embed-dist",
    rollupOptions: {
      output: {
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "schemio-playground.js",
      },
    },
    target: "es2022",
  },
});
