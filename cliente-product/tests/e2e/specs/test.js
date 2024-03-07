describe('Cadastro de Produtos', () => {
  it('Cadastra um produto com sucesso', () => {
    cy.visit('/produtos/cadastro') 
    cy.get('#Nome').type('Novo Produto')
    cy.get('form').submit()
    cy.contains('Produto cadastrado com sucesso!').should('exist')
  })

  it('Cadastra um cliente com sucesso', () => {
    cy.visit('/clientes/cadastro') 

    
    cy.get('#Nome').type('Novo Cliente')
    cy.get('#Documento').type('937.377.120-50') 
    cy.get('#Telefone').type('(00) 1234-5678') 
    cy.get('#Email').type('novo@cliente.com') 
 
    cy.get('form').submit()

  
    cy.contains('Cliente cadastrado com sucesso!').should('exist')
  })

    it('Cadastra um cliente com cpf inexistente', () => {
    cy.visit('/clientes/cadastro') 

    
    cy.get('#Nome').type('Novo Cliente')
    cy.get('#Documento').type('12365668500') 
    cy.get('#Telefone').type('(00) 1234-5678') 
    cy.get('#Email').type('novo@cliente.com') 
 
    cy.get('form').submit()

  
    cy.contains('Digite um CPF válido').should('exist')
  })


})
