import * as counter from "./counter";

const reducers = {
  ...counter.reducers
};

const actions = {
  ...counter.actions
};

export { reducers, actions };
