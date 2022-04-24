const { Given, When, Then } = require("@cucumber/cucumber");
const homePage = require('../pages/HomePage');
const productPage = require("../pages/ProductPage");
const summaryPage = require("../pages/SummaryPage")


Given('I am on home page', { timeout: 60 * 1000 }, async () => {
      await homePage.onHomePage()
});

When('I search for item as {string}', { timeout: 60 * 1000 }, async (productName) => {
      await homePage.searchBox(productName)
});


When('I click on search button', { timeout: 60 * 1000 }, async () => {
      await homePage.searchBtn()
});

Then('I navigate to product page and view the product title as {string}', { timeout: 60 * 1000 }, async (productName) => {
      await productPage.onProductPage(productName)
});

Then('I select the dress color as {string}', { timeout: 60 * 1000 }, async (color) => {
      await productPage.selectColor(color)
});

Then('I select the quantity as {string}', { timeout: 60 * 1000 }, async (quantity) => {
      await productPage.addQuantity(quantity)
});

Then('I select the size as {string}', { timeout: 60 * 1000 }, async (size) => {
      await productPage.selectSize(size)
});

Then('I click on add to cart button', { timeout: 60 * 1000 }, async () => {
      await productPage.addToCartBtn()
});

Then('I can see the total products value as {string} and shipping cost as {string}', { timeout: 60 * 1000 }, async (productValue, shippingValue) => {
      await productPage.totalProductAndShippingValue(productValue, shippingValue)
});

Then('I can see the total price as {string}', { timeout: 60 * 1000 }, async (total) => {
      await productPage.totalValue(total)
});

When('I click on Proceed to checkout button', { timeout: 60 * 1000 }, async () => {
      await productPage.proceedToCheckout()
});

Then('I navigate to {string} page', { timeout: 60 * 1000 }, async (summary) => {
      await summaryPage.navToSummaryPage(summary)
});

Then('I validate product name as {string}, color name as {string} and size as {string} in description', { timeout: 60 * 1000 }, async (prodcutName, color, size) => {
      await summaryPage.validateProductDetails(prodcutName, color, size)
});

Then('I validate the cart total as {string}', { timeout: 60 * 1000 }, async (total) => {
      await summaryPage.validateCartTotal(total)
});

Then('I validate the cart shipping price as {string}', { timeout: 60 * 1000 }, async (shippingPrice) => {
      await summaryPage.validateCartShippingPrice(shippingPrice)
});

Then('I validate the cart tax price as {string}', { timeout: 60 * 1000 }, async (taxPrice) => {
      await summaryPage.validateTaxPrice(taxPrice)
});

Then('I validate the total cart price as {string}', { timeout: 60 * 1000 }, async (totalPrice) => {
      await summaryPage.validateTotalPrice(totalPrice)
});

When('I click on Proceed to checkout button on summary page', { timeout: 60 * 1000 }, async () => {
      await summaryPage.clickOnCheckout()
});

Then('I navigate to {string} page for sign in or create an account', { timeout: 60 * 1000 }, async (authentication) => {
      await summaryPage.onAuthenticationPage(authentication)
});