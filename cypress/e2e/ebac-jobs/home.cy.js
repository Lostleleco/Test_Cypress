/// <reference types="cypress" />

describe('Testes para Home', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
})
