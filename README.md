[![Build Status](https://travis-ci.org/RichardWithnell/five-day-weather.svg?branch=master)](https://travis-ci.org/RichardWithnell/five-day-weather)

# Five Day Weather

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Demo](https://richardwithnell.github.io/five-day-weather/).

## Description

A single page HTML app displaying the last five days of data provided by the OpenWeatherMap API.

### Frontend
* [React](https://facebook.github.io/react/): a facebook library to build user interfaces.
* [Redux](http://redux.js.org/): predictable state container for JavaScript apps.
* [React Bootstrap](https://react-bootstrap.github.io/): React library for the Bootstrap framework.

### Dev Stack
* [Babel](https://babeljs.io/): An es6/es7 compiler.
* [Eslint](http://eslint.org/): The pluggable linting utility for JavaScript and JSX.
* [Flow](http://flow.org/): A Static Type Checker for JavaScript.
* [Jest](https://facebook.github.io/jest/): JavaScript testing framework.
* [Webpack](http://webpack.github.io/): module bundler for the browser.

## Setup

Assuming node and yarn (or npm) is already installed.

```bash
https://github.com/RichardWithnell/five-day-weather.git
cd five-day-weather
npm install # npm
yarn # Yarn
```

## Dev Server

Either add your API key for OpenWeatherMap to the ``.env`` file.

#### .env file
```bash
REACT_APP_OPEN_WEATHER_API_KEY='Insert your API key here'
```

Or set your key in the current shell when starting the app:

#### Windows
```bash
set REACT_APP_OPEN_WEATHER_API_KEY='Insert your API key here' && npm start
```

#### Linux
```bash
REACT_APP_OPEN_WEATHER_API_KEY='Insert your API key here' && npm start
```

Startup the development server. The app will automatically open with hot reloading at <http://localhost:3000>.

```bash
yarn start
```

## Test

Run automated tests using Jest and Enzyme. 

```bash
yarn test
```

## Build

Create the production ready build. 

```bash
yarn build
```

## Deploy

Deploy the latest build to gh-pages. 

```bash
yarn deploy
```

## Additional Work

### Features

- Allow a user to select the city/country using a typeahead and a location API.
- Add a refresh button to reload the data, without refreshing the page.
- Show an overview of weather data for each day.
- Use ``Geolocation.getCurrentPosition()`` to get the weather for the users location by default.

### Testing

- Increase test coverage (especially for redux: container, reducer, and actions).
- Add cross browser testing using Selenium.
- Utilise BDD tools (e.g. cucumber) to take each user story and ensure the associated tests pass. 

### Refactoring
- Improve the redux store structure, create separate objects for metadata associated with each day and the list of data, both referenced by allIds.
- Refactor component/container folder structure as repository grows, the flat directory structure doesn't scale well. 
- Increase flow coverage and usage of types to improve static type checking when building. 

### CI/CD
- Currently just using travis to run tests on push, should report coverage to the repository as well. 
- Automate deployment when CI passes.

