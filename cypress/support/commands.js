Cypress.Commands.add('SubmitInformations', function(){
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
cy.contains('button', 'Enviar').click();
})

Cypress.Commands.add('SelecionaProduto', function(Produto){
    cy.get('#product').select(Produto);
})

Cypress.Commands.add('SelecionaAtendimento', function(Atendimento){
    cy.get('[type="radio"]').check(Atendimento);
})