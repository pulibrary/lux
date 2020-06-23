describe("Integration test with visual testing", function() {
  it("Loads the homepage", function() {
    // Load the page or perform any other interactions with the app.
    cy.visit("http://localhost:6060/#/Elements/Card")

    // Inject axe
    cy.injectAxe()
    cy.checkA11y({
      include: ["[class^='rsg--preview']"],
    })

    // Take a snapshot for visual diffing
    cy.percySnapshot("Element - Card", { widths: [375, 768, 1440] })
  })
})
