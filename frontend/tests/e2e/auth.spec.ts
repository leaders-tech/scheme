/*
This file checks the main browser flows for login, scheme files, autosave, and redirects.
Edit this file when the real user flow changes across pages, cookies, or redirects.
Copy a test pattern here when you add another end-to-end browser flow.
*/

import { expect, test, type Page } from "@playwright/test";

async function waitForWorkspace(page: Page) {
  await expect(page.getByText("Signed in as user.")).toBeVisible();
}

async function ensureOpenFile(page: Page) {
  await waitForWorkspace(page);
  const createFirstFileButton = page.getByRole("button", { name: "Create first file" });
  if (await createFirstFileButton.isVisible().catch(() => false)) {
    await createFirstFileButton.click();
  }
  const activeHeading = page.locator("h2").filter({ hasText: /^scheme \d+$/ }).last();
  await expect(activeHeading).toBeVisible();
  return (await activeHeading.textContent())?.trim() ?? "";
}

test("user can login, edit a scheme file, visualize it, and keep the file after reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Username")).toHaveValue("");
  await expect(page.getByLabel("Password")).toHaveValue("");
  await page.getByLabel("Username").fill("user");
  await page.getByLabel("Password").fill("user");
  await page.getByRole("button", { name: "Login" }).click();

  const originalFileName = await ensureOpenFile(page);

  const editor = page.locator(".cm-content").first();
  await editor.click();
  await page.keyboard.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
  await page.keyboard.type(
    "scheme (in1 in2) xor2 (out):\n local both any not_both\n (in1 in2) and (both)\n (in1 in2) or (any)\n (both) not (not_both)\n (any not_both) and (out)\nend",
  );
  await page.waitForTimeout(1200);
  await expect(page.getByText("Saved")).toBeVisible();

  await page.getByRole("button", { name: "Open visualizer" }).click();
  await page.getByRole("button", { name: "in1 0" }).click();
  await expect(page.getByLabel("out 1")).toBeVisible();

  await page.reload();
  await expect(page.getByRole("heading", { name: originalFileName })).toBeVisible();
  await page.getByRole("button", { name: "Open visualizer" }).click();
  await expect(page.getByRole("button", { name: /in1/ })).toBeVisible();

  const fileButtons = page.locator("aside button").filter({ hasText: /^scheme \d+$/ });
  const initialFileCount = await fileButtons.count();
  await page.getByRole("button", { name: "New file" }).click();
  await expect(fileButtons).toHaveCount(initialFileCount + 1);
  const fileNames = (await fileButtons.allTextContents()).map((name) => name.trim());
  const nextFileName = fileNames.find((name) => name !== originalFileName) ?? "";
  expect(nextFileName).not.toBe(originalFileName);
  await expect(page.getByRole("heading", { name: nextFileName })).toBeVisible();
  await page.getByRole("button", { name: originalFileName }).click();
  await expect(page.getByRole("heading", { name: originalFileName })).toBeVisible();

  await page.getByRole("button", { name: "Logout" }).click();
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});

test("invalid scheme code shows detailed diagnostics", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Username").fill("user");
  await page.getByLabel("Password").fill("user");
  await page.getByRole("button", { name: "Login" }).click();
  await ensureOpenFile(page);
  const editor = page.locator(".cm-content").first();
  await editor.click();
  await page.keyboard.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
  await page.keyboard.type("scheme (x) broken (out)\nend");
  await expect(page.getByText(/Expected ":"/)).toBeVisible();
});

test("scheme editor accepts completions with Tab and keeps Enter for new lines", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Username").fill("user");
  await page.getByLabel("Password").fill("user");
  await page.getByRole("button", { name: "Login" }).click();
  await ensureOpenFile(page);

  const editor = page.locator(".cm-content").first();
  await editor.click();
  await page.keyboard.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
  await page.keyboard.type("sc");
  const autocomplete = page.locator(".cm-tooltip-autocomplete");
  await expect(autocomplete).toContainText("scheme");

  await page.keyboard.press("Tab");
  await expect(editor).toContainText("scheme");

  await page.keyboard.press("Space");
  await expect(autocomplete).toContainText("Start the input signal list");
  await page.keyboard.press("Tab");
  await expect(editor).toContainText("scheme (");

  await page.keyboard.type("x1 x2) mod3 (out):");
  await page.keyboard.press("Enter");

  const content = await editor.innerText();
  expect(content).toContain("scheme (x1 x2) mod3 (out):\n");
  expect(content).not.toContain("scheme (x1 x2) mod3 (out):and");
});

test("student sees the seeded beginner tasks first", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Username").fill("user");
  await page.getByLabel("Password").fill("user");
  await page.getByRole("button", { name: "Login" }).click();
  await waitForWorkspace(page);
  await page.goto("/tasks");

  await expect(page.getByRole("heading", { name: "1. Build OR for Three Inputs" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Theory" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What to submit" })).toBeVisible();
  await expect(page.locator("aside button").filter({ hasText: "1. Build OR for Three Inputs" }).first()).toBeVisible();
});

test("public admin can create task and student can submit it", async ({ page }) => {
  await page.goto("/admin/tasks");
  await expect(page.getByRole("button", { name: "New task" })).toBeEnabled();
  await page.getByRole("button", { name: "New task" }).click();
  await page.getByLabel("Title").fill("XOR task");
  await page.getByLabel("Statement markdown").fill("# XOR\nBuild xor.");
  await page.getByLabel("Input count (N)").fill("2");
  await page.getByLabel("Output count (M)").fill("1");
  await page.getByLabel("Expected outputs (2^N lines of M bits)").fill("0\n1\n1\n0");
  await page.getByRole("button", { name: "Save task" }).click();
  await expect(page.getByText("Task saved.")).toBeVisible();

  await page.goto("/login");
  await page.getByLabel("Username").fill("user");
  await page.getByLabel("Password").fill("user");
  await page.getByRole("button", { name: "Login" }).click();
  await waitForWorkspace(page);
  await page.goto("/tasks");
  await page.getByRole("button", { name: "XOR task" }).click();
  await expect(page.getByRole("heading", { name: "XOR task" })).toBeVisible();

  const editor = page.locator(".cm-content").first();
  await editor.click();
  await page.keyboard.type(
    "scheme (a b) main (z):\n local x1 x2 x3\n (a b) or (x1)\n (a b) and (x2)\n (x2) not (x3)\n (x1 x3) and (z)\nend",
  );
  await expect(page.getByText("Saved")).toBeVisible();

  await page.getByRole("button", { name: "Open visualizer" }).click();
  await expect(page.getByLabel("z 0")).toBeVisible();
  await page.getByRole("button", { name: "a 0" }).click();
  await expect(page.getByLabel("z 1")).toBeVisible();

  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Accepted.")).toBeVisible();
  await expect(page.getByRole("button", { name: /XOR task/ })).toContainText("Passed");

  await page.reload();
  await page.getByRole("button", { name: /XOR task/ }).click();
  await expect(page.getByRole("heading", { name: "XOR task" })).toBeVisible();
  await expect(page.getByText("Accepted.")).toBeVisible();
  await expect(page.locator(".cm-content").first()).toContainText("scheme (a b) main (z):");
});

test("anonymous user is redirected to login from sandbox", async ({ page }) => {
  await page.goto("/sandbox");
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});
