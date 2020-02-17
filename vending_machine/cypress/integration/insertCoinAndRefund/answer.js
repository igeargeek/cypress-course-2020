context('Insert with correct and incorrect', () => {
  beforeEach(() => {
    cy.visit('https://vending-machine.zerojame.me/')
  })

  it('VM-05 : Insert coin and should refund with correct amount', () => {
    let tenCoinTotal = 0
    let fiveCoinTotal = 0 
    let twoCoinTotal = 0 
    let oneCoinTotal = 0
    cy.get('#change_money_button').should('be.disabled')
    cy.get("#ten_coin_button").click()
    tenCoinTotal += 1
    cy.get('#five_coin_button').click()
    fiveCoinTotal += 1
    cy.get('#refund_money_button').click()
    cy.get('#change_money_button').should('not.be.disabled').click()
    cy.get('.swal-modal').should('be.visible')
    cy.get('.swal-modal .swal-text').contains(`Your change is 10฿x${tenCoinTotal}, 5฿x${fiveCoinTotal}, 2฿x${twoCoinTotal} and 1฿x${oneCoinTotal}`)
  })


  it('VM-05 : Insert coin and should refund with incorrect amount', () => {
    let tenCoinTotal = 0
    let fiveCoinTotal = 0 
    let twoCoinTotal = 0 
    let oneCoinTotal = 0
    cy.get('#change_money_button').should('be.disabled')
    cy.get("#one_coin_button").click()
    tenCoinTotal += 1
    cy.get('#two_coin_button').click()
    fiveCoinTotal += 1
    cy.get('#refund_money_button').click()
    cy.get('#change_money_button').should('not.be.disabled').click()
    cy.get('.swal-modal').should('be.visible')
    cy.get('.swal-modal .swal-text').contains(`Your change is 10฿x${tenCoinTotal}, 5฿x${fiveCoinTotal}, 2฿x${twoCoinTotal} and 1฿x${oneCoinTotal}`)
  })

})