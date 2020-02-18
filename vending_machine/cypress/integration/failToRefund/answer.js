context('Fail to refund', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-07 : Fail to refund', () => {
    cy.get('#refund_money_button').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Can not refund.')
  })

})