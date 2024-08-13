/// <reference types="cypress" />

describe('Testes para pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuario ate o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)

    })
    it('Deve preencher o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('alex soares')
        cy.get('input[name="email"]').type('alexsoares@teste.com.br')
        cy.get('input[name="telefone"]').type('33 111111-1111')
        cy.get('input[name="endereco"]').type('rua teste 300 bairro bobo-mg')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('windeow:alert', (conteudo) => {
            expect(conteudo).contain('obrigado pela candidatura!')
        })
    })
})
