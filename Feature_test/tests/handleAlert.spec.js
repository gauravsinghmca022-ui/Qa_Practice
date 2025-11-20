import { test, expect } from "@playwright/test";

test("Handle Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (d) => {
    expect(d.message()).toContain("I am a JS Alert");
    await d.accept();
  });
  await page.locator('//button[text()="Click for JS Alert"]').click();
});

test.only("Handle Alert 2nd time", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (d) => {
    expect(d.message()).toContain("I am a JS Alert");
    d.accept();
  });
  await page.locator('//button[text()="Click for JS Alert"]').click();
});
