import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CartPage extends BasePage {

    //what is private, readonly, protected modifier
    constructor(page: Page) {
        super(page)
    }

    async navigate() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/cart')
    }

    async proceedToCheckout() {
        await this.page.getByRole('link', { name: 'Check Out' }).click()
    }

    // 
    async isItemInCart(itemName: string): Promise<boolean> {
        const item = this.page
            .locator('tr.cart-item')
            .filter({ hasText: itemName });

        return (await item.count()) > 0;
    }

    async removeItemFromCart(itemName: string) {
        const cartRow = this.page
            .locator('tr.cart-item')
            .filter({ hasText: itemName });

        await cartRow
            .locator('.remove-item')
            .click();

        await this.page.getByRole('link', { name: 'Yes' }).click();
    }

    async getNumberofItemsInCart() {


        const cartItemCount = await this.page.textContent('.cart-count');
        return parseInt(cartItemCount || '0', 10);


    }

    async getTotalPrice() {
        const text = await this.page.locator('.total ').innerText()
        return parseFloat(text.replace('Total: ', ''));
    }

    async calculateTotalPrice() {

        const rows = this.page.locator('tbody > tr');

        let total = 0;

        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);

            // Price is in 2nd td
            const priceText = await row.locator('td').nth(1).innerText();
            const price = Number(priceText.replace('$', ''));

            // Quantity is in input
            const quantityText = await row.locator('input[name="quantity"]').inputValue();
            const quantity = Number(quantityText);

            total += price * quantity;
        }

        return Number(total);


    }

    async verifyCartTotal() {
        const uiTotal = await this.getTotalPrice();
        const calculatedTotal = await this.calculateTotalPrice();

        expect(calculatedTotal).toBe(uiTotal);
    }


}