# Playwright Automation Project

Playwright automation project using **TypeScript** and **Node.js**, covering UI automation, Page Object Model (POM), fixtures, environment variables, parallel execution, debugging, code generation, and assertions.

## Prerequisites

### 1. Install Node.js

Download and install Node.js:

[Node.js Download](https://nodejs.org/en/download?utm_source=chatgpt.com)

Verify the Node.js version:

```bash
node -v
```

Expected:

```text
v24.16.0
```

Verify npm:

```bash
npm -v
```

Expected:

```text
11.13.0
```

* **Node.js** – Runtime environment for running JavaScript/TypeScript.
* **npm** – Package manager used to install project dependencies.

---

## Install Playwright

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

For environment variable support:

```bash
npm install dotenv
```

---

## TypeScript Configuration

The project uses the following `tsconfig.json`:

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

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a test in UI mode

```bash
npx playwright test tests/2.4.contact.spec.ts --ui
```

### Run a specific test by name

```bash
npx playwright test tests/2.4.contact.spec.ts -g "2.4 Contact Form Submission"
```

### Run tests using Test Explorer

Tests can also be executed and debugged directly from the IDE's **Test Explorer**.

---

## Debugging

Launch Playwright UI mode:

```bash
npx playwright test --ui
```

You can also pause execution at a specific point:

```typescript
await page.pause();
```

This opens the Playwright Inspector and allows the test execution to be inspected interactively.

---

## Playwright Codegen

Playwright Codegen can be used to generate locators and test actions interactively.

```bash
npx playwright codegen https://jupiter.cloud.planittesting.com/#/contact
```

---

## Test Application

The project uses the Jupiter Toys application.

### Home Page

```text
https://jupiter.cloud.planittesting.com/#/
```

### Contact Page

```text
https://jupiter.cloud.planittesting.com/#/contact
```

### Test Credentials

```text
Username: cameron
Password: letmein
```

> Test credentials are provided for the training application and should not be used for production systems.

---

## Project Test Coverage

The project progressively covers:

* Basic page navigation
* Page title validation
* Contact form submission
* Page Object Model (POM)
* Base classes
* Mandatory-field validation
* URL handling
* Environment variables
* Headless execution
* Browser selection using environment variables
* Multi-device execution
* Parallel execution
* Workers
* Browser input validation
* Login scenarios
* Assertions
* `test.describe`
* `beforeEach`
* Fixtures

See [`notes.md`](notes.md) for detailed learning notes and explanations.

---

## Useful Commands

| Purpose            | Command                                       |
| ------------------ | --------------------------------------------- |
| Run all tests      | `npx playwright test`                         |
| Run UI mode        | `npx playwright test --ui`                    |
| Run specific test  | `npx playwright test <file> -g "<test name>"` |
| Open Codegen       | `npx playwright codegen <URL>`                |
| Check Node version | `node -v`                                     |
| Check npm version  | `npm -v`                                      |

---

## Project Structure

A typical project structure:

```text
project/
│
├── tests/
│   ├── 2.1.homepage.spec.ts
│   ├── 2.3.contact.spec.ts
│   ├── 2.4.contact.spec.ts
│   └── ...
│
├── pages/
│   └── ...
│
├── fixtures/
│   └── ...
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── notes.md
```
