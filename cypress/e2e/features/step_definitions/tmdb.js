import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User membuka website TMDB", () => {
  cy.visit("/");
  cy.acceptCookies();
});

Given("User login ke TMDB", () => {
  cy.loginTMDB();
});

// ===== LANGUAGE =====
When("Click Language Button", () => {
  cy.get("li.translate").first().click();
});

When("User mengganti bahasa ke Indonesian", () => {
  cy.changeLanguage("Indonesian");
});

When("User mengganti bahasa ke English", () => {
  cy.changeLanguage("English");
});

Then("Bahasa berubah ke Indonesian", () => {
  cy.contains("Film", { timeout: 10000 }).should("be.visible");
});

Then("Bahasa berubah ke English", () => {
  cy.contains("Movies", { timeout: 10000 }).should("be.visible");
});

// ===== FAVORITE =====
When("User memilih movie dan menandai sebagai favorite", () => {
  cy.addFavoriteMovie();
});

Then("Movie berhasil ditambahkan ke favorite list", () => {
  cy.visit(Cypress.env("favoriteUrl"));
  cy.contains("Favorite").should("exist");
});

// ===== VIEW FAVORITE =====
When("User membuka halaman favorite", () => {
  cy.visit(Cypress.env("favoriteUrl"));
});

Then("Daftar favorite movie tampil", () => {
  cy.contains("Favorite").should("be.visible");
});

// ===== SORTING =====
When("User memilih sorting berdasarkan Popularity", () => {
  cy.get("select").first().select("Popularity");
});

Then("Daftar movie tersorting", () => {
  cy.get("body").should("be.visible");
});

// ===== REMOVE FAVORITE =====
When("User menghapus movie dari favorite", () => {
  cy.removeFavoriteMovie();
});

Then("Movie berhasil dihapus dari favorite", () => {
  cy.contains("Remove from favorites").should("not.exist");
});
