import { createStore, combineReducers } from "redux";

import { reducers } from "./reducers/index";

const store = createStore(combineReducers(reducers));

console.log(store);

window.store = store;

export default store;
