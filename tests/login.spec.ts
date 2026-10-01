

/* 4.1 Login Test Cases with POM

import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';


test('Login with valid credentials', async ({ page }) => {

    const homePage = new HomePage(page)

    // await page.goto('https://jupiter.cloud.planittesting.com/#/')
    await homePage.navigate()



    // await page.getByRole('link', { name: 'Login' }).click()

    // await page.getByRole('textbox', { name: 'Username' }).fill('Cameron')

    // await page.getByRole('textbox', { name: 'Password' }).fill('letmein')

    // await page.getByRole('button', { name: 'Login' }).click()

    await homePage.login("Cameron", "letmein")

    // retrieve the current URL
    const currentUrl = await homePage.getUrl();

    // Verify the navigation back to the home page
    expect(currentUrl).toContain('#/');

    // retrieve the current username
    const usernameText = await homePage.getUsername();

    // Verify the username is displayed correctly
    expect(usernameText).toBe('Cameron');


})

test('Login with invalid credentials', async ({ page }) => {

    const homePage = new HomePage(page)
    // await page.goto('https://jupiter.cloud.planittesting.com/#/')
    await homePage.navigate()

    // await page.getByRole('link', { name: 'Login' }).click()

    // await page.getByRole('textbox', { name: 'Username' }).fill('Cameronnnn')

    // await page.getByRole('textbox', { name: 'Password' }).fill('letmeinnnn')

    // await page.getByRole('button', { name: 'Login' }).click()

    homePage.login("Cam", "13213")

    //Generic assertion
    const errorText =
        await page.locator('#login-error').textContent();

    expect(errorText)
        .toContain('Your login details are incorrect');

    // await expect(
    //     page.locator('#login-error')
    // ).toHaveText('Your login details are incorrect');

    //locator assertion

    const loginError = page.locator('#login-error');

    await expect(loginError).toBeVisible(); //locator assertion
    await expect(loginError)
        .toContainText('Your login details are incorrect');

})

test('Login form empty field validation', async ({ page }) => {

    const homePage = new HomePage(page)
    // await page.goto('https://jupiter.cloud.planittesting.com/#/')
    await homePage.navigate()

    // await page.getByRole('link', { name: 'Login' }).click()

    // await page.getByRole('textbox', { name: 'Username' }).fill('')

    // await page.getByRole('textbox', { name: 'Password' }).fill('')

    // await page.getByRole('button', { name: 'Login' }).click()

    await homePage.login("", "")

    //Generic assertion
    const errorText =
        await page.locator('#login-error').textContent();

    expect(errorText)
        .toContain('Your login details are incorrect');

    // await expect(
    //     page.locator('#login-error')
    // ).toHaveText('Your login details are incorrect');

    //locator assertion

    const loginError = page.locator('#login-error');

    await expect(loginError).toBeVisible(); //locator assertion
    await expect(loginError)
        .toContainText('Your login details are incorrect');

    const errorMessage = await homePage.getErrorMessage();
    expect(errorMessage).toContain('Your login details are incorrect');


})

test('Logout from Jupiter toy', async ({ page }) => {

    const homePage = new HomePage(page)
    // await page.goto('https://jupiter.cloud.planittesting.com/#/')
    await homePage.navigate()

    // await page.getByRole('link', { name: 'Login' }).click()

    // await page.getByRole('textbox', { name: 'Username' }).fill('Cameron')

    // await page.getByRole('textbox', { name: 'Password' }).fill('letmein')

    // await page.getByRole('button', { name: 'Login' }).click()

    await homePage.login("Cameron", "letmein")

    // await page.getByRole('link', { name: 'Logout' }).click();

    // await page.locator('a').filter({ hasText: /^Logout$/ }).click();

    await homePage.logout()

    // Best option (user-facing behavior)
    await expect(
        page.getByRole('link', { name: 'Login' })
    ).toBeVisible();

    // // Text - based locator
    // await expect(
    //     page.getByText('Login')
    // ).toBeVisible();

    // // CSS locator
    // await expect(
    //     page.locator('a:has-text("Login")')
    // ).toBeVisible();

    // // Generic assertion(less preferred)
    // const isVisible = await page
    //     .getByRole('link', { name: 'Login' })
    //     .isVisible();

    // expect(isVisible).toBe(true);

})*/


