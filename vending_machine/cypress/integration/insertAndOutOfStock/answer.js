context('Insert coin and got cout of stock', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-04 - User insert 10 baht and 2 baht coins and select Pepsi Diet but cant select it because Pepsi Diet is out of stock', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#two_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Diet]').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Pepsi Diet is out of stock.')
  })

})