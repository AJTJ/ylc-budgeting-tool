import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";

export const Form = props => {
  const curForm = formTypes[props.match.params.formType];
  const FormComponent = curForm.FormComponent;

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
