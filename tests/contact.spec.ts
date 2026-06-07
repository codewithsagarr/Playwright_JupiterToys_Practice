import { test, expect } from '@playwright/test';

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
    expect(successMessage).toBeVisible();

    // Verify the success message content
    const successMessageText = await successMessage.textContent();
    expect(successMessageText).toContain('Thanks John, we appreciate your feedback.');

    // We can directly assert on the locator without extracting text content, which is more efficient and reliable:
    // await expect(page.locator('.alert-success')).toBeVisible();

    // await expect(page.locator('.alert-success'))
    //     .toContainText('Thanks John, we appreciate your feedback.');
});
