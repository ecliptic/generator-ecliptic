// @flow
import "../styles/styles.scss";

import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";
import createHistory from "history/createBrowserHistory";
import React from "react";

import { createStore } from "State/Store";
import Index from "Containers/Index";

const history = createHistory();
const store = createStore({}, history);

function mount(IndexComponent) {
  render(
    <AppContainer>
      <IndexComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById("app")
  );
}

mount(Index);

if (module.hot) {
  module.hot.accept("./Containers/Index", () => {
    mount(require("./Containers/Index").default);
  });
  module.hot.accept("./State/Store", () => {
    store.replaceReducer(require("./State/Store").reducer);
  });
}
