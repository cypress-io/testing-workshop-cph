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

Note:
The test fails on purpose, this is to show what happens during `cypress run` and how it takes a screenshot on failure and a video of the test run.

+++

```javascript
/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('Part of TodoMVC')
})
```

- why do we need `reference types ...` line?

Note:
By having "reference" line we tell editors that support it (VSCode, WebStorm) to use TypeScript definitions included in Cypress to provide intelligent code completion. Hovering over any `cy` command brings helpful tooltips. It is a good idea to show intellisense over each command

+++

Using `ts-check`

```javascript
/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('Part of TodoMVC')
})
```

- what happens if you add `ts-check` line and misspell `cy.visit`?

Note:
The check works really well in VSCode editor. I am not sure how well other editors support Cypress type checks right out of the box.

## Docs

Your best friend is [https://docs.cypress.io/](https://docs.cypress.io/)

![Doc search](img/docs-search.png)

+++

### Questions (find each doc)

- Cypress main features and how it works docs
- core concepts
- command API
  - how many commands are there?

Note:
The most important take away from this workshop is for students to know where to find help later. Docs is the primary place, with GitHub issues and Gitter chat channel following it.

+++

## Power tip

Jump to docs for any API command with

```text
https://on.cypress.io/<command name>
```

Like [https://on.cypress.io/visit](https://on.cypress.io/visit) or [https://on.cypress.io/click](https://on.cypress.io/click)

+++

### Find these 🔎

- examples
  - recipes
  - tutorial videos
  - example applications
  - blogs
- Cypress changelog

Note:
Students should know where to find information later on. Main resources is the api page [https://on.cypress.io/api](https://on.cypress.io/api). Also explain the difference between direct links and redirect service like https://on.cypress.io/changelog and https://on.cypress.io/roadmap

+++

`cy.contains('Part of TodoMVC')` is not working on purpose

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

@ul

- where are the docs for `cy.contains` command?
- why is the command failing?
  - **hint**: use DevTools
- can you fix this?

@ulend

Note:
The text is actually split across two different nodes, thus it fails to find a single node with the text content.

+++

## Questions 3/3

- do you see the command retrying (blue spinner)?
- use `timeout` option to force the command to try for longer

Note:
This is to stress the point that Cypress retries last command as long as the assertion keeps failing.
