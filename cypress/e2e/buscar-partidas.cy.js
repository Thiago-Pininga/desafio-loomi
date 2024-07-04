import procedimentoInicial from "../support/commands.js"

describe('Buscar Partidas', () => {
    beforeEach(() => {
        cy.procedimentoInicial()
    })

    it('Buscar partidas com base no time na seção de pesquisa -> pesquisa sobre o time "AA Flamengo"', () => {
        cy.get("#filter-team").click().type("Flamengo");

        cy.wait(2000)

        cy.get(':nth-child(1) > .css-kmj3am', {timeout:5000}).click();
        
        cy.get('.css-70qvj9 > .chakra-text').should("be.visible")
    })

    it('Buscar partidas com base no campeonato na seção de pesquisa -> Pega o 3 elemento da lista (Brasileirão Serie A)', () => {
        cy.get("#filter-championship").click();

        cy.wait(2000)

        cy.get(':nth-child(3) > .css-kmj3am').click();

        cy.get('.css-tki4ir').should("be.visible")
    })

    it('Buscar partidas com base na data na seção de pesquisa -> Define dias entre o dia 1 e 3', () => { //tive dificuldades em como checar se deu certo
        cy.get('.chakra-input__group > .chakra-input').click();

        cy.get('[aria-pressed="true"]').click()

        cy.contains('1').click(); 
        cy.contains('3').click(); 
      
        cy.wait(1000); 
      
        cy.get('.css-n0tora').click();        
    });   

    it('Buscar partidas com base na plataforma (onde vai assistir) na seção de pesquisa -> pesquisa sobre a SporTV', () => {
        cy.get('#filter-streaming').click().type("sportv");
    
        cy.wait(2000);
    
        cy.get('.css-n0tora').click();
    
        cy.wait(5000);
    
        cy.get('.css-5prxxc > .css-14jp1cp > .chakra-button > .css-fthg4f > .css-1xykbwn > .chakra-image')
        .should("be.visible")
        .then(($images) => {
            let found = false;
            $images.each((index, image) => {
                if (image.src === 'https://kasalive-api-prod.s3.amazonaws.com/media/channel/badge/20230108142954-sportv-brasil.png') {
                    found = true;
                }
            });
            expect(found).to.be.true;
        });
    });
    
})