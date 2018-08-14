import { createActions } from "redux-actions";
import * as constants from "./constants";

const { increment, decrement } = createActions({
  [constants.increment]: (amount = 1) => ({ amount }),
  [constants.decrement]: (amount = 1) => ({ amount: -amount })
});

export default {
  increment,
  decrement
};
