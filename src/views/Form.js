import React from "react";
import Component from "@reactions/component";

import { Formik } from "formik";
import formTypes from "./forms/index";

export const Form = props => {
  const curForm = formTypes[props.match.params.formType];
  const FormComponent = curForm.FormComponent;
  const values = curForm.defaultFormValues;
  const updateDashboard = props.updateDashboard;
  return <Formik component={FormComponent} initialValues={values} />;
};
