import { Page } from '@playwright/test';

/* getTitle()
export class BasePage {

//why is this protected?
  constructor(protected page: Page) {}

  async getTitle() {
    return this.page.title();
  }


}
  */


export class BasePage {

    //why is this protected?
    constructor(protected page: Page) { }

    async getTitle() {
        return this.page.title();
    }

    async getUrl() {
        return this.page.url();
    }




    async checkTextIsVisible(message: string) {
        return this.page.getByText(message).isVisible();
    }

    async login(username: string, password: string) {
        await this.page.getByRole('link', { name: 'Login' }).click()

        await this.page.getByRole('textbox', { name: 'Username' }).fill(username)

        await this.page.getByRole('textbox', { name: 'Password' }).fill(password)

        await this.page.getByRole('button', { name: 'Login' }).click()
    }

    async getUsername() {
        const usernameElement = await this.page.waitForSelector('.user');
        return usernameElement.textContent();
    }

    async getLoginButtonText() {
        const loginButtonElement = await this.page.getByRole('link', { name: 'Login' });
        return loginButtonElement.textContent();
    }

    async getErrorMessage() {
        const errorMessage = await this.page.waitForSelector('.alert-error');
        return errorMessage.textContent();
    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
        await this.page.locator('a').filter({ hasText: /^Logout$/ }).click();
    }

    async getSuccessMessage() {
        const successMessage = await this.page.waitForSelector('.alert-success');
        return successMessage.textContent();
    }






}
