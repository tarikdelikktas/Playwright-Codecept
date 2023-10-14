const chai = require("chai")
const { chromium } = require("playwright")
var expect = chai.expect

let browser
let page

before(async () => {
    browser = await chromium.launch()
})

after(async () => {
    await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it("TC1 Playwright Mocha test", async () => {
    await page.goto("https://www.saucedemo.com/")
    expect('.login_logo').to.exist
})  