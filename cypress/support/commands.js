Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('cadastrar', (nome, email, senha) => {
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.contains('button', 'Cadastrar').click();
});
