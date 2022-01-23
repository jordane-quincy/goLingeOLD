describe("O'clock testing", () => {
  beforeEach(() => {
    const now = new Date(2022, 1, 3, 10, 0, 0, 0).getTime(); // 3rd of February 2022 at 10 o'clock
    cy.clock(now);
  });

  it("Today later", () => {
    cy.visit("./src/index.html");
    cy.get("#day").select("Today");
    cy.get("#end").type("23:00");
    cy.get("#duration").clear().type("60");

    cy.get("form").submit();

    cy.get("#output").should("contain", "12 h");
  });

  it("Tomorrow later", () => {
    cy.visit("./src/index.html");
    cy.get("#day").select("Tomorrow");
    cy.get("#end").type("11:00");
    cy.get("#duration").clear().type("60");

    cy.get("form").submit();
    cy.get("#output").should("contain", "24 h");
  });

  it("Tomorrow earlier", () => {
    cy.visit("./src/index.html");
    cy.get("#day").select("Tomorrow");
    cy.get("#end").type("08:00");
    cy.get("#duration").clear().type("60");

    cy.get("form").submit();

    cy.get("#output").should("contain", "21 h");
  });
});
