const { test, expect } = require("@playwright/test");

test("Handle Suggestions", async ({ page }) => {
  await page.goto("");

  const input_Field = page.getByPlaceholder("Type to Select Countries");
  await input_Field.fill("ind");

  //wait for suggestion to appear

  const suggestion = page.locator(
    '//input[@class="inputs ui-autocomplete-input"]'
  );
  console.log(suggestion);
});
