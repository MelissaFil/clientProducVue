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
    cy.get('#Documento').type('70002370409') 
    cy.get('#Telefone').type('5584986347019') 
    cy.get('#Email').type('novo@cliente.com') 
 
    cy.get('form').submit()

  
    cy.contains('Cliente cadastrado com sucesso!').should('exist')
  })

  it('Cadastra um cliente com cpf inexistente', () => {
    cy.visit('/clientes/cadastro') 

    
    cy.get('#Nome').type('Novo Cliente')
    cy.get('#Documento').type('12365668500') 
    cy.get('#Telefone').type('550012345678') 
    cy.get('#Email').type('novo@cliente.com') 
 
    cy.get('form').submit()

  
    cy.contains('Digite um CPF válido').should('exist')
  })

  it('Cadastra cliente com e-mail inválido', () => {
    cy.get('#Nome').type('Novo Cliente')
    cy.get('#Documento').type('70002370409') 
    cy.get('#Telefone').type('550012345678') 
    cy.get('#Email').type('emailinvalido') 
 
    cy.get('form').submit()
    cy.contains('Digite um e-mail válido').should('be.visible');
  });

  it('Cadastra cliente com telefone inválido', () => {

    cy.get('#Nome').type('Novo Cliente')
    cy.get('#Documento').type('70002370409') 
    cy.get('#Telefone').type('0000') 
    cy.get('#Email').type('novo@cliente.com') 
 
    cy.get('form').submit()
    cy.contains('Digite um telefone válido. Ex: 5584000000000').should('be.visible');
  });

})
