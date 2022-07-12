import "cypress-localstorage-commands";

describe("Working with todo list items", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Get initial state of page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").should("be.disabled");
  });

  it("Write todo", () => {
    const activities = ["Go outside", "Write some code", "Test your apps"];
    activities.forEach((activity) => {
      cy.get("input").type(activity);
      cy.get("button").first().click("bottom");
    });

    cy.get("ul").children("li").should("have.length", 3);
  });

  it("Test saving to local storage", () => {
    cy.get("ul").children("li").should("have.length", 3);
    cy.visit("http://localhost:3000/");
    cy.reload(false);
    cy.get("ul").children("li").should("have.length", 3);
  });

  it("Test todo completion controls", () => {
    cy.get(".btn-group").first().children().eq(0).click();
    cy.contains("Go outside").should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(179, 197, 239)"
    );
    cy.get(".btn-group")
      .first()
      .children()
      .eq(0)
      .children()
      .should("have.attr", "data-icon", "xmark");
    cy.get(".btn-group").first().children().eq(0).click();
    cy.contains("Go outside").should(
      "have.css",
      "text-decoration",
      "none solid rgb(179, 197, 239)"
    );
    cy.get(".btn-group")
      .first()
      .children()
      .eq(0)
      .children()
      .should("have.attr", "data-icon", "check");
  });

  it("Test todo deletion controls", () => {
    cy.get(".btn-group").eq(1).children().eq(1).click();
    cy.contains("Write some code").should("not.exist");
    cy.get("ul").children("li").should("have.length", 2);
  });
});
