import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore, combineReducers } from "redux";

import { reducers } from "./redux/index";

const store = createStore(combineReducers(reducers));
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
