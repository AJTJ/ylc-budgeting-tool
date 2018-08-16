import React from "react";
import { Form } from "reactstrap";

import { BasicInput } from "./components/index";

export const defaultFormValues = {
  primary_income: "",
  secondary_income: ""
};

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <BasicInput
        name="Primary Income"
        id="primary_income"
        value={values.primary_income}
        onChange={handleChange}
      />
    </Form>
  );
};
