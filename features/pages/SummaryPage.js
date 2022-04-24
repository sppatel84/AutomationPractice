const chai = require('chai');
const expect = chai.expect;



module.exports = {

    navToSummaryPage: async (summary) => {
        await page.waitForLoadState('networkidle')
        const summaryPage = page.locator("#cart_title")
        expect(await summaryPage.textContent()).to.contains(summary)
    },

    validateProductDetails: async (productName, productColor, productSize) => {
        const details = page.locator("td.cart_description a")
        for (let i = 0; i < await details.count(); i++) {
            text = await details.nth(i).textContent()
            if (text === productName) {
                console.log("Displayed right product name")
            }
            else if (text.includes("Blue")) {
                displayValue = text.split(" ")
                actualColor = displayValue[2].split(",")
                console.log("Display color value : " + actualColor[0])
                expect(actualColor[0].toLowerCase()).to.equal(productColor)
                actualSize = displayValue[5]
                console.log("Display size value : " + actualSize)
                expect(actualSize).to.equal(productSize)
                break
            }
        }
    },

    validateCartTotal: async (total) => {
        const cartTotal = await page.locator('td[class="cart_total"] span').textContent()
        console.log("Cart Total before shipping charge : " + cartTotal.replace(/\s+/g, ''))
        expect(cartTotal.replace(/\s+/g, '')).to.equal(total)
    },

    validateCartShippingPrice: async (shippingPrice) => {
        const shipping = await page.locator("#total_shipping").textContent()
        console.log("Cart shipping charge : " + shipping)
        expect(shipping).to.equal(shippingPrice)
    },

    validateTaxPrice: async (taxPrice) => {
        const tax = await page.locator("#total_tax").textContent()
        console.log("Cart tax charge : " + tax)
        expect(tax).to.equal(taxPrice)
    },

    validateTotalPrice: async (total) => {
        const totalPrice = await page.locator("#total_price").textContent()
        console.log("Cart total value : " + totalPrice)
        expect(totalPrice).to.equal(total)
    },

    clickOnCheckout: async () => {
        await page.locator('p a[title="Proceed to checkout"]').click()
    },

    onAuthenticationPage: async (authPage) => {
        await page.waitForLoadState('networkidle')
        const auth = await page.locator('h1[class="page-heading"]').textContent()
        console.log("On Authentication Page : " + auth)
        expect(auth).to.equal(authPage)
    }

}