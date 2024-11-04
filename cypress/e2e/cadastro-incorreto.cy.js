describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {

        cy.cadastrar('Ana de Jesus3', 'xx@email.com', 'xxxx');
        cy.get('[data-test="submit-button"]').click();

    })
})