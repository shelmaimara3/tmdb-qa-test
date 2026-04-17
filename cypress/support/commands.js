Cypress.Commands.add("acceptCookies", () => {
  cy.get("body").then(($body) => {
    if ($body.find("button:contains('Accept All Cookies')").length > 0) {
      cy.contains("Accept All Cookies").click();
    }
  });
});

Cypress.Commands.add("loginTMDB", () => {
  cy.visit("/login");

  cy.get('input[name="username"]').should("be.visible").clear().type(Cypress.env("username"));

  cy.get('input[name="password"]').should("be.visible").clear().type(Cypress.env("password"), { log: false });

  // tunggu button aktif
  cy.get('input[type="submit"]').should("not.be.disabled").click();

  cy.url().should("not.include", "/login");
});

Cypress.Commands.add("changeLanguage", (lang) => {
  // pastikan di homepage
  cy.url().should("eq", Cypress.config().baseUrl + "/");

  // klik language
  cy.get("li.translate").should("be.visible").first().click();

  // buka dropdown
  cy.get("#default_language_popup_label").should("be.visible").click();

  // tunggu popup muncul (IMPORTANT FIX)
  cy.get(".k-animation-container", { timeout: 10000 }).should("be.visible");

  // baru input
  cy.get('input[placeholder="Filter"]').should("be.visible").clear().type(lang);

  cy.contains("li", lang).should("be.visible").click();
});

Cypress.Commands.add("addFavoriteMovie", () => {
  cy.get(".card").first().click();

  cy.get("body").then(($body) => {
    if ($body.find(".favorite").length > 0) {
      cy.get(".favorite").first().click({ force: true });
    }
  });
});

Cypress.Commands.add("removeFavoriteMovie", () => {
  cy.get(".card").first().click();

  cy.get(".favorite").first().click({ force: true });
});
