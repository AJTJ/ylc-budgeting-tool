import React from "react";

import { Formik } from "formik";
import formTypes from "./forms/index";

import { Card, CardHeader } from "reactstrap";

export const Form = () => (
  <Card>
    <CardHeader>This is a form</CardHeader>
    <Formik component={formTypes} initialValues={formTypes.defaultFormValues} />
  </Card>
);
