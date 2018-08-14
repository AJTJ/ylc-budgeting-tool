import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";
import { Card, CardHeader } from "reactstrap";

export const Form = ({ formType }) => {
  const { basicIncome } = formTypes;
  console.log(44, basicIncome);
  return (
    <Card>
      <CardHeader>This is a form</CardHeader>
      <Formik
        component={basicIncome.FormComponent}
        initialValues={basicIncome.defaultFormValues}
      />
    </Card>
  );
};
