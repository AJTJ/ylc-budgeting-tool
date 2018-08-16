import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";

import Pie from "./dashboard/Pie";
import MiniBudget from "./dashboard/MiniBudget";

export const Form = props => {
  const curForm = formTypes[props.match.params.formType];
  const FormComponent = curForm.FormComponent;
  const values = curForm.defaultFormValues;
  console.log("values", values);
  const updateDashboard = props.updateDashboard;
  return (
    <Formik
      initialValues={values}
      render={({ ...props }) => (
        <React.Fragment>
          <FormComponent {...props} />
          {/* <Pie {...props} /> */}
          <MiniBudget {...props} />
        </React.Fragment>
      )}
    />
  );
};
