describe('Authentication flows', () => {
  it.skip("User logins successfully", () => {
    cy.visit("http://localhost:8080");
    cy.get("[data-tid=login-form]").;
  })

  it.skip('User submits invalid password', () => {})
  it.skip('User submits invalid email', () => {})
  it.skip('User recovers password', () => {})
  it.skip('User submits without internet connection', () => {})
  it.skip('User does not exist', () => {})
})
