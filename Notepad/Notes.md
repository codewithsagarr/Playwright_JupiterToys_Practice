# Playwright Learning Notes

## 1. Getting Started

### Node.js

Node.js is the runtime environment used to execute JavaScript and TypeScript.

```bash
node -v
```

Expected version:

```text
v24.16.0
```

### npm

npm is the package manager used to install project dependencies.

```bash
npm -v
```

Expected version:

```text
11.13.0
```

---

# 2. Playwright Installation

Create a Playwright project:

```bash
npm init playwright@latest
```

Install Node.js type definitions:

```bash
npm install --save-dev @types/node
```

Install TypeScript and ts-node:

```bash
npm install typescript ts-node @types/node --save-dev
```

---

# 3. TypeScript Configuration

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "types": [
      "node"
    ],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

# 4. Ways of Running Tests

### 4.1 Run all tests

```bash
npx playwright test
```

### 4.2 Run a test in UI mode

```bash
npx playwright test tests/2.4.contact.spec.ts --ui
```

### 4.3 Run a specific test

```bash
npx playwright test tests/2.4.contact.spec.ts -g "2.4 Contact Form Submission"
```

### 4.4 Run from Test Explorer

Tests can also be executed from the IDE's Test Explorer.

---

# 5. Debugging Tests

### UI Mode

```bash
npx playwright test --ui
```

### Pause execution

Add:

```typescript
await page.pause();
```

This pauses the test and opens the Playwright Inspector.

---

# 6. Using npm Scripts / Aliases

When Playwright is installed as a project dependency, npm scripts can execute locally installed packages from `node_modules`.

For example, instead of repeatedly typing the full command, a script can be defined in `package.json`:

```json
{
  "scripts": {
    "test": "playwright test"
  }
}
```

Then run:

```bash
npm test
```

The project dependency is resolved from `node_modules`.

---

# 7. Playwright Codegen

Codegen can be used to interact with a website and generate Playwright actions and locators.

```bash
npx playwright codegen https://jupiter.cloud.planittesting.com/#/contact
```

Useful for:

- Exploring a website
- Finding locators
- Generating initial automation code
- Understanding Playwright syntax

Generated code should still be reviewed and refactored before being added to the framework.

---

# 8. Test Application

Jupiter Toys:

```text
https://jupiter.cloud.planittesting.com/#/
```

Credentials:

```text
Username: cameron
Password: letmein
```

---

# 9. Test Cases

## 9.1 Navigate to Home Page

### Objective

Navigate to the website and verify the page title.

URL:

```text
https://jupiter.cloud.planittesting.com/#/
```

---

## 9.2 Submit Contact Form

Navigate to:

```text
https://jupiter.cloud.planittesting.com/#/contact
```

Fill in the contact form and submit it.

---

## 9.3 Submit Contact Form with POM

Navigate to:

```text
https://jupiter.cloud.planittesting.com/#/contact
```

Fill in and submit the form using the **Page Object Model**.

---

## 9.4 Navigate to Home Page with POM and Navigate to Contact Page

1. Navigate to the home page.
2. Use the POM implementation.
3. Click the Contact link.
4. Verify that the Contact page is displayed.

---

## 9.5 Base Class

Implement a base class containing common functionality such as:

```typescript
getTitle()
```

The objective is to avoid duplicating common methods across page classes.

---

## 9.6 Empty Contact Form Validation

Submit the Contact form with mandatory fields empty.

Validate the error messages for required fields.

Also refactor URL handling so that URL-related functionality is reusable.

---

# 10. Environment Variables

## 10.1 Install dotenv

```bash
npm install dotenv
```

Environment variables can be used to externalise configuration such as:

- Browser
- Headless/headed execution
- Environment
- URLs
- Credentials

Example:

```text
BROWSER=firefox
```

---

## 10.2 Browser Selection Using Environment Variable

The browser can be selected dynamically using an environment variable.

Example:

```text
BROWSER=firefox
```

The Playwright configuration can read the value and launch the corresponding browser.

This allows the same test suite to be executed against different browsers without modifying the test code.

Example:

```bash
BROWSER=firefox npx playwright test
```

---

# 11. Running Tests on Different Devices

