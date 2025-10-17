import { test, expect } from "@playwright/test";
const { chromium } = require("@playwright/test");

test("Handle To open new Window", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("");

  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open Window" }).click(),
  ]);

  await newWindow.waitForLoadState();
  console.log(" page Tittle", await newWindow.title());

  await newWindow.getByRole("link", { name: "Access all our Courses" });
});
