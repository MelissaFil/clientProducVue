describe('Cadastro de Produtos', () => {
  it('Deve cadastrar um produto com sucesso', () => {
    cy.visit('/produtos/cadastro') 
    cy.get('#Nome').type('Novo Produto')
    cy.get('form').submit()
    cy.contains('Produto cadastrado com sucesso!').should('exist')
  })


})
