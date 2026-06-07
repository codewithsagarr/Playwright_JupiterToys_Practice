import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/* Navigate to Home Page
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
    */

export class HomePage extends BasePage {

    //what is private, readonly, protected modifier
    constructor(page: Page) {
        super(page)
    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/')
    }

    async clickContactLink() {
        // await this.page.click('a[href="#/contact"]');
        await this.page.getByRole('link', { name: 'Contact' }).click()
    }




}