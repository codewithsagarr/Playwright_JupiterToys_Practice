import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';


/* 2.1 Navigate to a website and verify the title of the page
test('home page title', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://jupiter.cloud.planittesting.com/#/');

  // Interact with the page
  const title = await page.title();
  console.log(`Title: ${title}`);

  // Add an assertion on the page title
  expect(title).toBe('Jupiter Toys');
});

*/

/* 2.5 Navigate to home page with POM


test('home page title', async ({ page }) => {

    const homePage = new HomePage(page)
    // Navigate to a website
    //   await page.goto('https://jupiter.cloud.planittesting.com/#/');

    await homePage.navigate()

    // Interact with the page
    // const title = await page.title();
    const title = await homePage.getTitle()
    console.log(`Title: ${title}`);

    // Add an assertion on the page title
    expect(title).toBe('Jupiter Toys');
});

test('Navigate to contact page from home', async ({ page }) => {

    //Create an Object of Contact Page
    const homePage = new HomePage(page)

    //Navigate to Home Page
    await homePage.navigate()

    //Click Contact Link
    await homePage.clickContactLink()

    // Verify the navigation to the contact page
    // expect(page.url()).toContain('#/contact');
    expect(await homePage.getUrl()).toContain('#/contact');



});

*/

test.describe('Home Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.navigate();


    });


    test('home page title', async ({ page }) => {

        // const homePage = new HomePage(page)
        // Navigate to a website
        //   await page.goto('https://jupiter.cloud.planittesting.com/#/');

        // await homePage.navigate()

        // Interact with the page
        // const title = await page.title();
        const title = await homePage.getTitle()
        // console.log(`Title: ${title}`);

        // Add an assertion on the page title
        expect(title).toBe('Jupiter Toys');
    });

    test('Navigate to contact page from home', async ({ page }) => {

        //Create an Object of Contact Page
        // const homePage = new HomePage(page)

        //Navigate to Home Page
        // await homePage.navigate()

        //Click Contact Link
        await homePage.clickContactLink()

        // Verify the navigation to the contact page
        // expect(page.url()).toContain('#/contact');
        expect(await homePage.getUrl()).toContain('#/contact');



    });

});

