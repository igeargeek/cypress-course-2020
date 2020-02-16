context('Insert coin and can buy drink', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })


  it('User insert 10 baht and 5 baht coins and select Pepsi Max', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#five_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Max]').click()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.get('#push_item_button').click()
    cy.contains('Your get Pepsi Max')
    cy.get('.swal-button').click()
  })

  it('User insert 10 baht, 5 baht, 2 baht and 1 baht coins and select Pepsi Max', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#five_coin_button').click()
    cy.get('#two_coin_button').click()
    cy.get('#one_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Max]').click()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.get('#push_item_button').click()
    cy.contains('Your get Pepsi Max')
    cy.get('.swal-button').click()
    cy.get('#change_money_button').click()
    cy.contains('Your change is 10฿x0, 5฿x0, 2฿x1 and 1฿x1')
    cy.get('.swal-button').click()
  })

  it.only('User insert 10 baht and 2 baht coins and select Pepsi Max but cant select it because user dont have enough money', () => {
    cy.get('#ten_coin_button').click()
    cy.get('#two_coin_button').click()
    cy.get('[data-cy=buy_button_Pepsi_Max]').click()
    cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Your money not enough to buy Pepsi Max.')
  })

})