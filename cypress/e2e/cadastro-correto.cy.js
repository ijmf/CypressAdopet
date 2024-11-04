describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
        cy.cadastrar('Ana de Jesus90', 'ana90@email.com', 'Senha123');
        cy.get('[data-test="submit-button"]').click();
    });
}) 