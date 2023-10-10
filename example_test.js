Feature('example');

Scenario('Should load sauce demo app',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/')
    I.see("Swag Labs")
    I.dontSee("Sign Up")
    I.seeElement('.login_logo')
    I.dontSeeElement('#dont-exist-element')
})
