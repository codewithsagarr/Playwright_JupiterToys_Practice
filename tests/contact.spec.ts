

/*2.3 Contact form submission test without page object model

import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';

test('Contact form submission', async ({ page }) => {
    // Navigate to the contact page
    await page.goto('https://jupiter.cloud.planittesting.com/#/contact');

    // Fill in the contact form
    await page.getByRole('textbox', { name: 'Forename' }).fill('John');
    await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
    await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
    await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
    await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

    // Submit the form
    // npx playwright codegen
    await page.getByRole('link', { name: 'Submit' }).click();

    // Wait for the success message
    //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
    // Locator objects are auto-waiting and more stable:

    // const successMessage = await page.waitForSelector('.alert-success');
    const successMessage = await page.locator('.alert-success');

    //Problems: with toBeTruthy and toBeVisible assertions:

    // It checks on The variable is not null, undefined, false, 0, etc.
    // The element may exist but be hidden.
    // The element may exist but not be rendered to the user.
    // The element may be detached immediately after being found.
    // It doesn't verify the actual user experience.
    // expect(successMessage).toBeTruthy();

    // Element exists.
    // Element is attached to DOM.
    // Element is not hidden.
    // Element has a visible bounding box.
    // User can actually see it.
    await expect(successMessage).toBeVisible({ timeout: 20000 });

    // | Timeout Type | Default |
    // | --------------------------------------- | ---------- |
    // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
    // | `expect()` assertions | 5 seconds |
    // | Test timeout | 30 seconds |
    // | Navigation timeout | 30 seconds |

    //   export default defineConfig({
    //   timeout: 60000,        // entire test
    //   expect: {
    //     timeout: 10000       // assertions
    //   },
    //   use: {
    //     actionTimeout: 15000,
    //     navigationTimeout: 30000
    //   }
    // });


    // Verify the success message content
    const successMessageText = await successMessage.textContent();
    expect(successMessageText).toContain('we appreciate your feedback.');

    // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
    // await expect(page.locator('.alert-success')).toBeVisible();

    // await expect(page.locator('.alert-success'))
    //     .toContainText('Thanks John, we appreciate your feedback.');
});

*/

/*2.4 Submit Contact form With POM 

import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';

test('Contact form submission', async ({ page }) => {

    //Create an Object of Contact Page
    const contactPage = new ContactPage(page)

    // Navigate to the contact page
    // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
    contactPage.navigate()

    // Fill in the contact form
    // await page.getByRole('textbox', { name: 'Forename' }).fill('John');
    // await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
    // await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
    // await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
    // await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

    await contactPage.fillContactForm("John","Cena","john.cena@example.com","1234567890","This is a test message.")

    // Submit the form
    // npx playwright codegen
    // await page.getByRole('link', { name: 'Submit' }).click();
    
    await contactPage.submitForm()

    // Wait for the success message
    //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
    // Locator objects are auto-waiting and more stable:

    // const successMessage = await page.waitForSelector('.alert-success');
    const successMessage =  page.locator('.alert-success');

    //Problems: with toBeTruthy and toBeVisible assertions:

    // It checks on The variable is not null, undefined, false, 0, etc.
    // The element may exist but be hidden.
    // The element may exist but not be rendered to the user.
    // The element may be detached immediately after being found.
    // It doesn't verify the actual user experience.
    // expect(successMessage).toBeTruthy();

    // Element exists.
    // Element is attached to DOM.
    // Element is not hidden.
    // Element has a visible bounding box.
    // User can actually see it.
    await expect(successMessage).toBeVisible({ timeout: 20000 });

    // | Timeout Type | Default |
    // | --------------------------------------- | ---------- |
    // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
    // | `expect()` assertions | 5 seconds |
    // | Test timeout | 30 seconds |
    // | Navigation timeout | 30 seconds |

    //   export default defineConfig({
    //   timeout: 60000,        // entire test
    //   expect: {
    //     timeout: 10000       // assertions
    //   },
    //   use: {
    //     actionTimeout: 15000,
    //     navigationTimeout: 30000
    //   }
    // });


    // Verify the success message content
    const successMessageText = await successMessage.textContent();
    expect(successMessageText).toContain('we appreciate your feedback.');

    // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
    // await expect(page.locator('.alert-success')).toBeVisible();

    // await expect(page.locator('.alert-success'))
    //     .toContainText('Thanks John, we appreciate your feedback.');
});

*/

