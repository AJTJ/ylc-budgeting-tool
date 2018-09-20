import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/genericCss.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHome,
  faCar,
  faWalking,
  faUser,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";

import { createStore, combineReducers } from "redux";

import { reducers } from "./redux/index";

library.add(faDollarSign, faHome, faCar, faWalking, faUser, faChartPie);

export const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

render(
  <Provider store={store}>
    <BrowserRouter basename="/ylcBudget">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
