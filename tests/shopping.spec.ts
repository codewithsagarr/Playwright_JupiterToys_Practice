import { test, expect } from './fixtures/fixtures';

test.describe('Shop Tests', () => {


    test('Add items to cart and complete checkout ', async ({ shopPage, cartPage, checkoutPage }) => {


        await shopPage.navigate()

        // retrieve the current URL
        const shopPageUrl = await shopPage.getUrl();

        // Verify the navigation to the contact page
        expect(shopPageUrl).toContain('#/shop');

        await shopPage.buyProduct('Smiley Face')

        await cartPage.navigate()

        // validate that selected product is available in the cart
        // await expect(
        //     cartPage.validateItemInTheCart('Smiley Face')
        // ).toBeVisible();
         expect(
            await cartPage.isItemInCart('Smiley Face')
        ).toBe(true);


        // retrieve the current URL
        const cartUrl = await cartPage.getUrl();

        // Verify the navigation to the contact page
        expect(cartUrl).toContain('#/cart');

        await cartPage.proceedToCheckout()

        await checkoutPage.fillDeliveryDetails("John", "Cena", "JC@gmail.com", "134", "101 Melb St")

        await checkoutPage.selectCardType('Visa');

        await checkoutPage.enterCardNumber('123')

        await checkoutPage.submit()

        // Verify success message
        const successMessage = await shopPage.getSuccessMessage();
        expect(successMessage).toContain(' your order has been accepted');

    });

});