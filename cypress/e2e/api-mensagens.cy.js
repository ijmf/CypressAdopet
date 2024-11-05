describe('Api Adopet', () => {
    //const tempoEsperado = Math.random() * 1000
    const authorization = Cypress.env('authorization');

    it.only('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/mensagem',
            headers: Cypress.env(authorization)
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.not.be.empty;
            //expect(res.duration).to.be.lte(tempoEsperado) //Flaky tests
            // expect(res.body).to.have.property('msg'); // Descomente se necessário
        });
    });

    it('Deve verificar se o nome do usuário está presente na página /perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/44408f01-dc41-4644-b910-57442928f1d9',
            headers: { authorization }
        }).then((res) => {
            const { status, body } = res; // Desestruturação correta
            expect(status).to.equal(200); // Verifica se a resposta é 200
            // Verifica a estrutura do corpo
            expect(body).to.have.property('perfil'); // Verifica se a propriedade 'perfil' existe
            expect(body.perfil).to.have.property('nome'); // Acesse a propriedade 'nome' dentro de 'perfil'
            expect(body.perfil.nome).to.equal('Ivan Junio12'); // Substitua pelo nome esperado
        });
    });

});