/* 2.5 Submit Contact form With POM & Navigating to Contact Form from Home Page

import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';


test('Contact form submission', async ({ page }) => {

    //Create an Object of Contact Page
    const contactPage = new ContactPage(page)

    // Navigate to the contact page
    // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
    contactPage.navigate()

    // Fill in the contact form
    // await page.getByRole('textbox', { name: 'Forename' }).fill('John');
    // await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
    // await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
    // await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
    // await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

    await contactPage.fillContactForm("John","Cena","john.cena@example.com","1234567890","This is a test message.")

    // Submit the form
    // npx playwright codegen
    // await page.getByRole('link', { name: 'Submit' }).click();
    
    await contactPage.submitForm()

    // Wait for the success message
    //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
    // Locator objects are auto-waiting and more stable:

    // const successMessage = await page.waitForSelector('.alert-success');
    const successMessage =  page.locator('.alert-success');

    //Problems: with toBeTruthy and toBeVisible assertions:

    // It checks on The variable is not null, undefined, false, 0, etc.
    // The element may exist but be hidden.
    // The element may exist but not be rendered to the user.
    // The element may be detached immediately after being found.
    // It doesn't verify the actual user experience.
    // expect(successMessage).toBeTruthy();

    // Element exists.
    // Element is attached to DOM.
    // Element is not hidden.
    // Element has a visible bounding box.
    // User can actually see it.
    await expect(successMessage).toBeVisible({ timeout: 20000 });

    // | Timeout Type | Default |
    // | --------------------------------------- | ---------- |
    // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
    // | `expect()` assertions | 5 seconds |
    // | Test timeout | 30 seconds |
    // | Navigation timeout | 30 seconds |

    //   export default defineConfig({
    //   timeout: 60000,        // entire test
    //   expect: {
    //     timeout: 10000       // assertions
    //   },
    //   use: {
    //     actionTimeout: 15000,
    //     navigationTimeout: 30000
    //   }
    // });


    // Verify the success message content
    const successMessageText = await successMessage.textContent();
    expect(successMessageText).toContain('we appreciate your feedback.');

    // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
    // await expect(page.locator('.alert-success')).toBeVisible();

    // await expect(page.locator('.alert-success'))
    //     .toContainText('Thanks John, we appreciate your feedback.');
});


test('Navigate to contact page from home', async ({ page }) => {

    //Create an Object of Contact Page
    const homePage = new HomePage(page)
  
    //Navigate to Home Page
    await homePage.navigate()

    //Click Contact Link
    await homePage.clickContactLink()

   // Verify the navigation to the contact page
    expect(page.url()).toContain('#/contact');

    
    
});

*/

//

