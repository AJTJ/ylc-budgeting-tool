import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";

export const Form = props => {
  const curForm = formTypes[props.match.params.formType];
  const FormComponent = curForm.FormComponent;
  const values = curForm.defaultFormValues;
  return (
    <Formik
      initialValues={values}
      render={({ ...props }) => (
        <React.Fragment>
          <FormComponent {...props} />
          <MiniBudget {...props} />
          <Pie {...props} />
        </React.Fragment>
      )}
    />
  );
};
