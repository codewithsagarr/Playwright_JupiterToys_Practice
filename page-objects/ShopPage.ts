import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ShopPage extends BasePage {

    //what is private, readonly, protected modifier
    constructor(page: Page) {
        super(page)
    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/shop')
    }

    async buyProduct(productName: string) {
        await this.page
            .locator('li.product')
            .filter({ hasText: productName })
            .getByRole('link', { name: 'Buy' })
            .click();
    }

    async getCartItemCount() {
        const cartItemCount = await this.page.textContent('.cart-count');
        return parseInt(cartItemCount || '0', 10);
    }

    async buyMultipleProduct(productNames: string[]) {

        for (const product of productNames) {
            await this.page
                .locator('li.product')
                .filter({ hasText: product })
                .getByRole('link', { name: 'Buy' })
                .click();

        }


    }



}