const { Before, After } = require("@cucumber/cucumber");
const playwright = require('playwright');
const chai = require('chai');
const expect = chai.expect;
let browser

Before({ timeout: 60 * 1000 }, async () => {
    browser = await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto("http://automationpractice.com/index.php")
})

After({ timeout: 60 * 1000 }, async () => {
    browser.close()
})

module.exports = {
    onHomePage: async () => {
        console.log(await page.title())
        expect(await page.title()).equals("My Store")
    },

    searchBox: async (product) => {
        const search = page.locator("#search_query_top")
        await search.fill(product)
    },

    searchBtn: async () => {
        const button = page.locator('button[name="submit_search"]')
        await button.click()
    }
}