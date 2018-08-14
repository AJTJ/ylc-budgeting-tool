import React from "react";
import { Form } from "reactstrap";

import { BasicInput } from "./components/index";

export const defaultFormValues = {
  rent_mortgage: ""
};

export const FormComponent = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <BasicInput
        name="Rent/Mortgage"
        id="rent_mortgage"
        value={values.rent_mortgage}
        onChange={handleChange}
      />
    </Form>
  );
};
