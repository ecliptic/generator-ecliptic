// @flow
import { REHYDRATE } from "redux-persist/constants";
import { routerMiddleware } from "react-router-redux";
import createActionBuffer from "redux-action-buffer";
import thunk from "redux-thunk";
import type { Dispatch, Store } from "redux";

import * as Forms from "./Forms";
import * as User from "./User";
import type { Actor, Action, State } from "Types";

export const actors = [
  Forms.actors.addSupplies,
  Forms.actors.addCourse,
  User.actors.userFromUrl
];

export function getMiddleware(history) {
  return [
    thunk,
    routerMiddleware(history), // Sync Redux with React Router
    actorMiddleware(actors), // Watch actions and react with actors
    createActionBuffer(REHYDRATE) // Buffer all actions until after rehydrate
  ];
}

/**
 * A middleware to respond to specific actions.
 */

export function actorMiddleware(actors: Array<Actor> = []) {
  return (store: Store<State, Action>) => (next: Dispatch<Action>) => (
    action: Action
  ) => {
    next(action); // Let the action finish dispatching

    // Respond to the action if the actor returns something
    actors.forEach(actor => {
      const result = actor(action);
      if (result) store.dispatch(result);
    });
  };
}
