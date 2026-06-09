import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { ContactPage } from '../../page-objects/ContactPage';

type Fixtures = {
  homePage: HomePage;
  contactPage: ContactPage;
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
});

export { expect };
