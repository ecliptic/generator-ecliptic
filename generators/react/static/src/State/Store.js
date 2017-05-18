// @flow
import * as Redux from "redux";
import { identity } from "ramda";
import { routerReducer as router } from "react-router-redux";

import { getMiddleware } from "State/Middleware";
import * as User from "./User";
import type { UserState, UserAction } from "./User";

export type State = {
  user: UserState,
  router: typeof router
};

export type Action = UserAction;

const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;

export const reducer = Redux.combineReducers({
  user: User.reducer,
  router
});

export function createStore(initialState: State, history) {
  const store = Redux.createStore(
    reducer,
    Redux.compose(
      Redux.applyMiddleware(...getMiddleware(history)),
      devToolsEnhancer
    )
  );
  return store;
}
