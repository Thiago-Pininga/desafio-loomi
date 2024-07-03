import procedimentoInicial from "../support/commands.js"

describe('Favoritar Partidas e Times', () => {
  beforeEach(() => {
    cy.procedimentoInicial()
  })
  
  it('Deve favoritar uma partida e verificar a partida foi adicionada à lista de favoritos', () => {
    cy.get('[aria-label="Favoritar Partida"] > .chakra-image').first().click()

    cy.get('[data-cy="link/favoritos"]').click();

    cy.get('.css-5prxxc').should("be.visible")
  })

  it('Deve favoritar um time (que deve ser o primeiro) e verificar a partida foi adicionada à lista de favoritos -> adiciona o time AA Flamengo como favorito', () => {
    cy.get('[data-cy="link/favoritos"]').click();

    cy.get('[data-cy="btn-favorite-team"]').click();

    cy.get('[data-cy="input-search-teams"]').type("Flamengo");

    cy.get('.css-1bntj9o > .chakra-button').first().click({force:true});

    cy.get('[data-cy="btn-submit-teams"]').click();

    cy.wait(1000)

    cy.contains("AA Flamengo").should("be.visible")
  })

  it('Deve "desfavoritar" o time anteriormente favoritado',() => {
    cy.get('[data-cy="link/favoritos"]').click();

    cy.get('[data-cy="btn-edit-teams"]').click()

    cy.get('.css-79elbk > .chakra-button').click()

    cy.get('[data-cy="btn-save-teams"]').click()

    cy.wait(1000)

    cy.contains("AA Flamengo").should("not.exist")
  })

  it('Deve "desfavoritar" a partida anteriormente favoritada', () => {
    cy.get('[data-cy="link/favoritos"]').click();

    cy.wait(3000)

    cy.get('[aria-label="Favoritar Partida"] > .chakra-image').first().click()

    cy.wait(4000)

    cy.get('.css-5prxxc').should('not.exist')
  })    
})