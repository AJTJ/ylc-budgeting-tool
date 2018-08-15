import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <React.Fragment>
      <Link to="/Form/basicIncome">Basic Income</Link>
      <Link to="/Form/basicExpenses">Basic Expenses</Link>
    </React.Fragment>
  );
};
