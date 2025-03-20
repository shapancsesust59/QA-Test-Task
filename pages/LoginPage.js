const { test, expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = 'a[href="/login"]';
    this.usernameInput = 'input[data-qa="login-email"]';
    this.passwordInput = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';
  }

  async gotoLoginPage() {
    await this.page.goto("https://automationexercise.com/");
    console.log("Navigating to login page...");
  }

  async login(username, password) {
    console.log(`Logging in with username: ${username}`);
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async cleanup() {
    console.log("Cleaning up after test...");
    await this.page.evaluate(() => localStorage.clear()); // Clear local storage after login
  }
};
