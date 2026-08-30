/*
This file builds the standalone Schemio playground for static course assets.
Edit it when the embed output path or lazy-loaded chunks change.
Copy it when another independently deployable frontend widget is needed.
*/

import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
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
