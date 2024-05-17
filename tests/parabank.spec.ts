import { test, expect } from "@playwright/test";

test("bank", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/");

  await page.locator("//a[normalize-space()='Register']").click();

  await page.locator("//input[@id='customer.firstName']").fill("Peter");

  await page.locator("//input[@id='customer.lastName']").fill("well");

  await page.locator("//input[@id='customer.address.street']").fill("india");

  await page.locator("//input[@id='customer.address.city']").fill("pune");

  await page
    .locator("//input[@id='customer.address.state']")
    .fill("maharashtra");

  await page.locator("//input[@id='customer.address.zipCode']").fill("523641");

  await page.locator("//input[@id='customer.phoneNumber']").fill("96235289");

  await page.locator("//input[@id='customer.ssn']").fill("210");

  await page.locator("//input[@id='customer.username']").fill("chgj");

  await page.locator("//input[@id='customer.firstName']").fill("Peter");

  await page.locator("//input[@id='customer.password']").fill("Peter");

  await page.locator("//input[@id='repeatedPassword']").fill("Peter");

  await page.locator("//input[@value='Register']").click();
});
