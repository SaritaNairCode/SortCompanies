describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1111");
  });

  it("Verify if respective company name is displayed on entering 1st 3 alphabets as the input", function () {
    // default
    cy.get("input").type("Ama");
    cy.get("#myTable").contains("Amazon").should("exist");
  });

  it("should allow case insensitive search", function () {
    cy.get("input").type("nasa");
    cy.get("#myTable").contains("NASA").should("exist");
  });

  it("Verify if respective company name is displayed on entering white space before 1st 2 alphabets as the input", function () {
    // default
    cy.get("input").type(" ve");
    cy.get("#myTable").contains("Verizon").should("exist");
  });

  it("Verify if respective company name is displayed on entering white space after 1st 2 alphabets as the input", function () {
    // default
    cy.get("input").type("ve ");
    cy.get("#myTable").contains("Verizon").should("exist");
  });

  it("Verify if no company name is displayed on entering 3 random numbers as the input", function () {
    // default
    cy.get("input").type("123");
    cy.get("#myTable").contains("123").should("not.exist");
  });

  it("Verify if no company name is displayed on entering special characters as the input", function () {
    // default
    cy.get("input").type("F@");
    cy.get("#myTable").contains("123").should("not.exist");
  });
});
