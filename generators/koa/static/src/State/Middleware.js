// @flow
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import type {Dispatch, Store} from 'redux'

import * as User from './User'
import type {Action, State} from './Store'

export type Actor = Action => ?Action

export type ActorHandler<Yield> = (
  dispatch: Dispatch<Action>,
  getState: () => State
) => Promise<Yield>

export const actors: Array<Actor> = []

export function getMiddleware (history) {
  return [
    thunk,
    routerMiddleware(history), // Sync Redux with React Router
    actorMiddleware(actors), // Watch actions and react with actors
  ]
}

/**
 * Middleware to react to specific actions
 */
export function actorMiddleware (actors: Array<Actor> = []) {
  return (store: Store<State, Action>) => (next: Dispatch<Action>) => (
    action: Action
  ) => {
    const result = next(action) // Let the action finish dispatching

    // Respond to the action if the actor returns something
    actors.forEach(actor => {
      const result = actor(action)
      if (result) store.dispatch(result)
    })

    return result
  }
}