/*2.5 Submit Contact form With POM & Navigating to Contact Form from Home Page & Error Validation of Mandatory fields

import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';

test('Contact form submission', async ({ page }) => {

    //Create an Object of Contact Page
    const contactPage = new ContactPage(page)

    // Navigate to the contact page
    // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
    contactPage.navigate()

    // Fill in the contact form
    // await page.getByRole('textbox', { name: 'Forename' }).fill('John');
    // await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
    // await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
    // await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
    // await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

    await contactPage.fillContactForm("John", "Cena", "john.cena@example.com", "1234567890", "This is a test message.")




    // Submit the form
    // npx playwright codegen
    // await page.getByRole('link', { name: 'Submit' }).click();

    await contactPage.submitForm()

    // Wait for the success message
    //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
    // Locator objects are auto-waiting and more stable:

    // const successMessage = await page.waitForSelector('.alert-success');
    const successMessage = page.locator('.alert-success');

    //Problems: with toBeTruthy and toBeVisible assertions:

    // It checks on The variable is not null, undefined, false, 0, etc.
    // The element may exist but be hidden.
    // The element may exist but not be rendered to the user.
    // The element may be detached immediately after being found.
    // It doesn't verify the actual user experience.
    // expect(successMessage).toBeTruthy();

    // Element exists.
    // Element is attached to DOM.
    // Element is not hidden.
    // Element has a visible bounding box.
    // User can actually see it.
    await expect(successMessage).toBeVisible({ timeout: 20000 });

    // | Timeout Type | Default |
    // | --------------------------------------- | ---------- |
    // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
    // | `expect()` assertions | 5 seconds |
    // | Test timeout | 30 seconds |
    // | Navigation timeout | 30 seconds |

    //   export default defineConfig({
    //   timeout: 60000,        // entire test
    //   expect: {
    //     timeout: 10000       // assertions
    //   },
    //   use: {
    //     actionTimeout: 15000,
    //     navigationTimeout: 30000
    //   }
    // });


    // Verify the success message content
    const successMessageText = await successMessage.textContent();
    expect(successMessageText).toContain('we appreciate your feedback.');

    // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
    // await expect(page.locator('.alert-success')).toBeVisible();

    // await expect(page.locator('.alert-success'))
    //     .toContainText('Thanks John, we appreciate your feedback.');
});




test('Submit Contact form after validation error', async ({ page }) => {

    //Create an Object of Contact Page
    const contactPage = new ContactPage(page)

    // Navigate to the contact page
    // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
    contactPage.navigate()

    // Fill in the contact form

    // await contactPage.fillContactForm("John","Cena","john.cena@example.com","1234567890","This is a test message.")
    await contactPage.fillContactForm("", "", "", "", "")


    // Submit the form

    await contactPage.submitForm()

    // Check for validation errors
    expect(await contactPage.checkTextIsVisible('Forename is required')).toBe(true);
    expect(await contactPage.checkTextIsVisible('Email is required')).toBe(true);
    expect(await contactPage.checkTextIsVisible('Message is required')).toBe(true);



});
*/

/*4.2 Contact Specs with test.describe and beforeEach hook

import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';

test.describe('Contact Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    });


    test('Contact form submission', async ({ page }) => {

        //Create an Object of Contact Page
        // const contactPage = new ContactPage(page)

        // Navigate to the contact page
        // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
        // contactPage.navigate()

        // Fill in the contact form
        // await page.getByRole('textbox', { name: 'Forename' }).fill('John');
        // await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
        // await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
        // await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
        // await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

        await contactPage.fillContactForm("John", "Cena", "john.cena@example.com", "1234567890", "This is a test message.")




        // Submit the form
        // npx playwright codegen
        // await page.getByRole('link', { name: 'Submit' }).click();

        await contactPage.submitForm()

        // Wait for the success message
        //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
        // Locator objects are auto-waiting and more stable:

        // const successMessage = await page.waitForSelector('.alert-success');
        const successMessage = page.locator('.alert-success');

        //Problems: with toBeTruthy and toBeVisible assertions:

        // It checks on The variable is not null, undefined, false, 0, etc.
        // The element may exist but be hidden.
        // The element may exist but not be rendered to the user.
        // The element may be detached immediately after being found.
        // It doesn't verify the actual user experience.
        // expect(successMessage).toBeTruthy();

        // Element exists.
        // Element is attached to DOM.
        // Element is not hidden.
        // Element has a visible bounding box.
        // User can actually see it.
        await expect(successMessage).toBeVisible({ timeout: 20000 });

        // | Timeout Type | Default |
        // | --------------------------------------- | ---------- |
        // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
        // | `expect()` assertions | 5 seconds |
        // | Test timeout | 30 seconds |
        // | Navigation timeout | 30 seconds |

        //   export default defineConfig({
        //   timeout: 60000,        // entire test
        //   expect: {
        //     timeout: 10000       // assertions
        //   },
        //   use: {
        //     actionTimeout: 15000,
        //     navigationTimeout: 30000
        //   }
        // });


        // Verify the success message content
        const successMessageText = await successMessage.textContent();
        expect(successMessageText).toContain('we appreciate your feedback.');

        // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
        // await expect(page.locator('.alert-success')).toBeVisible();

        // await expect(page.locator('.alert-success'))
        //     .toContainText('Thanks John, we appreciate your feedback.');
    });




    test('Submit Contact form after validation error', async ({ page }) => {

        //Create an Object of Contact Page
        // const contactPage = new ContactPage(page)

        // Navigate to the contact page
        // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
        // contactPage.navigate()

        // Fill in the contact form

        // await contactPage.fillContactForm("John","Cena","john.cena@example.com","1234567890","This is a test message.")
        await contactPage.fillContactForm("", "", "", "", "")


        // Submit the form

        await contactPage.submitForm()

        // Check for validation errors
        expect(await contactPage.checkTextIsVisible('Forename is required')).toBe(true);
        expect(await contactPage.checkTextIsVisible('Email is required')).toBe(true);
        expect(await contactPage.checkTextIsVisible('Message is required')).toBe(true);



    });

});
*/

