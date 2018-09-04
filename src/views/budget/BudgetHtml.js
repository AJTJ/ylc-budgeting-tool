import React from "react";
import { connect } from "react-redux";

import ReactToPrint from "react-to-print";

const PrintableBudget = props => {
  const newBudget = props.newBudget;
  console.log(props);
  return (
    <div>
      <h1>get yer income</h1>
      <h1>{newBudget.wage_income}</h1>
    </div>
  );
};

export const Budget = props => {
  console.log("budgwrapper", props);
  return (
    <ReactToPrint
      trigger={() => <a href="/budget">Print your budget!</a>}
      content={() => PrintableBudget}
    />
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

export default connect(mapStateToProps)(PrintableBudget);
