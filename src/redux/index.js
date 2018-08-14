import * as counter from "./counter/index";

const reducers = {
  ...counter.reducer
};

const actions = {
  ...counter.actions
};

export { reducers, actions };
