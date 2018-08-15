import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";
// import { Container, Row, Col } from "reactstrap";

export const Form = ({ formType }) => {
  const { basicIncome } = formTypes;
  return (
    <Formik
      component={basicIncome.FormComponent}
      initialValues={basicIncome.defaultFormValues}
    />
  );
};
