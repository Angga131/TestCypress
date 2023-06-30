describe('Contact Scenario', () => {
    it('Success contact', () => {
      cy.visit('https://www.demoblaze.com/')
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get('#recipient-email').type('Mbahjoyo@woyo.com')
      cy.wait(15)
      cy.get('#recipient-name').type('Mbahjoyo')
      cy.wait(15)
      cy.get('#message-text').type('Bagaimana cara return barang')
      cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
  })