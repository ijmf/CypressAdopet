describe('Página Principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.', () => {
        // Verifica se a imagem está presente
        cy.get('img[src="logo-clear.svg"]').should('be.visible');
    });

    it('Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.', () => {
        // Verifica se a imagem está presente
        cy.contains('p', 'Quem ama adota!').should('be.visible');
    });

    it('Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.', () => {
        // Verifica se a imagem está presente
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });
    it('Verifica mensagem de texto', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();

    })
})