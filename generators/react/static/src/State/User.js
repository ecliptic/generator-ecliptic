// @flow
import { createActions, handleActions } from "redux-actions";

export type UserState = {
  id: ?string,
  email: ?string,
  displayName: ?string,
  photo: ?string
};

export const initialState: UserState = {
  id: undefined,
  email: undefined,
  displayName: undefined,
  photo: undefined
};

export type UserSet = { type: "SET_USER", payload: UserState };

export const actions = createActions("SET_USER");

export const reducer = handleActions(
  {
    SET_USER: (state: UserState, action: UserSet) => action.payload
  },
  initialState
);
