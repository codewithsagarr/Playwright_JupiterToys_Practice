import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CheckoutPage extends BasePage {

    //what is private, readonly, protected modifier
    constructor(page: Page) {
        super(page)
    }

    async fillDeliveryDetails(forename: string, surname: string, email: string, telephone: string, address: string) {

        await this.page.getByRole('textbox', { name: 'Forename' }).fill(forename)
        await this.page.getByRole('textbox', { name: 'Surname' }).fill(surname)
        await this.page.getByRole('textbox', { name: 'Email ' }).fill(email)
        await this.page.getByRole('textbox', { name: 'Telephone' }).fill(telephone)
        await this.page.getByRole('textbox', { name: 'Address' }).fill(address)
    }

    async selectCardType(cardType: 'Visa' | 'Mastercard') {
        await this.page.locator('#cardType').selectOption(cardType);
    }

    async enterCardNumber(cardNo:string){
        await this.page.getByRole('textbox', {name: 'Card Number'}).fill(cardNo)
    }

    async submit(){
        await this.page.getByRole('button', {name: 'Submit'}).click()
    }


}