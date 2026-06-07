import { Page } from "@playwright/test";

export class HomePage {

    constructor(private page: Page) {

    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/')
    }

    async clickContactLink() {
        // await this.page.click('a[href="#/contact"]');
        await this.page.getByRole('link', { name: 'Contact' }).click()
    }




}