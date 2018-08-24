describe("OrderManager", function() {
  beforeEach(() => {
    cy.visit("Patterns?id=ordermanager")
  })

  it("selects card", () => {
    // click on a card
    cy
      .get(".orderManager .galleryCard")
      .first()
      .click()
      .should("have.class", "card-selected")
  })
})
