import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    actionTimeout: 0, //0 means no limit. It will wait until the action is performed. By default, it is 30 seconds. If the action is not performed within that time, it will throw a timeout error. We can change this default timeout by setting the actionTimeout option in the use object.
    navigationTimeout: 0, //0 means no limit. It will wait until the navigation is performed. By default, it is 30 seconds. If the navigation is not performed within that time, it will throw a timeout error. We can change this default timeout by setting the navigationTimeout option in the use object.

    headless: false,
    // Slowdown playwright during demo or debugging, it will wait for 1 second after each action
    launchOptions: {
      slowMo: 1000
    }
    // screenshot: 'only-on-failure', //Capture screenshot only when the test fails. By default, it is off. We can change this default behavior by setting the screenshot option in the use object. We can set it to on, off, only-on-failure, on-first-retry.
    // video: 'retain-on-failure', //Record video only when the test fails. By default, it is off. We can change this default behavior by setting the video option in the use object. We can set it to on, off, retain-on-failure, on-first-retry.
    // video: {
    //   mode: 'retain-on-failure', //Record video only when the test fails. By default, it is off. We can change this default behavior by setting the video option in the use object. We can set it to on, off, retain-on-failure, on-first-retry.
    //   size: {width:1920, height: 1080} //Video resolution = browser viewport size. By default, the viewport size is {width: 1280, height: 720} which is HD resolution. We can change this default resolution by setting the size option in the video object. We can set it to {width: 1920, height: 1080} for Full HD resolution.
    // }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
