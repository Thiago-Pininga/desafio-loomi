import procedimentoInicial from "../support/commands.js"

describe('Marcar no Google Calendar', () => {
  beforeEach(() => {
    cy.procedimentoInicial()
  })
  it('Deve verificar a seção de calendario e não deve ter nenhum marcado', () => {
    cy.get('[data-cy="link/calendario"]').click({force:true})

    cy.wait(4000)

    cy.get('#popover-trigger-\\:r8b\\:').should("not.exist")
  })

  it("Deve marcar uma partida no calendario e verificar na seção de Calendário", () => {
    cy.get('[aria-label="Adicionar ao calendário"] > .chakra-image').first().click()

    cy.get('[data-cy="link/calendario"]').click({force:true})

    cy.get('.rbc-event-content').should("be.visible")
  })

  it("Deve desmarcar uma partida na seção de Calendário", () => {
    cy.get('[data-cy="link/calendario"]').click({force:true})

    cy.wait(2000)

    cy.get('.rbc-event-content').last().click()

    cy.get('[id^="popover-trigger-"]').last().click();

    cy.get('.css-1rcg3rs').last().click({force:true})

    cy.get('[data-cy="alert-dialog-submit"]').click()

    cy.get('.rbc-event-content').should("not.exist")
  })
})