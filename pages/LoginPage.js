const { I } = inject();

module.exports = {

  // Set Locators
  loginForm: ".login-box",
  errorMessage: '[data-test="error"]',
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  submitButton: '[data-test="login-button"]',

  // Create page methods
  submitLogin(username, password) {
    I.fillField(this.username, username )
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  },

  loginErrorMessage() {
    I.seeElement(this.errorMessage)
  },
}
