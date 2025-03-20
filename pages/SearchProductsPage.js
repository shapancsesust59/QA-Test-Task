const { expect } = require("@playwright/test");

exports.SearchProductsPage = class SearchProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = "input#search_product";
    this.searchButton = "button#submit_search";
    this.searchedProducts = "h2.title";
    this.productResults = "div.productinfo p";
  }

  async searchProduct(productName) {
    console.log(`Searching for product: ${productName}`);
    await this.page.locator(this.searchInput).fill(productName);
    await this.page.locator(this.searchButton).click();
    await expect(this.page.locator(this.searchedProducts)).toHaveText(
      "Searched Products"
    );

    // Verify at least one product is displayed
    const products = await this.page
      .locator(this.productResults)
      .allTextContents();
    expect(products.length).toBeGreaterThan(0);
    console.log(`Found ${products.length} product(s)`);
  }
};
