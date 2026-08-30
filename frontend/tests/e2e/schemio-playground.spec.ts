/*
This file checks the standalone Schemio web component in the system Chrome browser.
Edit it when the public embed API, local saving, or live debugger changes.
Copy it when another static course-page widget needs a browser smoke test.
*/

import { expect, test } from "@playwright/test";

const storageKey = "schemio-playground-demo-xor";

test("standalone playground restores code and evaluates separate test cases", async ({ page }) => {
  const browserErrors: string[] = [];
  const failedResponses: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      const location = message.location();
      browserErrors.push(`${message.text()} (${location.url})`);
    }
  });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failedResponses.push(`${response.status()} ${response.url()}`);
    }
  });
  await page.goto("/schemio-playground-demo.html");

  const playground = page.locator("schemio-playground");
  await expect
    .poll(
      () => playground.evaluate((element) => element.shadowRoot?.textContent ?? ""),
      { message: browserErrors.join("\n"), timeout: 15_000 },
    )
    .toContain("Schemio playground");
  expect(browserErrors, failedResponses.join("\n")).toEqual([]);
  await expect(playground.getByRole("heading", { name: "Diagnostics" })).toHaveCount(0);
  await playground.getByRole("button", { name: "Test 1: a 0" }).click();
  await expect(playground.getByLabel("Test 1: out 1")).toBeVisible();
  await playground.getByRole("button", { name: "Add test" }).click();
  await playground.getByRole("button", { name: "Test 2: b 0" }).click();
  await expect(playground.getByLabel("Test 2: out 1")).toBeVisible();
  const initialEditor = await playground.evaluate((element) => {
    const editor = element.shadowRoot?.querySelector(".cm-editor") as HTMLElement;
    const scroller = element.shadowRoot?.querySelector(".cm-scroller") as HTMLElement;
    return { height: editor.clientHeight, overflowY: getComputedStyle(scroller).overflowY, scrollHeight: scroller.scrollHeight, visibleHeight: scroller.clientHeight };
  });
  expect(initialEditor.overflowY).toBe("visible");
  expect(initialEditor.scrollHeight).toBeLessThanOrEqual(initialEditor.visibleHeight);

  const savedSource = "#! /opt/ejudge/schemio\n# A saved Schemio program.\nscheme (a) saved (out): # main scheme\n (a) not (out) # invert input\nend\n";
  await page.evaluate(
    ({ key, source }) => window.localStorage.setItem(key, source),
    { key: storageKey, source: savedSource },
  );
  await page.reload();

  await expect
    .poll(
      () =>
        page.locator("schemio-playground").evaluate((element) => {
          const lines = Array.from(element.shadowRoot?.querySelectorAll(".cm-line") ?? []).map((line) => line.textContent ?? "");
          return lines.filter((line) => line.length > 0).join("\n");
        }),
      { timeout: 15_000 },
    )
    .toBe(savedSource.trimEnd());
  await expect(playground.getByLabel("Test 1: out 1")).toBeVisible();
  const savedEditorHeight = await playground.evaluate((element) => (element.shadowRoot?.querySelector(".cm-editor") as HTMLElement).clientHeight);
  expect(savedEditorHeight).toBeLessThan(initialEditor.height);
  expect(browserErrors, failedResponses.join("\n")).toEqual([]);
});