/* 4.3 Adding Login and complete contact form without Fixtures
import { test, expect } from '@playwright/test';
import { ContactPage } from '../page-objects/ContactPage';
import { HomePage } from '../page-objects/HomePage';

test.describe('Contact Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();
    });


    test('Contact form submission', async ({ page }) => {

        //Create an Object of Contact Page
        // const contactPage = new ContactPage(page)

        // Navigate to the contact page
        // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
        // contactPage.navigate()

        // Fill in the contact form
        // await page.getByRole('textbox', { name: 'Forename' }).fill('John');
        // await page.getByRole('textbox', { name: 'Surname' }).fill('Cena');
        // await page.getByRole('textbox', { name: 'Email' }).fill('john.cena@example.com');
        // await page.getByRole('textbox', { name: 'Telephone' }).fill('1234567890');
        // await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');

        await contactPage.fillContactForm("John", "Cena", "john.cena@example.com", "1234567890", "This is a test message.")




        // Submit the form
        // npx playwright codegen
        // await page.getByRole('link', { name: 'Submit' }).click();

        await contactPage.submitForm()

        // Wait for the success message
        //waitForSelector returns an ElementHandle, which Playwright generally discourages for test assertions. 
        // Locator objects are auto-waiting and more stable:

        // const successMessage = await page.waitForSelector('.alert-success');
        const successMessage = page.locator('.alert-success');

        //Problems: with toBeTruthy and toBeVisible assertions:

        // It checks on The variable is not null, undefined, false, 0, etc.
        // The element may exist but be hidden.
        // The element may exist but not be rendered to the user.
        // The element may be detached immediately after being found.
        // It doesn't verify the actual user experience.
        // expect(successMessage).toBeTruthy();

        // Element exists.
        // Element is attached to DOM.
        // Element is not hidden.
        // Element has a visible bounding box.
        // User can actually see it.
        await expect(successMessage).toBeVisible({ timeout: 20000 });

        // | Timeout Type | Default |
        // | --------------------------------------- | ---------- |
        // | Locator actions(`click`, `fill`, etc.) | 30 seconds |
        // | `expect()` assertions | 5 seconds |
        // | Test timeout | 30 seconds |
        // | Navigation timeout | 30 seconds |

        //   export default defineConfig({
        //   timeout: 60000,        // entire test
        //   expect: {
        //     timeout: 10000       // assertions
        //   },
        //   use: {
        //     actionTimeout: 15000,
        //     navigationTimeout: 30000
        //   }
        // });


        // Verify the success message content
        const successMessageText = await successMessage.textContent();
        expect(successMessageText).toContain('we appreciate your feedback.');

        // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
        // await expect(page.locator('.alert-success')).toBeVisible();

        // await expect(page.locator('.alert-success'))
        //     .toContainText('Thanks John, we appreciate your feedback.');
    });




    test('Submit Contact form after validation error', async ({ page }) => {

        //Create an Object of Contact Page
        // const contactPage = new ContactPage(page)

        // Navigate to the contact page
        // await page.goto('https://jupiter.cloud.planittesting.com/#/contact');
        // contactPage.navigate()

        // Fill in the contact form

        // await contactPage.fillContactForm("John","Cena","john.cena@example.com","1234567890","This is a test message.")
        await contactPage.fillContactForm("", "", "", "", "")


        // Submit the form

        await contactPage.submitForm()

        // Check for validation errors
        expect(await contactPage.checkTextIsVisible('Forename is required')).toBe(true);
        expect(await contactPage.checkTextIsVisible('Email is required')).toBe(true);
        expect(await contactPage.checkTextIsVisible('Message is required')).toBe(true);



    });

    test('Login and complete contact form', async ({ page }) => {

        // Navigate to contact page
        // await contactPage.navigate();

        // Login
        await contactPage.login('Cameron', 'letmein');

        // Fill out the contact form
        await contactPage.fillContactForm('Cameron', 'Bradley', 'john.doe@example.com', '1234567890', 'This is a test message.');

        // Submit the form
        await contactPage.submitForm();

        // Verify success message
        const successMessage = await contactPage.getSuccessMessage();
        expect(successMessage).toContain('Thanks Cameron, we appreciate your feedback.');


    });

});

*/

