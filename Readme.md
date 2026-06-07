Getting Started

Install playwright using 
 npm init playwright@latest

Using codegen to identify locator
 npx playwright codegen
 npx playwright codegen https://jupiter.cloud.planittesting.com/#/contact

 Comment the additional browsers while debugging

 npx playwright test 2.4 

 npx playwright test 2.4 --ui

 Running specific test 
 npx playwright test tests/2.4.contact.spec.ts -g "2.4 Contact Form Submission"

 