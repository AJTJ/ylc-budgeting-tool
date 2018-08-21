import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <React.Fragment>
      <Link to="/Form/income">Income</Link>
      <Link to="/Form/housing">Housing</Link>
      <Link to="/Form/transportation">Transportation</Link>
      <Link to="/Form/living">Living</Link>
      <Link to="/Form/personal">Personal</Link>
      <Link to="/budgetPDF.pdf">BudgetPDF</Link>
    </React.Fragment>
  );
};
