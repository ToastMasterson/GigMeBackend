// import { it } from "mocha"

describe('Sample Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
})

describe('Visit Web Page', function() {
    it('Visits My Personal Site', function() {
        cy.visit('http://tylermastersonsite.firebaseapp.com')
    })
})

describe('Contains', () => {
    it('finds the content type', () => {
        cy.visit('http://tylermastersonsite.firebaseapp.com')

        cy.contains('Blog').click()

        cy.url().should('include', '/blog')
    })
})

describe('Example Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})
