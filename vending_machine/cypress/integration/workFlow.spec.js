context('Facebook post', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      url:'https://www.mocky.io/v2/5c77c5b330000051009d64c9',
      method: "GET"
    }).as('callAPI')
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('fb-02: post success', () => {
    //
  })

  it('vm-04: Not insert coin', () => {

    cy.wait('@callAPI')
    cy.get('#buy_button[0]').click({force: true})
    cy.get('.mat-snack-bar-containe').should('be.visible')
  })

  it('vm-05: Insert coin and refund', () => {
    //
  })

  it('vm-06: Fail to refund', () => {
    //
  })

})