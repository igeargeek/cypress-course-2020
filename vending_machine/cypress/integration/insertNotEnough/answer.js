context('Insert not enough coin and select drink', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-03 - User insert 10 baht and 2 baht coins and select Pepsi Max but cant select it because user dont have enough money', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#two_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Max]').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Your money not enough to buy Pepsi Max.')
  })

})