/* 4.2 Login tests with POM & Test Describe

import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test.describe('Login Tests', () => {

    let homePage: HomePage;

    // Before each test runs, execute this asynchronous function and give it the Playwright page object so it can use the browser page.
    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.navigate();


    });


    test('Login with valid credentials', async ({ page }) => {

        // const homePage = new HomePage(page)

        // // await page.goto('https://jupiter.cloud.planittesting.com/#/')
        // await homePage.navigate()



        // await page.getByRole('link', { name: 'Login' }).click()

        // await page.getByRole('textbox', { name: 'Username' }).fill('Cameron')

        // await page.getByRole('textbox', { name: 'Password' }).fill('letmein')

        // await page.getByRole('button', { name: 'Login' }).click()

        await homePage.login("Cameron", "letmein")

        // retrieve the current URL
        const currentUrl = await homePage.getUrl();

        // Verify the navigation back to the home page
        expect(currentUrl).toContain('#/');

        // retrieve the current username
        const usernameText = await homePage.getUsername();

        // Verify the username is displayed correctly
        expect(usernameText).toBe('Cameron');


    })

    test('Login with invalid credentials', async ({ page }) => {

        // const homePage = new HomePage(page)
        // // await page.goto('https://jupiter.cloud.planittesting.com/#/')
        // await homePage.navigate()

        // await page.getByRole('link', { name: 'Login' }).click()

        // await page.getByRole('textbox', { name: 'Username' }).fill('Cameronnnn')

        // await page.getByRole('textbox', { name: 'Password' }).fill('letmeinnnn')

        // await page.getByRole('button', { name: 'Login' }).click()

        homePage.login("Cam", "13213")

        //Generic assertion
        const errorText =
            await page.locator('#login-error').textContent();

        expect(errorText)
            .toContain('Your login details are incorrect');

        // await expect(
        //     page.locator('#login-error')
        // ).toHaveText('Your login details are incorrect');

        //locator assertion

        const loginError = page.locator('#login-error');

        await expect(loginError).toBeVisible(); //locator assertion
        await expect(loginError)
            .toContainText('Your login details are incorrect');

    })

    test('Login form empty field validation', async ({ page }) => {

        // const homePage = new HomePage(page)
        // // await page.goto('https://jupiter.cloud.planittesting.com/#/')
        // await homePage.navigate()

        // await page.getByRole('link', { name: 'Login' }).click()

        // await page.getByRole('textbox', { name: 'Username' }).fill('')

        // await page.getByRole('textbox', { name: 'Password' }).fill('')

        // await page.getByRole('button', { name: 'Login' }).click()

        await homePage.login("", "")

        //Generic assertion
        const errorText =
            await page.locator('#login-error').textContent();

        expect(errorText)
            .toContain('Your login details are incorrect');

        // await expect(
        //     page.locator('#login-error')
        // ).toHaveText('Your login details are incorrect');

        //locator assertion

        const loginError = page.locator('#login-error');

        await expect(loginError).toBeVisible(); //locator assertion
        await expect(loginError)
            .toContainText('Your login details are incorrect');

        const errorMessage = await homePage.getErrorMessage();
        expect(errorMessage).toContain('Your login details are incorrect');


    })

    test('Logout from Jupiter toy', async ({ page }) => {

        // const homePage = new HomePage(page)
        // // await page.goto('https://jupiter.cloud.planittesting.com/#/')
        // await homePage.navigate()

        // await page.getByRole('link', { name: 'Login' }).click()

        // await page.getByRole('textbox', { name: 'Username' }).fill('Cameron')

        // await page.getByRole('textbox', { name: 'Password' }).fill('letmein')

        // await page.getByRole('button', { name: 'Login' }).click()

        await homePage.login("Cameron", "letmein")

        // await page.getByRole('link', { name: 'Logout' }).click();

        // await page.locator('a').filter({ hasText: /^Logout$/ }).click();

        await homePage.logout()

        // Best option (user-facing behavior)
        await expect(
            page.getByRole('link', { name: 'Login' })
        ).toBeVisible();

        // // Text - based locator
        // await expect(
        //     page.getByText('Login')
        // ).toBeVisible();

        // // CSS locator
        // await expect(
        //     page.locator('a:has-text("Login")')
        // ).toBeVisible();

        // // Generic assertion(less preferred)
        // const isVisible = await page
        //     .getByRole('link', { name: 'Login' })
        //     .isVisible();

        // expect(isVisible).toBe(true);

    })
})

*/

import { test, expect } from './fixtures/fixtures';

test.describe('Login Tests', () => {

  test('Login with valid credentials', async ({ homePage }) => {
    // Perform 6
    await homePage.login('Cameron', 'letmein');

    // retrieve the current URL
    const currentUrl = await homePage.getUrl();
    
    // Verify the navigation back to the home page
    expect(currentUrl).toContain('#/');

    // retrieve the current username
    const usernameText = await homePage.getUsername();

    // Verify the username is displayed correctly
    expect(usernameText).toBe('Cameron');
  });

  test('Login with invalid credentials', async ({ homePage }) => {
    // Perform login with invalid credentials
    await homePage.login('Cameron', 'Pleaseletmein');

    // Verify error message
    const errorMessage = await homePage.getErrorMessage();
    expect(errorMessage).toContain('Your login details are incorrect'); // Adjust this based on the actual error message
  });

  test('Login form empty field validation', async ({ homePage }) => {
      // Perform login
      await homePage.login('', '');
    
      // Verify error message
      const errorMessage = await homePage.getErrorMessage();
      expect(errorMessage).toContain('Your login details are incorrect'); 
  });


  test('Logout from jupiter toys', async ({ homePage }) => {
    // Perform login
    await homePage.login('Cameron', 'letmein');

    // retrieve the current username
    const usernameText = await homePage.getUsername();

    // Verify the username is displayed correctly
    expect(usernameText).toBe('Cameron');

    // logout from the application
    await homePage.logout();

    // retrieve the current username
    const loginButtonText = await homePage.getLoginButtonText();

    // Verify the username is displayed correctly
    expect(loginButtonText).toBe('Login');
  });

});



