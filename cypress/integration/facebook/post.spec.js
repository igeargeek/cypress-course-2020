context('Facebook post', () => {
  beforeEach(() => {
    cy.visit('https://facebook.com')
  })

  it('fb-1: post success', () => {
    cy.get('[data-testid=royal_email]').type('your email or phone number')
    cy.get('[data-testid=royal_pass]').type('your password')
    cy.get('[data-testid=royal_login_button]').click({
      force: true
    })
    cy.url().should('eq', 'https://www.facebook.com/')
    cy.get('textarea').type('Hello from cypress')
    cy.get('[data-testid=react-composer-post-button]').click()
    cy.get('[data-testid="post_message"] > div > p').contains('Hello from cypress')

  })

})