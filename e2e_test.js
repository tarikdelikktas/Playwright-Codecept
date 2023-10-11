Feature("Swag Lab E2E Tests")

Scenario("Login Test - Negative", ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/')
    I.seeElement('#login_button_container')
    I.fillField('[data-test="username"]', 'invalid_username')
    I.fillField('[data-test="password"]', 'invalid_password')
    I.click('[data-test="login-button"]')
    I.seeElement('[data-test="error"]')

})