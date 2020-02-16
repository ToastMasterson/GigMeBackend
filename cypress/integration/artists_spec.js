require('dotenv').config()

describe('CRUD actions for Artist', () => {
    beforeEach(function() {
        cy.exec('knex seed:run')
    })

    it('Returns 200 successful request', () => {
        cy.request('/artists')
    })

    it('Successfully Creates a new Artist Instance', () => {
        cy.request('POST', '/artists', {
            artist_name: 'Copper Leaf',
            email: 'copperleaf@fakemail.com',
            location: 'San Francisco, California'
        })
    })

    // it('Successfully Updates an Artist Instance', () => {
    //     cy.request('PATCH', '/artists/1', {
    //         location: 'Lakewood, CO'
    //     })
    // })

})

describe('Profile actions', () => {
    beforeEach(function() {
        cy.exec('knex seed:run')
    })

    it('')
})
