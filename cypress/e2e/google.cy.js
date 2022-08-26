describe('Visit google and verify that searches come back, when searching dogs', () => {
  it('Visits google and accepts the cookie statement', () => {
    cy.visit('https://www.google.com/')
    cy.title().should('eq', 'Google')
    cy.get('button').contains('Accept all').click()
  })

  it('Searches for dogs and verifies the results', () => {
    cy.get('input[title="Search"]').type('dogs{enter}')
    cy.title().should('eq', 'dogs - Google Search')
    cy.get('h3').contains('Dog - Wikipedia').should('be.visible')
  })
})