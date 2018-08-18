import * as counter from "./counter/index";
import * as budget from "./budget/index";

const reducers = {
  ...counter.reducer,
  ...budget.reducer
};

const actions = {
  ...counter.actions,
  ...budget.actions
};

export { reducers, actions };
