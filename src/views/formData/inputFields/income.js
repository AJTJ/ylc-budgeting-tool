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
    <Form>
      <BasicInput
        name="Wage Income"
        id="wage_income"
        text="tooltip text here"
        value={values.wage_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Self Employment Income"
        id="self_employment_income"
        value={values.self_employment_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Government Benefits"
        id="government_benefits"
        value={values.government_benefits}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income"
        value={values.other_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income_2"
        value={values.other_income_2}
        onChange={handleChange}
      />
    </Form>
  );
};
