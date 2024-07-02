import procedimentoInicial from "../support/commands.js"

describe('Melhores momentos', () => {
    beforeEach(() => {
      cy.procedimentoInicial()
    })

    it("Deve acessar a pagina de melhores momentos", () => {
      cy.get('[data-cy="link/melhores-momentos"]').click()

      cy.get(':nth-child(1) > .card-highlight-overlay').click()
    })
  })