import { addBudget } from "./constants";

import { handleActions } from "redux-actions";

import { values } from "../../views/formData/values";

const defaultState = values;

const budgetReducer = handleActions(
  {
    [addBudget]: (state, { payload: { values } }) => {
      return { ...values };
    }
  },
  defaultState
);

export default {
  budgetReducer
};
