## Basic test

- keep `todomvc` app running
- open Cypress from the root folder with `npm run cy:open`
- click on `01-basic/spec.js`

```js
/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('Part of TodoMVC')
})
```

+++

`cy.contains('Part of TodoMVC')` is not working 😟

![Fails to find text](img/fails-to-find-text.png)

+++

## Questions 1/3

- what happens when you execute `npm run basic`?
- same as `npx cypress run --spec 'cypress/integration/01-basic/spec.js'`

Note:
You should see single spec running, and on failure it should save a screenshot, and there should also be a video of the test run.

+++

## Bonus

- video recording [https://on.cypress.io/configuration#Videos](https://on.cypress.io/configuration#Videos)
- `cy.screenshot` command

+++

## Questions 2/3

- where are the docs for `cy.contains` command?
- why is the command failing?
  - **hint**: use DevTools
- can you fix this?

Note:
The text is actually split across two different nodes, thus it fails to find a single node with the text content.

+++

## Questions 3/3

- do you see the command retrying (blue spinner)?
- use `timeout` option to force the command to try for longer

Note:
This is to stress the point that Cypress retries last command as long as the assertion keeps failing.
