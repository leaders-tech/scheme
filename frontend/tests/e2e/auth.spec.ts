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

test("anonymous user is redirected to login from workspace", async ({ page }) => {
  await page.goto("/workspace");
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});
