/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  // Acessar página:
  beforeEach(function(){
    cy.visit('./src/index.html');
  })
  
  // CT 1:
  it('Verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  })

  // CT 2:
  it('Verifica os campos obrigatórios e envia o formulário', function() {
    // Insere nome:
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('Rafael')
      .should('have.value', 'Rafael');

    // Insere Sobrenome:
    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Mendes')
      .should('have.value', 'Mendes');

    // Insere e-mail:
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('rmendes@teste.com')
      .should('have.value', 'rmendes@teste.com');

    // Insere Texto:
    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')
      .should('have.value', 'Teste');

    // Clica em enviar:
    cy.get('button[type="submit"]').click();

    // Verifica se foi enviado:
    cy.get('.success').should('be.visible');
    
    // Tira print:
    cy.screenshot();
  });

  // CT 3:
  it('Verifica a validação de telefone', function() {
    // Tenta inserir letras no campo número:
    cy.get('#phone')
      .should('be.visible')
      .type('Teste')
      .should('have.value', '');

    // Tira print:
    cy.screenshot();
  });

  // CT 4:
  it('Verifica a validação de e-mail', function() {
    // Insere nome:
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('Rafael')
      .should('have.value', 'Rafael');

    // Insere Sobrenome:
    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Mendes')
      .should('have.value', 'Mendes');

    // Insere e-mail:
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('rmendes')
      .should('have.value', 'rmendes');

    // Insere Texto:
    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')
      .should('have.value', 'Teste');

    // Clica em enviar:
    cy.get('button[type="submit"]').click();

    // Verifica se foi enviado:
    cy.get('.error').should('be.visible');

    // Tira print:
    cy.screenshot();
  });

  // CT 5:
  it('Verifica o preenchimento com o telefone como obrigatório', function() {
    // Insere nome:
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('Rafael')
      .should('have.value', 'Rafael');

    // Insere Sobrenome:
    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Mendes')
      .should('have.value', 'Mendes');

    // Insere e-mail:
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('rmendes@teste.com')
      .should('have.value', 'rmendes@teste.com');

    // Insere Texto:
    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')
      .should('have.value', 'Teste');

    // Seleciona checkbox Telefone:
    cy.get('#phone-checkbox')
      .check()
      .should('be.checked');

    // Insere Telefone
    cy.get('#phone')
      .should('be.visible')
      .type('47999999999')
      .should('have.value', '47999999999');

    // Clica em enviar:
    cy.get('button[type="submit"]').click();

    // Verifica se foi enviado:
    cy.get('.success').should('be.visible');

    // Tira print:
    cy.screenshot();
  });

  // CT 6:
  it('Verifica o preenchimento sem o telefone, mas como obrigatório', function() {
    // Insere nome:
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('Rafael')
      .should('have.value', 'Rafael');

    // Insere Sobrenome:
    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Mendes')
      .should('have.value', 'Mendes');

    // Insere e-mail:
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('rmendes@teste.com')
      .should('have.value', 'rmendes@teste.com');

    // Insere Texto:
    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')
      .should('have.value', 'Teste');

    // Seleciona checkbox Telefone:
    cy.get('#phone-checkbox')
      .check()
      .should('be.checked');

    // Clica em enviar:
    cy.get('button[type="submit"]').click();

    // Verifica se foi enviado:
    cy.get('.error').should('be.visible');

    // Tira print:
    cy.screenshot();
  });

  // CT 7:
  it('Verifica o envio do formulário com Comandos Customizados', function() {
    // Chama comando customizado ./commands:
    cy.SubmitInformations();

    // Verifica se foi enviado:
    cy.get('.success').should('be.visible');
    
    // Tira print:
    cy.screenshot();
  });

  // CT 8:
  it('Verifica a seleção do Produto', function(){
    // Chama comando customizado ./commands:
    cy.SelecionaProduto('Blog').should('have.value', 'blog');
    cy.SelecionaProduto('youtube').should('have.value', 'youtube');
    cy.SelecionaProduto(3).should('have.value', 'mentoria');;
  })

  // CT 9:
  it('Verifica o tipo de atendimento', function(){
    // Chama comando customizado ./commands:
    cy.SelecionaAtendimento('feedback').should('be.checked');
    cy.SelecionaAtendimento('ajuda').should('be.checked');
    cy.SelecionaAtendimento('elogio').should('be.checked');
  })

  // CT10:
  it('Verifica todos os atendimentos', function(){
    cy.get('[type="radio"]')
      .should('have.length', 3)
      .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })

  // CT11:
  it.only('Verifica os checkbox', function(){
    cy.get('[type="checkbox"]')
      .should('have.length', 2)
      .each(function($checkbox){
        cy.wrap($checkbox).check()
        cy.wrap($checkbox).should('be.checked')
        cy.wrap($checkbox).uncheck()
        cy.wrap($checkbox).should('not.be.checked')
      })
  }) 
})