describe('Authenticator:', function() {
  beforeEach(function() {
    cy.visit('/');
  });
  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      cy.get(selectors.usernameInput).type(
        Cypress.env('username')
      );
      cy.get(selectors.signInPasswordInput).type(
        Cypress.env('password')
      );
      cy.get(selectors.signInSignInButton).contains('Sign In').click();
    });
  });
});
export const selectors = {
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]'
};