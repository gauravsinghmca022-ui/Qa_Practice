import { test, expect } from "@playwright/test";
const { chromium } = require("@playwright/test");

test("handle Switch Tab", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.getByRole("link", { name: "Open Tab" }).click(),
  ]);

  await newPage.waitForLoadState();

  await newPage.getByRole("link", { name: "Access all our Courses" });
  await newPage.waitForTimeout(2000);
});