//4.3 With Fixtures
import { test, expect } from './fixtures/fixtures';

test.describe('Contact Tests', () => {

  test('Contact form submission', async ({ contactPage }) => {
    //navigate to contact page
    await contactPage.navigate();

    // Fill in the contact form
    await contactPage.fillContactForm('John', 'Doe', 'john.doe@example.com', '1234567890', 'This is a test message.');

    // Submit the form
    await contactPage.submitForm();

    // Verify the success message content
    const successMessageText = await contactPage.getSuccessMessage();
    expect(successMessageText).toContain('Thanks John, we appreciate your feedback.');
  });


  test('Submit Contact form after validation error', async ({ contactPage }) => {
    //navigate to contact page
    await contactPage.navigate();

    // Fill in the contact form
    await contactPage.fillContactForm(' ', ' ', ' ', ' ', ' ');

    // Check for validation errors
    expect(await contactPage.checkTextIsVisible('Forename is required')).toBe(true);
    expect(await contactPage.checkTextIsVisible('Email is required')).toBe(true);
    expect(await contactPage.checkTextIsVisible('Message is required')).toBe(true);

    // Fill in the contact form
    await contactPage.fillContactForm('John', 'Doe', 'john.doe@example.com', '1234567890', 'This is a test message.');

    // Submit the form
    await contactPage.submitForm();

    // Verify the success message content
    const successMessageText = await contactPage.getSuccessMessage();
    expect(successMessageText).toContain('Thanks John, we appreciate your feedback.');
  });

  test('Login and complete contact form', async ({ homePage, contactPage }) => {
    // Perform login
    await homePage.navigate();
    await homePage.login('Cameron', 'letmein');

    // Navigate to contact page
    await contactPage.navigate();

    // Fill out the contact form
    await contactPage.fillContactForm('Cameron', 'Bradley', 'john.doe@example.com', '1234567890', 'This is a test message.');

    // Submit the form
    await contactPage.submitForm();

    // Verify success message
    const successMessage = await contactPage.getSuccessMessage();
    expect(successMessage).toContain('Thanks Cameron, we appreciate your feedback.');
  });

});
