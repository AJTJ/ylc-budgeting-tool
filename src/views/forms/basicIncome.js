import React from "react";
import { Form } from "reactstrap";

import { BasicInput } from "./components/index";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <BasicInput
        name="Income"
        id="primary_income"
        value={values.primary_income}
        onChange={handleChange}
      />
    </Form>
  );
};
