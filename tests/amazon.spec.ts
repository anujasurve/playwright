import { test, expect } from "@playwright/test";

test("Add iPhone to cart", async ({ page }) => {
  // go to the link
  await page.goto("https://www.amazon.com.au/");

  // click on Electronics
  await page.click('div#nav-xshop a:text("Electronics")');

  // exprct the page to have title Electronics
  await expect(page).toHaveTitle(/Electronics/);

  // click on 'Mobile Phones & Communication'
  await page.locator("//a[@title='Mobile Phones & Communication']").click();

  // expect the page to have title Mobile Phones & Communication
  await expect(page).toHaveTitle(/Mobile Phones & Communication/);

  //click on mobile phones
  await page
    .locator(
      "//a[@title='Mobile Phones']//div[@class='a-section octopus-pc-category-card-v2-shield']"
    )
    .click();

  // to filter all the phones using "äpple" brand click on apple
  await page
    .locator(
      "//span[@class='a-size-base a-color-base'][normalize-space()='Apple']"
    )
    .click();

  //click on Apple iPhone 15 (128 GB) - Black
  await page
    .locator("//span[normalize-space()='Apple iPhone 15 (128 GB) - Black']")
    .click();

  // add to basket
  await page.locator("//input[@id='add-to-cart-button-ubb']").click();

  // proceed to checkout
  await page.locator("//input[@name='proceedToRetailCheckout']").click();
});

test("hamburger menu", async ({ page }) => {
  await page.goto("https://www.amazon.com.au/");

  await page.locator("//i[@class='hm-icon nav-sprite']").click();

  const amazon_vid = page
    .locator(
      "//a[@class='hmenu-item']//div[contains(text(),'Amazon Prime Video')]"
    )
    .first();
  await amazon_vid.hover();
  await amazon_vid.click();

  const modern_love = page
    .locator("//a[normalize-space()='Modern Love']")
    .nth(1);
  await modern_love.click();

  await expect(page).toHaveTitle(/Modern Love/);
});
