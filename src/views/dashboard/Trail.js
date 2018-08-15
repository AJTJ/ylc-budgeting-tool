import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <React.Fragment>
      <Link to="/basicIncome">Basic Income</Link>
      <Link to="/basicExpenses">Basic Expenses</Link>
    </React.Fragment>
  );
};
