/*
This file checks the standalone Schemio web component in the system Chrome browser.
Edit it when the public embed API, local saving, or live debugger changes.
Copy it when another static course-page widget needs a browser smoke test.
*/

import { expect, test } from "@playwright/test";

const storageKey = "schemio-playground-demo-xor";

test("standalone playground restores code and evaluates input bits", async ({ page }) => {
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
  await page.waitForTimeout(1000);
  const playgroundText = await playground.evaluate((element) => element.shadowRoot?.textContent ?? "");
  expect(playgroundText, browserErrors.join("\n")).toContain("Schemio playground");
  expect(browserErrors, failedResponses.join("\n")).toEqual([]);
  await playground.getByRole("button", { name: "a 0" }).click();
  await expect(playground.getByLabel("out 1")).toBeVisible();

  const savedSource = "scheme () saved ():\nend\n";
  await page.evaluate(
    ({ key, source }) => window.localStorage.setItem(key, source),
    { key: storageKey, source: savedSource },
  );
  await page.reload();

  await expect
    .poll(() =>
      page.locator("schemio-playground").evaluate((element) => element.shadowRoot?.querySelector(".cm-content")?.textContent ?? ""),
    )
    .toBe(savedSource);
});