Playwright supports testing against different device profiles.

Examples include:

- Desktop Chrome
- Desktop Firefox
- Mobile Chrome
- Mobile Safari
- iPhone
- Android devices

Device configuration can be defined in `playwright.config.ts`.

---

# 12. Fully Parallel and Workers

Consider the following test files.

### File A

```typescript
test('TC1')
test('TC2')
test('TC3')
```

### File B

```typescript
test('TC4')
```

Number of workers:

```text
workers: 2
```

## Scenario 1: `fullyParallel: false`

Test files can run in parallel.

However, tests within the same file run sequentially.

Example:

| Worker 1 | Worker 2 |
|---|---|
| File A - TC1 | File B - TC4 |
| File A - TC2 | Idle |
| File A - TC3 | Idle |

The tests inside File A maintain their sequence.

---

## Scenario 2: `fullyParallel: true`

Individual tests become schedulable units.

The execution order is **not guaranteed**.

Playwright can distribute individual tests across available workers.

For example:

| Worker 1 | Worker 2 |
|---|---|
| File A - TC1 | File A - TC2 |
| File B - TC4 | File A - TC3 |

The actual distribution depends on Playwright's scheduling.

### Key takeaway

```text
fullyParallel: false
→ Parallelism primarily at file level.

fullyParallel: true
→ Individual tests can be distributed across workers.
```

---

# 13. Browser Input Validation

Implement validation for an invalid browser value supplied through the environment variable.

For example:

```text
BROWSER=abc
```

The framework should fail with a clear and meaningful error rather than attempting to launch an unsupported browser.

---

# 14. Login Test Cases

The login functionality should cover the following scenarios:

### Valid Login

Verify that a user can successfully log in using valid credentials.

### Invalid Login

Verify the behaviour when incorrect credentials are supplied.

### Empty Field Validation

Verify mandatory-field validation when the login form is submitted without required values.

### Logout

Verify that the user can successfully log out from Jupiter Toys.

---

# 15. Playwright Assertions

Use Playwright-specific assertions whenever possible.

| Scenario | Preferred Assertion |
|---|---|
| Element visible | `await expect(locator).toBeVisible()` |
| Element hidden | `await expect(locator).toBeHidden()` |
| Text validation | `await expect(locator).toContainText()` |
| Input value | `await expect(locator).toHaveValue()` |
| Attribute | `await expect(locator).toHaveAttribute()` |
| API JSON, arrays, objects, calculations | Generic `expect()` |

Example:

```typescript
await expect(page.getByRole('button')).toBeVisible();
```

The Playwright `expect()` API provides auto-waiting and retry behaviour for many web assertions.

---

# 16. `test.describe` and `beforeEach`

Use `test.describe()` to group related tests.

Use `beforeEach()` when common setup needs to be executed before every test.

Example:

```typescript
test.describe('Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
    });

    test('Valid Login', async ({ page }) => {
        // Test
    });

    test('Invalid Login', async ({ page }) => {
        // Test
    });

});
```

Benefits:

- Reduces duplicate code
- Improves test organisation
- Makes related scenarios easier to maintain
- Centralises repeated setup

---

# 17. Fixtures

Improve the framework by using Playwright fixtures.

Fixtures can provide reusable setup and dependencies to tests.

Instead of repeatedly creating the same objects or performing the same setup, fixtures can provide them directly to the test.

Example concept:

```typescript
test('Submit Contact Form', async ({ contactPage }) => {
    await contactPage.navigate();
    await contactPage.submitForm();
});
```

This can make the test more readable and keep framework-specific setup outside the test itself.

---

# 18. Learning Progression

The automation framework is being developed progressively:

```text
Basic Playwright
      ↓
Navigation & Assertions
      ↓
Contact Form Automation
      ↓
Page Object Model
      ↓
Base Classes
      ↓
Validation
      ↓
Environment Variables
      ↓
Multiple Browsers
      ↓
Multiple Devices
      ↓
Parallel Execution
      ↓
Login Scenarios
      ↓
test.describe / beforeEach
      ↓
Fixtures
```

The objective is to move from basic Playwright test creation towards a maintainable and reusable automation framework.