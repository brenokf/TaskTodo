describe('template spec', () => {
  it('Do visit site', () => {
    cy.visit('http://localhost:5173/')
  })
  // it('Do submit with input Empty', () => {
  //   cy.visit('http://localhost:5173/')
  //   cy.findByRole('textbox').clear();
  //   cy.findByRole('button').click();
  // })
  it('Do Create New Task', () => {
    cy.visit('http://localhost:5173/')
    cy.findByRole('textbox').type('Criar um esboço de um novo logotipo para uma empresa fictícia de tecnologia.');
    cy.findByRole('button').click();
  })
})
