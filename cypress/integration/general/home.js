describe('miloslavc.com', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Page Loads', () => {
    cy.contains('Get in Touch');
    cy.contains('Contact');
    cy.get('.CTA').should('have.attr', 'href', 'mailto:contact@miloslavc.com');
    cy.contains('Let’s work together');
  });

  it('Navigate to About Page', () => {
    cy.clickLink('About');
    cy.url().should('include', '/about');
  });

  it('Navigate to First Project', () => {
    cy.findAllByTestId('featured')
      .first()
      .click()
      .then(($id) => {
        const projectUrl = $id.attr('href');

        cy.url().should('include', projectUrl);
      });

    cy.contains('Live');
    cy.contains('GitHub');
  });

  it('Check for corrent number of projects', () => {
    cy.findAllByTestId('featured').should('have.length', 3);

    cy.fixture('projects').then((data) => {
      expect(data.edges[0].node.slug).to.eq('kla');
    });
  });
});
