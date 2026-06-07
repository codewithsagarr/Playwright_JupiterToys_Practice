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




}
