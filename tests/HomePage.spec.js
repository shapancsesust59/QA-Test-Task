require("dotenv").config();
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { SearchProductsPage } from "../pages/SearchProductsPage";

// Group tests using describe blocks
test.describe.parallel("HomePage Tests", () => {
  test("Login, Navigate to Product Page, and Search for Products", async ({
    page,
  }) => {
    // Login and navigate to Product Page
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await page.waitForTimeout(5000); // Add appropriate wait time or use `waitForSelector`

    // Product Page
    const product_page = new ProductPage(page);
    await product_page.gotoProductsPage();
    await page.waitForTimeout(5000); // Add appropriate wait time

    // Search Products
    const search_page = new SearchProductsPage(page);
    await search_page.searchProduct("T-shirt");
    await page.waitForTimeout(5000); // Add appropriate wait time
  });
});
