## Spying / stubbing network calls

- keep `todomvc` app running
- open `05-xhr/spec.js`
- **note** stubbing `window.fetch` is NOT implemented yet, but will be [issue #687](https://github.com/cypress-io/cypress/issues/687)

+++

## Situation

- there is **no resetting** the state before each test
- the test passes but _something is wrong_

```javascript
it('starts with zero items', () => {
  cy.visit('/')
  cy.get('li.todo').should('have.length', 0)
})
```

![Should have failed](img/test-passes-but-this-is-wrong.png)

+++

## Problem

@ul

- page loads
- web application makes XHR call `GET /todos`
  - meanwhile it shows an empty list of todos
- Cypress assertion passes!
- `GET /todos` returns with 2 items
  - they are added to the DOM
  - but the test has already finished

@ulend

+++

## Waiting

```javascript
it('starts with zero items', () => {
  cy.visit('/')
  cy.wait(1000)
  cy.get('li.todo').should('have.length', 0)
})
```

![Waiting works](img/waiting.png)

+++

## Todo

**better** to wait on a specific XHR request. In test "starts with zero items" from `05-xhr/spec.js`

@ul

- start Cypress mock server with `cy.server`
  - should we start mock server _before_ or _after_ `cy.visit`?
- spy on specific route with `cy.route`
- save as an alias
- wait on the XHR alias
  - then check the DOM

@ulend

**tips:** [`cy.server`](https://on.cypress.io/server), [`cy.route`]('https://on.cypress.io/route), [Network requests guide](https://on.cypress.io/network-requests)

+++

## Todo

add to test "starts with zero items":

- wait for the XHR alias like before
- its response body should be an empty array

![Checking response body](img/response-body.png)

+++

## Stub network call

Update test "starts with zero items (stubbed response)"

- instead of just spying on XHR call, let's return some mock data

```javascript
// returns an empty list
// when `GET /todos` is requested
cy.route('GET', '/todos', [])
```

+++

### Todo for spec "05-xhr/spec.js" "fixtures" suite

- read about [`cy.fixture`](http://on.cypress.io/fixture) command
- mock `GET /todos` route using data loaded from a fixture
- mock `GET /todos` using `fixture:empty-list` shortcut
- write a test that confirms that the app shows correctly completed and unfinished items

+++

### Spying on adding an item XHR

When you add an item through the DOM, the app makes `POST` XHR call.

![Post new item](img/post-item.png)

Note:
It is important to be able to use DevTools network tab to inspect the XHR and its request and response.

+++

**Todo 1/2**

- write a test "posts new item to the server" that confirms that new item is posted to the server

![Post new item](img/post-item.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

**Todo 2/2**

- write a test "posts new item to the server response" that confirms that RESPONSE when a new item is posted to the server

![Post new item response](img/post-item-response.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

## Bonus

Network requests guide at [https://on.cypress.io/network-requests](https://on.cypress.io/network-requests)
