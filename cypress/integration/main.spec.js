describe('example to-do app', () => {
  beforeEach(() => {
    cy.fixture('../fixtures/testBirthdays')
    .then((data) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/birthdays', {
        statusCode: 200,
        body: data.data
      })
      cy.visit('http://localhost:3000/')
    })
    
  })

  it('should have basic info', () => {
    cy.contains('Kari: 1/13').should('exist')
    cy.contains('Scott: 3/1').should('exist')
    cy.contains('Kayla: 5/15').should('exist')
  })

  it('should have a form that updates birthdays', () => {
    cy.contains('John: 2/24').should('not.exist')
    cy.get('#nameValue').type('John').should('have.value', 'John')
    cy.get('#monthValue').type('2').should('have.value', '2')
    cy.get('#dayValue').type('24').should('have.value', '24')
  })

  it('should update page with form', () => {
    cy.contains('John: 2/24').should('not.exist')
    cy.get('#nameValue').type('John').should('have.value', 'John')
    cy.get('#monthValue').type('2').should('have.value', '2')
    cy.get('#dayValue').type('24').should('have.value', '24')
    cy.get('button').click()
    cy.contains('John: 2/24').should('exist')
  })
})
