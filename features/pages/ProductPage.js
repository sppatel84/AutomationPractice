const chai = require('chai');
const expect = chai.expect;
let productValue
let shippingValue
let totalPrice
let totalVal

module.exports = {
    onProductPage: async (headerText) => {
        const productPage = page.locator(".lighter")
        console.log(await productPage.textContent())
        expect(await productPage.textContent()).to.contains(headerText)
    },

    selectColor: async (colorSelection) => {
        const color = page.locator("//a[contains(@href, " + "'" + colorSelection + "'" + ")]")
        await color.click()
    },

    addQuantity: async (quantity) => {
        const number = page.locator("#quantity_wanted")
        await number.fill(quantity)
    },

    selectSize: async (size) => {
        const sizeName = page.locator("select.form-control")
        await sizeName.selectOption(size)
    },

    addToCartBtn: async () => {
        const cartButton = page.locator("#add_to_cart")
        await cartButton.click()
        await page.waitForLoadState('networkidle')
    },

    totalProductAndShippingValue: async (productTotal, shippingTotal) => {
        // get the product value and convert into float value
        let productVal = page.locator(".ajax_block_products_total")
        let valueOfProduct = await productVal.textContent()
        expect(valueOfProduct).to.equal(productTotal)
        let remove$FromProductValue = valueOfProduct.replace("$", "")
        productValue = parseFloat(remove$FromProductValue)
        console.log("Total of Products : " + productValue)


        // get the shipping value and convert into float value
        let shippingVal = await page.locator('span[class="ajax_cart_shipping_cost"]').textContent()
        expect(await shippingVal).to.equal(shippingTotal)
        let remove$FromValue = shippingVal.replace("$", "")
        shippingValue = parseFloat(remove$FromValue)
        console.log("Total of Shipping value : " + shippingValue)
        totalVal = productValue + shippingValue
        console.log("Sum of the product value and shipping value : " + totalVal)
        return productValue, shippingValue
    },

    totalValue: async (value) => {
        let total = await page.locator("span[class='ajax_block_cart_total']").textContent()
        expect(await total).to.equal(value)
        let remove$FromValue = total.replace("$", "")
        totalPrice = parseFloat(remove$FromValue)
        console.log("Total Product Value : " + totalPrice)
        expect(totalPrice).to.equal(totalVal)
        return totalPrice
    },

    proceedToCheckout: async () => {
        const checkoutBtn = page.locator('a[title="Proceed to checkout"]')
        await checkoutBtn.click()

    },

}