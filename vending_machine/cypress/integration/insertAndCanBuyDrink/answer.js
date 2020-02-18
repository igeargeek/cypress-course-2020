context('Insert coin and can buy drink', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })


  it('VM-01 - User insert 10 baht and 5 baht coins and select Pepsi Max', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#five_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Max]').click()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.get('#push_item_button').click()
    cy.contains('Your get Pepsi Max')
    cy.get('.swal-button').click()
  })

})