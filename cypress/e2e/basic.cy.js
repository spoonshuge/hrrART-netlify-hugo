describe('Heidi Muses Art Page', () => {
  before(() => {
    // Visit the website
    cy.visit('http://localhost:1313');
  });

  it('displays the ART heading', () => {
    // Check for the "ART" heading
    cy.contains('h1', 'ART').should('be.visible');
  });

  it('renders the main image', () => {
    // Check for the main image
    cy.get('img').should('be.visible');
  });

  it('displays the caption', () => {
    // Check for the caption "Just a sample"
    cy.contains('Just a sample').should('be.visible');
  });
});
