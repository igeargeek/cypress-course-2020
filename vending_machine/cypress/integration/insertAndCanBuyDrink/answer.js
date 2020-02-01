context('Insert coin and can buy drink', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-01', () => {
    cy.get('#ten_coin_button').click()
  })

})