## Gleb Bahmutov, PhD

- VP of Engineering, Cypress
- gleb (at) cypress.io
- [@bahmutov](https://twitter.com/bahmutov)

+++

## What we are going to cover

As long as ⏳ permits

- example TodoMVC
  - web app, data store, REST calls
- basic page load test
- resetting application state
- XHR spying and stubbing, fixtures

+++

## Time 🕰

- total workshop duration 2 hours
- short breaks after 1 hour

+++

Please: if you have experience with Cypress.io, help others during the workshop 🙏

+++

## Requirements

You will need:

- `git` to clone this repo
- Node v6+ to install dependencies

```text
git clone <repo url>
cd testing-workshop-cph
npm install
```

+++

## Repo organization

- `/todomvc` is a web application we are going to test
- all tests are in `cypress/integration` folder
  - there are subfolders for exercises
    - `01-basic`
    - `02-adding-items`
    - `03-selector-playground`
    - `04-reset-state`
    - etc

Note:
We are going to keep the app running, while switching from spec to spec for each part.

+++

## `todomvc`

Let us look at the application.

- `cd todomvc`
- `npm start`
- `open localhost:3000`

**important** keep application running through the entire workshop!

+++

It is a regular TodoMVC application.

![TodoMVC](todomvc/img/todomvc.png)

+++

Look at XHR when using the app

![Network](todomvc/img/network.png)

+++

Look at `todomvc/index.html`

![DOM](todomvc/img/DOM.png)

+++

Look at `todomvc/app.js`

![Application](todomvc/img/app.png)

+++

## Questions

- what happens when you add a new Todo item?
- how does it get to the server?
- where does the server save it?
- what happens on start up?

Note:
The students should open DevTools and look at XHR requests that go between the web application and the server. Also the students should find `todomvc/data.json` file with saved items.

+++

```
npx cypress open
$(npm bin)/cypress open
./node_modules/.bin/cypress open
```

![First time you open Cypress](img/cypress-scaffold.png)

+++

- "cypress.json" - all Cypress settings
- "cypress/integration" - test files (specs)
- "cypress/fixtures" - mock data
- "cypress/plugins" - extending Cypress
- "cypress/support" - shared commands, utilities
