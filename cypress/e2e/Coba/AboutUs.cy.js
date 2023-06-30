describe('About us Scenario', () => {
    it('Success About us', () => {
      cy.visit('https://www.demoblaze.com/')
      cy.get(':nth-child(3) > .nav-link').click()
      cy.wait(15)
      cy.get('.vjs-poster').click()
      cy.wait(30)
      cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
      
    })
  })