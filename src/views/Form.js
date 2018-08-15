import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";

export const Form = formType => {
  const curForm = formTypes[formType.match.params.formType];
  return (
    <Formik
      component={curForm.FormComponent}
      initialValues={curForm.defaultFormValues}
    />
  );
};
