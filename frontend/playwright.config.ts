/*
This file configures Playwright e2e tests and the temporary dev servers they use.
Edit this file when browser test setup, ports, or e2e server env values change.
Copy a config pattern here when you add another shared e2e setting.
*/

import { defineConfig } from "@playwright/test";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(frontendRoot, "..");
const backendPort = 49010;
const frontendPort = 49173;
const backendUrl = `http://127.0.0.1:${backendPort}`;
const frontendUrl = `http://127.0.0.1:${frontendPort}`;
const dbPath = process.env.E2E_DB_PATH ?? path.join(os.tmpdir(), `schemes-e2e-${Date.now()}-${process.pid}.sqlite3`);
const uvCacheDir = path.join(os.tmpdir(), "schemes-uv-cache");

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: frontendUrl,
  },
  webServer: [
    {
      command: "uv run python -m backend.main",
      cwd: repoRoot,
      url: `${backendUrl}/health`,
      reuseExistingServer: false,
      env: {
        APP_MODE: "dev",
        APP_HOST: "127.0.0.1",
        APP_PORT: String(backendPort),
        DB_PATH: dbPath,
        COOKIE_SECRET: "playwright-secret",
        FRONTEND_ORIGIN: frontendUrl,
        UV_CACHE_DIR: uvCacheDir,
      },
    },
    {
      command: `npm run dev -- --host 127.0.0.1 --port ${frontendPort}`,
      cwd: frontendRoot,
      url: frontendUrl,
      reuseExistingServer: false,
      env: {
        VITE_BACKEND_URL: backendUrl,
      },
    },
  ],
});
