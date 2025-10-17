const { test, expect } = require("@playwright/test");

test("handle Radio Button", async ({ page }) => {
  await page.goto("");
  await page.locator('//input[@value="radio2"]').check();

  await expect(page.locator('//input[@value="radio2"]')).toBeChecked();
  await page.waitForTimeout(2000);
});
