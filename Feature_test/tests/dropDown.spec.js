const { test, expect } = require("@playwright/test");

test("handle DropDown", async ({ page }) => {
  await page.goto("");
  await page.selectOption("#dropdown-class-example", "Option2");

  await expect(page.locator("#dropdown-class-example")).toBeVisible();
  await page.waitForTimeout(2000);
});
