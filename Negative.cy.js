describe('DataSub Test', () => {
  it('Happy Path', () => {
      cy.visit('https://qatest.datasub.com/index.html');
      cy.get('[id="name"]').type('Alexander');
      cy.get('[id="email"]').type('test@example').should('have.class', 'is-invalid');
      cy.get('[id="service"]').select('B Service');
      cy.get('[type="radio"]').check('Personal');
      cy.get('[type="checkbox"]').check(['Card', 'Cash']);
      cy.get('[id="message"]').type('Contact me today');
      cy.get('[class="btn btn-dark w-100 py-3"]').click();
      cy.get('[id="formStatus"]').should('not.be.visible')
  })
})