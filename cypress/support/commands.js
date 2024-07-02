Cypress.Commands.add('login', () => {
    cy.get('[data-cy="login-email"]').type(Cypress.env("email"));
    cy.get('[data-cy="login-password"]').type(Cypress.env("senha"));
    cy.get('[data-cy="login-submit"]').click();

})

Cypress.Commands.add('procedimentoInicial', () => {
    cy.visit('https://www.kasa.live');
    cy.get('[data-cy="btn-trigger-profile"]', { timeout: 10000 }).click();

        // Verifica se o botão de Logout existe, se existir, já está logado, se não houver, fazer o login
    cy.get('body').then(($body) => {
        if ($body.find('[data-cy="btn-logout-profile"]').length === 0) {
                cy.login();
        } 
    });
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })