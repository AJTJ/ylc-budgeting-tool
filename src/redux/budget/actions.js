import * as constants from "./constants";

import { createAction } from "redux-actions";

const addBudget = createAction([constants.addBudget], budget => budget);

export default {
  addBudget
};
