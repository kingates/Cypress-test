describe('visit Nobl9 website', () => {
    it('launch website and check article', () => {
        cy.visit('https://nobl9.com/')
        cy.contains('Blog').click()
        cy.url().should('include', '/resources')
        cy.contains('Why do I need SLOs if I already have monitoring?').click()
    });
    it('open pop-up and fill form', () => {
        cy.get('a[href="#get-started"]').contains('Get Started').click()
        cy.get('div').contains('Talk to a Nobl9 SLOgician').children().click()
        cy.get('#firstname-cb257c24-5c20-4f6e-94ae-7253448de96f').type('Jane')
        cy.get('#lastname-cb257c24-5c20-4f6e-94ae-7253448de96f').type('Doe')
        cy.get('#company-cb257c24-5c20-4f6e-94ae-7253448de96f').type('IT Company')
        cy.get('#email-cb257c24-5c20-4f6e-94ae-7253448de96f').type('qa@itcompanytest.com')
    });
    it('close pop-up', () => {
        cy.get('.modal-close').click()
    });
})