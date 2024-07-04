import procedimentoInicial from "../support/commands.js"

describe('Melhores momentos', () => {
  beforeEach(() => {
    cy.procedimentoInicial()
  })

  it("Deve acessar a pagina de melhores momentos e acessar um dos videos", () => {
    cy.get('[data-cy="link/melhores-momentos"]').click()

    cy.get(':nth-child(1) > .card-highlight-overlay').click()

    cy.get('#widget2').should("be.visible")
  })


  it("Deve acessar a pagina de melhores momentos e filtrar por times", () => {
    cy.get('[data-cy="link/melhores-momentos"]').click()

    cy.wait(1000)

    cy.get('#accordion-button-\\:r83\\: > .css-1bntj9o').click()

    cy.get('#accordion-panel-\\:r83\\: > .css-1kkkyed > .css-1jcxtgh > .chakra-input__group > .chakra-input').type('Flamengo')

    cy.get('.css-1lekzkb > .chakra-checkbox > .chakra-checkbox__control')
      .eq(3) 
      .click()

    cy.get(':nth-child(1) > .css-1xfi7k7')
      .should(
        'contain.text',
        'Flamengo'
      )
  })

  it("Deve acessar a pagina de melhores momentos e filtrar por campeonato", () => {
    cy.get('[data-cy="link/melhores-momentos"]').click()

    cy.wait(1000)

    cy.get('#accordion-button-\\:r84\\:').click()

    cy.viewport(1000,900)

    cy.get('#accordion-panel-\\:r84\\: > .css-1kkkyed > .css-1jcxtgh > .chakra-input__group > .chakra-input').type("Copa América")

    cy.wait(1000)

    cy.get('.css-1lekzkb > .chakra-checkbox > .chakra-checkbox__control')
      .first()
      .click({force:true})

    cy.wait(4000)

    cy.get(':nth-child(1) > .css-onb711')
      .should(
        'contain.text',
        'Copa América'
      )
  })
})