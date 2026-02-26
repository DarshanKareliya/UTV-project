describe("Testing counter App", () => {
  const DELAY = 1500; // 1.5 seconds
  beforeEach(() => {
    cy.visit("/");
    cy.wait(DELAY);
  });

  describe("checking the Initial state", () => {
    it("should display counter componants", () => {
      cy.get('[testid="counter-component"]').should("be.visible");
      cy.wait(DELAY);
      cy.get('[testid="counter-value"]').should(
        "contain",
        "value of counter: 0",
      );
      cy.wait(DELAY);
    });
    it("should have input fields initialized to 0",()=>{
        cy.get('[testid="input_inc"]').should("have.value","0");
        cy.wait(DELAY)

        cy.get('[testid="input_dec"]').should("have.value","0");
        cy.wait(DELAY)
    });


    it("should not be visible logs initially",()=>{
        cy.get('[testid="logs"]').should("not.exist");
        cy.wait(DELAY)
    })
    
  });
});
