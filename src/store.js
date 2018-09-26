import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./redux/index";

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;
