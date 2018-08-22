/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})

beforeEach(() => {
  cy.visit('localhost:3000')
})

it('loads', () => {
  cy.contains('a', 'TodoMVC')
})

it('starts with zero items', () => {
  cy
    .get('li.todo') // command
    .should('have.length', 0) // assertion
})

// notice how the commands are chained
// each command continues to act on a previous "element" we call "subject"
it('adds two items', () => {
  cy
    .get('.new-todo') // command
    .type('first item{enter}') // command
  cy
    .contains('li.todo', 'first item') // command
    .should('be.visible') // assertion
  cy.get('.new-todo').type('second item{enter}')
  cy.contains('li.todo', 'second item').should('be.visible')
})

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('can mark items as completed', () => {
  const ITEM_SELECTOR = 'li.todo'
  addItem('simple')
  addItem('difficult')

  cy
    .contains(ITEM_SELECTOR, 'simple') // command
    .should('exist') // assertion
    .find('input[type="checkbox"]') // command (continues from previous subject)
    .check() // command
  // have to force click because the button does not appear unless we hover
  cy.contains(ITEM_SELECTOR, 'simple').find('.destroy').click({ force: true })
  cy.contains(ITEM_SELECTOR, 'simple').should('not.exist')
  cy.get(ITEM_SELECTOR).should('have.length', 1)
  cy.contains(ITEM_SELECTOR, 'difficult').should('be.visible')
})

it('can add many items', () => {
  // assumes there are no items at the beginning

  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`)
  }
  // check number of items
  cy.get('li.todo').should('have.length', 5)
})

it('can alias items', () => {
  // assumes there are no items at the beginning
  addItem('first')

  cy.get('li.todo').as('items').should('have.length', 1)

  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`)
  }
  // check number of items
  cy.get('@items').should('have.length', 6)
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
