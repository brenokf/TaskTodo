describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
})

describe('Do have test a input ', () => {
  it('Imput Empty', () => {
      cy.get('form').should('have.value').contains('empty')
  }),
})