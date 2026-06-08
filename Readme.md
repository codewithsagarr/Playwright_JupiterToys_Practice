Getting Started

Install Node
https://nodejs.org/en/download

Verify the Node.js version: (Runtime Env for Running JS)
node -v # Should print "v24.16.0"

 Verify npm version: (Package manager to install dependency)
npm -v # Should print "11.13.0".

Install playwright using 
 npm init playwright@latest

 Ways of running test
 1. Runs all test : npx playwright test 
 2. Runs test in UI mode : innpx playwright test 2.4.contact.spec.ts --ui
 3. Runs specific test npx playwright test tests/2.4.contact.spec.ts -g "2.4 Contact Form Submission"
 4. Run test from Test Explorer

 Using Codegen
 Launch site with codegen: npx playwright codegen https://jupiter.cloud.planittesting.com/#/contact


Test Cases
2.1 Navigate To HomePage
 Navigate to a website  and verify the title of the page
https://jupiter.cloud.planittesting.com/#/
Username: cameron
Pwd: letmein

2.3 Submit Contact Form
1. Navigate to https://jupiter.cloud.planittesting.com/#/contact
2. Fill the form and submit

2.4 Submit Contact Form with POM
1. Navigate to https://jupiter.cloud.planittesting.com/#/contact
2. Fill the form and submit

2.5 Navigate to Home Page with POM & Navigate to Contact Page from Home Page
1. Navigate to https://jupiter.cloud.planittesting.com/#/
2. Click contact link

2.6 Implement BaseClass for getTitle() method

2.7 Submit Contact Form With Empty field and perform error validation for mandatory field and refactor getUrl()

3.1 Use Env Variable to run in headless mode
npm install dotenv

3.2, 3.3 Create Env varible for BROWSER=firefox and use that to run test
and run test on specific browser by readinbg from env variable

3.4 Executing test on various device




