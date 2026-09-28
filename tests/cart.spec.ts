import { test, expect } from './fixtures/fixtures';

test.describe('Cart Tests', () => {


    test('Add items to cart and verify count ', async ({ shopPage, cartPage, checkoutPage }) => {


        await shopPage.navigate()

        // retrieve the current URL
        const shopPageUrl = await shopPage.getUrl();

        // Verify the navigation to the contact page
        expect(shopPageUrl).toContain('#/shop');

        await shopPage.buyProduct('Smiley Face')

        const CartCount = await shopPage.getCartItemCount()

        expect(CartCount).toBe(0)

    });

    test('Add Multiple items to the cart and verify count ', async ({ shopPage, cartPage, checkoutPage }) => {


        await shopPage.navigate()

        // retrieve the current URL
        const shopPageUrl = await shopPage.getUrl();

        // Verify the navigation to the contact page
        expect(shopPageUrl).toContain('#/shop');

        const productlist = ['Smiley Face', 'Smiley Bear']

        await shopPage.buyMultipleProduct(productlist)

        const CartCount = await shopPage.getCartItemCount()

        expect(CartCount).toBe(productlist.length)

    });

    test('Remove item from cart and verify cart count', async ({ shopPage, cartPage, checkoutPage }) => {


        await shopPage.navigate()

        // retrieve the current URL
        const shopPageUrl = await shopPage.getUrl();

        // Verify the navigation to the contact page
        expect(shopPageUrl).toContain('#/shop');

        await shopPage.buyProduct('Smiley Face')

        await cartPage.navigate()

        await cartPage.removeItemFromCart('Smiley Face')

        expect(
            await cartPage.isItemInCart('Smiley Face')
        ).toBe(false);

        const CartCount = await cartPage.getNumberofItemsInCart()

        expect(CartCount).toBe(0)


    });

    test('Verify total price in cart', async ({ shopPage, cartPage, checkoutPage }) => {


        await shopPage.navigate()

        // retrieve the current URL
        const shopPageUrl = await shopPage.getUrl();

        // Verify the navigation to the contact page
        expect(shopPageUrl).toContain('#/shop');

        await shopPage.buyProduct('Smiley Face')
        await shopPage.buyProduct('Funny Cow')

        await cartPage.navigate()

        await cartPage.verifyCartTotal()

    });

});