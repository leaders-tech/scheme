/*
This file configures Playwright e2e tests and the temporary dev servers they use.
Edit this file when browser test setup, ports, or e2e server env values change.
Copy a config pattern here when you add another shared e2e setting.
*/
var _a;
import { defineConfig } from "@playwright/test";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
var frontendRoot = path.dirname(fileURLToPath(import.meta.url));
var repoRoot = path.resolve(frontendRoot, "..");
var backendPort = 49010;
var frontendPort = 49173;
var backendUrl = "http://127.0.0.1:".concat(backendPort);
var frontendUrl = "http://127.0.0.1:".concat(frontendPort);
var dbPath = (_a = process.env.E2E_DB_PATH) !== null && _a !== void 0 ? _a : path.join(os.tmpdir(), "schemes-e2e-".concat(Date.now(), "-").concat(process.pid, ".sqlite3"));
var uvCacheDir = path.join(os.tmpdir(), "schemes-uv-cache");
export default defineConfig({
    testDir: "./tests/e2e",
    use: {
        baseURL: frontendUrl,
    },
    webServer: [
        {
            command: "uv run python -m backend.main",
            cwd: repoRoot,
            url: "".concat(backendUrl, "/health"),
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
            command: "npm run dev -- --host 127.0.0.1 --port ".concat(frontendPort),
            cwd: frontendRoot,
            url: frontendUrl,
            reuseExistingServer: false,
            env: {
                VITE_BACKEND_URL: backendUrl,
            },
        },
    ],
});
