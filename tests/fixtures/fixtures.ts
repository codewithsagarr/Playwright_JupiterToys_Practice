import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { ContactPage } from '../../page-objects/ContactPage';
import { ShopPage } from '../../page-objects/ShopPage';
import { CartPage } from '../../page-objects/cartPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';

type Fixtures = {
  homePage: HomePage;
  contactPage: ContactPage;
  shopPage: ShopPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

//Everything before use() = setup.

//Everything after use() = teardown.

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await use(homePage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    // use --> Give this object to the test and pause here until the test finishes.
    await use(contactPage);
  },
  shopPage: async ({ page }, use) => {
    const shopPage = new ShopPage(page);
    // use --> Give this object to the test and pause here until the test finishes.
    await use(shopPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    // use --> Give this object to the test and pause here until the test finishes.
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    // use --> Give this object to the test and pause here until the test finishes.
    await use(checkoutPage);
  },
});

export { expect };
