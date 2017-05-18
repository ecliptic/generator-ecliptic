// @flow
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import React from 'react'
import type {Store} from 'redux'

import Nome from 'Components/Home'
import NotFound from 'Components/NotFound'
import type {State, Action} from 'State/Store'

type Props = {
  store: Store<State, Action>,
  history: Object
}

export default function Index (props: Props) {
  return (
    <Provider store={props.store}>
      <ConnectedRouter history={props.history}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </ConnectedRouter>
    </Provider>
  )
}
