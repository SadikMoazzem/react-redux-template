# Sadik's react-redux Template
This is a template useful for cretaing react-redux applications with a SASS integration.

## Service Worker
[Docs for service workers link](https://developers.google.com/web/fundamentals/primers/service-workers)

If you are not making a app that needs to be accessible offline or not a PWA feel free to remove servcieworker.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Modular Front-end 

This application's React application is built using a modular system where related pieces of Frontend functionality are grouped into "modules" 

These currently reside under the "/src/modules" directory.

For our examples we will refer to a fictional module named "users"

### Deciding whether to create a module or not?

As a rule of thumb - if your functionality requires specific state, then it should be a module.

### Module anatomy

Modules should contain: 

As a minimum:
- A base module - as an index, this should be named after the module itself. eg. users.js. This file acts as the public interface of your module, and should export anything that other modules are likely to require from your module.

Optionally:
- React components.
- reducers - any state transformation functions your module requires to handle it's available actions.
- actions - any action types or action creators that the module will use or expose for other modules to use.
