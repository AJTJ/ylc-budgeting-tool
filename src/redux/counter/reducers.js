import { increment, decrement } from "./constants";
import { handleActions, combineActions } from "redux-actions";
// import { combineReducers } from "redux";

const defaultState = {
  counter: 35
};

const counterReducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);

//use combine reducers if there is more than one

export default {
  counterReducer
};
