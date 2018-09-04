import React from "react";
import { connect } from "react-redux";

import ReactToPrint from "react-to-print";

const PrintableBudget = props => {
  console.log(522, props);
  return (
    <div>
      <h1>get yer income</h1>
      <h1>{props.wage_income}</h1>
    </div>
  );
};

const Budget = props => {
  console.log("budgwrapper", props);
  return (
    <div>
      <ReactToPrint
        trigger={() => <a href="#">Print your budget!</a>}
        content={() => PrintableBudget}
      />
      <PrintableBudget props={props.newBudget} />
    </div>
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

export default connect(mapStateToProps)(Budget);
