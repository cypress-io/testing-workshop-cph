/// <reference types="cypress" />

// send HTTP command to the server to clear all todos
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})
beforeEach(() => {
  cy.visit('/')
})
/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('adds two items', () => {
  addItem('first item')
  addItem('second item')
  cy.get('li.todo').should('have.length', 2)
})
