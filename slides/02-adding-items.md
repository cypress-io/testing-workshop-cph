## Adding items test

- keep `todomvc` app running
- open `02-adding-items/spec.js`
- get the input field
  - type some text
  - type special "Enter" key
  - check that has been added to the list
  - delete the new item

**tip** use `cy.get`, `cy.type`, `cy.contains`, `cy.click`

+++

## Refactor code 1/3

- visit the page before each test

Note:
Avoid duplicate `cy.visit('localhost:3000')` command at the start of each test.

+++

## Refactor code 2/3

- move the url into `cypress.json`

**tip** look at [https://on.cypress.io/configuration](https://on.cypress.io/configuration)

+++

## Refactor code 3/3

- make a helper function to add todo item

**tip** it is just JavaScript

Note:
Move `addItem` function into a separate file and import from the spec file. It is just JavaScript, and Cypress bundles each spec file, so utilities can have `cy...` commands too!

+++

## Pro tips

- resize the viewport in `cypress.json`
- set up IntelliSense in `cypress.json` using [https://on.cypress.io/intelligent-code-completion](https://on.cypress.io/intelligent-code-completion)

+++

## What kind of tests?

- discussion: what would you test in the TodoMVC app?

Note:
Longer tests, adding items then deleting one for example. Adding items via GUI and observing communication with the server. Adding items then reloading the page.

+++

## Unit tests vs end-to-end tests

### Unit tests

```javascript
import add from './add'
test('add', () => {
  expect(add(2, 3)).toBe(5)
})
```

- arrange - action - assertion

+++

### End-to-end tests

```javascript
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('can mark items as completed', () => {
  const ITEM_SELECTOR = 'li.todo'
  addItem('simple')
  addItem('difficult')
  cy.contains(ITEM_SELECTOR, 'simple').should('exist')
    .find('input[type="checkbox"]').check()
  // have to force click because the button does not appear unless we hover
  cy.contains(ITEM_SELECTOR, 'simple').find('.destroy').click({ force: true })
  cy.contains(ITEM_SELECTOR, 'simple').should('not.exist')
  cy.get(ITEM_SELECTOR).should('have.length', 1)
  cy.contains(ITEM_SELECTOR, 'difficult').should('be.visible')
})
```

- **tip** check out `cy.pause` command

Note:
Revisit the discussion about what kind of tests one should write. E2E tests can cover a lot of features in a single test, and that is a recommended practice. If a test fails, it is easy to debug it, and see how the application looks during each step. This is a good moment to show how Cypress stores DOM snapshots and shows them for each step.

+++

### Bonus

- Core concepts [https://on.cypress.io/writing-and-organizing-tests](https://on.cypress.io/writing-and-organizing-tests)
