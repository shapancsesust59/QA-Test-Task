const { test, expect } = require("@playwright/test");

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.productsButton = 'a[href="/products"]';
    this.productList = "h2.title.text-center";
  }

  async gotoProductsPage() {
    console.log("Navigating to Products Page...");
    await this.page.locator(this.productsButton).click();
    await expect(this.page.locator(this.productList)).toHaveText(
      "All Products"
    );
  }
};
