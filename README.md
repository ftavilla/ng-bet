## What is the purpose of this kata?
It was created to introduce redux to teams. This kata is just for learning purpose.

## What is Redux?
Redux is a predictable state container for JavaScript apps. It is a state management library with minimal API but completely predictable behavior, so it is possible to implement logging, hot reloading, time travel, universal apps, record and replay.
Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm.

## How does redux works?

![Redux Schema](https://user-images.githubusercontent.com/2597716/33803029-867ba57e-dd86-11e7-9f9d-3c129c44b6ca.png)

Redux is based on 3 principles:

* Redux is a state container, it stores all of your state in one place.
* The state is read only, the only way to change state is to dispatch an action.
* State can only be changed by pure functions or in another term: Reducers. Redux Reducers take in the previous state and an action object and returns the next state

## Starting point
Ng-Bet is a bookmaker application. It provides odds to the customers on different games. The customer can add them to his coupon.
The main goal here is to use a store when the user add a game to his coupon, retrieve the data and replay all these action using the redux dev tool.

## Start the application
Go in the project directory then do a 
```
npm install
```
and then 
```javascript
ng serve
```


## Step One
We want to create states for our application. 
Creates a state folder under app folder with two states file:
- ng-bet.state.ts
- app.state.ts

## Step two
Create action classes

## Step Three
Create Reducers

## Step four
Create selector using createFeatureSelector() and createSelector()

## Step Five
Create an ActionReducerMap

## Step six
Add StoreModule.forRoot(reducers) in app.module.ts

## Step seven
Use the store in the application to add coupon







# NgBet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
