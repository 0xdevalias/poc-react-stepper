# poc-react-stepper

PoC React/React-Router/Redux implementation of a ['stepper'](https://material.io/guidelines/components/steppers.html#steppers-types-of-steppers)/wizard/workflow/multi-part form.

The 'stepper' basically breaks down into:

* A progress bar
* A view to show for each 'step'
* Some state management to navigate around it

## Other Libraries

Before I started this, I found a number of other libraries that just didn't quite fit what I was after:

* [react-component/steps](https://github.com/react-component/steps) : React Steps
  * This was probably my favourite
* [mu29/react-stepper](https://github.com/mu29/react-stepper)
* [srdjan/react-multistep](https://github.com/srdjan/react-multistep)

As well as some related reading:

* https://engineering.entelo.com/building-a-wizard-workflow-in-react-3cdac295ff20
* https://www.viget.com/articles/building-a-multi-step-registration-form-with-react/
  * https://github.com/tommymarshall/react-multi-step-form/
* https://material.io/guidelines/components/steppers.html#steppers-usage

## Code Layout

* Redux
  * `./store.js`: Connects the joined reducers to the application state store.
  * `./reducers/`: Application state reducers (1 per file, combined in `index.js`)
  * `./constants/ActionTypes.js`: Constant values used for the Redux actions (aka events)
  * `./actions/`: Redux 'dispatch actions' (aka events) used to update the application state.
* `./components/ExampleStepper`: The main stepper example component.

## Underlying Libraries

* https://reacttraining.com/react-router/ (`npm i react-router-dom`)
  * For routing between multiple pages
* https://redux.js.org/ (`npm i redux`)
  * For cleanly handling the application state
* https://github.com/reactjs/react-redux (`npm i react-redux`)
  * For binding Redux and react
* https://github.com/gaearon/redux-thunk (`npm i redux-thunk`)
  * Allowing Redux to handle asynchronous/non-pure state changes (eg. API call)
* https://facebook.github.io/immutable-js/ (`npm i immutable`)
  * Ensuring mutations stay out of our state/reducers
* http://getbootstrap.com/ (`npm i bootstrap`)
  * Because noone wants to waste time making the UI pretty for a PoC
* https://reactstrap.github.io/ (`npm i reactstrap`)
  * Bootstrap 4 components
* [chrisjpatty/create-react-redux-router-app](https://github.com/chrisjpatty/create-react-redux-router-app)
  * Boilerplate generator

## Usage

```
npm install
npm start
```

## Create React* App

This project was bootstrapped with [chrisjpatty/create-react-redux-router-app](https://github.com/chrisjpatty/create-react-redux-router-app).

Which is a thin opionated wrapper around [Create React App](https://github.com/facebookincubator/create-react-app).
