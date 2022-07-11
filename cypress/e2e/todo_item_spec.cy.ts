describe("Working with todo list items", () => {
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

  it("Test todo completion controls", () => {
    cy.contains("✅").eq(0).click();
    cy.contains("Go outside").should(
      "have.css",
      "text-decoration",
      "line-through solid rgb(0, 0, 0)"
    );
    cy.contains("❌").eq(0).click();
    cy.contains("Go outside").should(
      "have.css",
      "text-decoration",
      "none solid rgb(0, 0, 0)"
    );
  });

  it("Test todo deletion controls", () => {
    cy.get("li").eq(1).children().contains("🗑").click();
    cy.contains("Write some code").should("not.exist");
    cy.get("ul").children("li").should("have.length", 2);
  });
});
