Feature("Swag Lab E2E Tests")

Before(({ I }) => {
    I.amOnPage('https://www.saucedemo.com/')
})

After(({ I }) => {
    console.log("after hook")
})

Scenario("Login Test - Negative", ({ I, LoginPage }) => {
    LoginPage.submitLogin('invalid-username', 'invlaid-password')
    LoginPage.assertLoginFormIsVisible()
    LoginPage.loginErrorMessage()
})