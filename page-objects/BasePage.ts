import { Page } from '@playwright/test';

export class BasePage {

//why is this protected?
  constructor(protected page: Page) {}

  async getTitle() {
    return this.page.title();
  }
}
