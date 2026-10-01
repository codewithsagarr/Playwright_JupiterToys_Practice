import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/* Submit Contact Page Class

export class ContactPage {

    constructor(private page: Page) {

    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/contact')
    }

    async fillContactForm(forname:string, surname:string, email:string, telephone:string, message:string) {

        await this.page.getByRole('textbox', { name: 'Forename' }).fill(forname);
        await this.page.getByRole('textbox', { name: 'Surname' }).fill(surname);
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Telephone' }).fill(telephone);
        await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
    }

    async submitForm(){
        await this.page.getByRole('link', { name: 'Submit' }).click();
    }


}
*/

// Extending Base class to Contact Page

export class ContactPage extends BasePage {

    constructor( page: Page) {
        super(page)
    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/contact')
    }

    async fillContactForm(forname:string, surname:string, email:string, telephone:string, message:string) {

        await this.page.getByRole('textbox', { name: 'Forename' }).fill(forname);
        await this.page.getByRole('textbox', { name: 'Surname' }).fill(surname);
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Telephone' }).fill(telephone);
        await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
    }

    async submitForm(){
        await this.page.getByRole('link', { name: 'Submit' }).click();
    }


}