import * as budget from "./budget/index";

const reducers = {
  ...budget.reducer
};

const actions = {
  ...budget.actions
};

export { reducers, actions };
