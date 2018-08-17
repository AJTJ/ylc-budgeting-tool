import React from "react";
import { Form } from "reactstrap";

import { BasicInput } from "../components/index";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <BasicInput
        name="Rent/Mortgage"
        id="rent_mortgage"
        value={values.rent_mortgage}
        onChange={handleChange}
      />
      <BasicInput
        name="Heat"
        id="heat"
        value={values.heat}
        onChange={handleChange}
      />
      <BasicInput
        name="Hydro"
        id="hydro"
        value={values.hydro}
        onChange={handleChange}
      />
      <BasicInput
        name="Cable and Internet"
        id="cable_internet"
        value={values.cable_internet}
        onChange={handleChange}
      />
      <BasicInput
        name="Telephone and Cell Phone"
        id="phone"
        value={values.phone}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_housing"
        value={values.other_housing}
        onChange={handleChange}
      />
    </Form>
  );
};
