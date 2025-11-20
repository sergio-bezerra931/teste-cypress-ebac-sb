/// <reference types="cypress" />
describe('Funcionalidade Login', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve fazer Login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste45.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });
    it('Deve exibir uma mensagem de erro ao inserir usuario', () => {
        cy.get('#username').type('ebac@teste45.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. ')

    });
    it('Deve exibir uma mensagem de erro ao inserir senha inalida', () => {
        cy.get('#username').type('aluno_ebac@teste45.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste45.com está incorreta. Perdeu a senha?')
    });

   

})