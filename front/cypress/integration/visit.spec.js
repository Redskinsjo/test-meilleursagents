/* eslint-disable no-undef */
export {};

context('e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('visit the app', () => {
    it('checks redirection works', () => {
      cy.url().should('equal', 'http://localhost:3000/realtors/101');
    });

    it('checks clicking and reading message', () => {
      cy.get('.message').eq(0).click();
      cy.url().should('equal', 'http://localhost:3000/realtors/101/messages/10100');
    });

    it('checks typing in url and reading message', () => {
      cy.visit('http://localhost:3000/realtors/102/messages/10201');
      cy.get('[data-test=msg-details-body]').should('exist');
      cy.get('[data-test=msg-details-body]').contains('#10201');
    });
  });
});
