context('Not insert coin', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-05 : Click Pepsi max without coins and should provide error message', () => {
    cy.get('#buy_button_Pepsi_Max').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Please insert coins!')
  })

})