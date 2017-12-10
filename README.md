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
Ng-Bet is a bookmaker application. It provides odds to the customers on different games. The customer can add them to his coupon. To simplify the application one game equals a single coupon. We do not pay attention to accumulators.
The main goal here is to use a store when the user add a game to his coupon, retrieve the data and replay all these action using the redux dev tool.

## Start the application
Go in the project directory then do a 
```
npm install
```
and then 
```
ng serve
```


## Step 1: States
We want to create states for our application. 
A state is a single immutable data structure.  

Here is an example of a state:
```typescript
export interface ShopState {
    selectedItemQuantity: number;
    cart: CartItem[];
}
```
Here is an example of an app.state.ts:

```typescript
export interface AppState {
    shop: ShopState;
}
```

Create a app > store > states directory with two file:
- ng-bet.state.ts
- app.state.ts

Implement them. 
Remember we want to track the coupons state.

## Step 2: Actions
Once we created our states, we now want to create action classes. An action is the description of a state change.
We need to create an AddCoupon class implementing Action and define type and payload.  
Here is an example of an Action class:

```typescript

export const shopActions = {
    AddCartItemAction: '[Shop] AddCartItem'
};

export class AddCartItem implements Action {
    type: string = shopActions.AddCartItemAction;
    payload: ShopState;
    constructor(item: CartItem) {
        this.payload = <ShopState>{
            cart: [item]
        };
    }
}

export type ShopAction = AddCartItem;
```

Create a ng-bet.actions.ts under app > store > actions file and implement an AddCoupon class in it.

## Step 3: Reducers
A reducer is a description of how the application state change for every action. It is just a pure function.
It will receive the previous state and an action and will produce a new state without changing the previous state.
Here is an example of a reducer:
```typescript
const initialState: ShopState = {
    selectedItemQuantity: 0,
    cart: []
};

export function shopReducer(state = initialState, action: ShopAction): ShopState {
    switch (action.type) {
        case shopActions.UpdateSelectedItemQuantityAction:
        case shopActions.AddCartItemAction: {
            return Object.assign({}, state, { cart: [...state.cart, ...action.payload.cart] });
        }

        default:
            return state;
    }
}
```

Create a app > store > states directory with one file:
- ng-bet.reducer.ts

Implement it with the action we created earlier. 

## Step 4: Selectors
A selector is a function that let you extract a specific piece of data from the store.
Data from the store is only accessed by components through selector functions.

Selectors :

* can compute derived data, allowing Redux to store the minimal possible state.
* are composable. They can be used as input to other selectors

It is a best practice to use them for multiple reasons such as:  

* It will be way easier to refactore your redux store.
* It will avoid code duplication (you might have the same code snippet in multiple component).
* It will be easier to test them.

In the store directory create an app.selectors.ts file.

Create a feature selector named ng-bet using createFeatureSelector().  
The createFeatureSelector() function creates a feature selector for a state.  
Here is an example:
```typescript
export const getItemState = createFeatureSelector<ShopState>('shop');
```

Add a getCoupon selector with createSelector()
The createSelector() function creates a selector to wrap a specific state.
Here is an example:
```typescript
export const getCart = createSelector(getItemState, (state: ShopState) => state.cart);
```

## Step 5: ActionReducerMap
ActionReducerMap allow us to register reducers. We usually creates a constant with our reducers in it. 

Create a app.reducer.ts file under app > store > reducers and add a reducers constant using ActionReducerMap.

Here is an example of an app.reducer.ts:
```typescript
export const reducers: ActionReducerMap<AppState> = {
    shop: shopReducer
};
```

## Step 6: StoreModule
StoreModule is a module in @ngrx/store API that is used to configure reducers in application module.
We will pass our reducers contant we created just before in parameter.

Add StoreModule.forRoot(reducers) in app.module.ts

NB: You can see there already is a StoreDevtoolsModule.instrument({maxAge: 25}) set up in it. Just put StoreModule.forRoot(reducers) **BEFORE** it.

## Step 7: Dispatch
The dispatch() function dispatches the type of action to reducer.

In game-panel.component.ts, add in the constructor
```typescript 
private _store: Store<AppState>
``` 
and then use dispatch() to add coupon in the store.

Now you can see your store being changed everytime a new coupon is added! \o/

NB: Don't forget to install the [Redux devTool chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) before to see what's in your store.

## Step 8: Select
Coming soon...

## Source 

About redux:
* https://redux.js.org/
* http://www.dotnetcurry.com/reactjs/1356/redux-pattern-tutorial
* https://medium.com/@itsdavidthai/redux-an-explanation-for-beginners-957f268e7382  

About selectors: 
* https://gist.github.com/abhiaiyer91/aaf6e325cf7fc5fd5ebc70192a1fa170
