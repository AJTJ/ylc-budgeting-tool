import React from "react";
import { Form } from "reactstrap";

import { BasicInput, LinkButton } from "../components/index";
import { H5Underline } from "../../../style/typography";
import { IconBox } from "../../../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form>
      <H5Underline>
        Income
        <IconBox>
          <FontAwesomeIcon icon="dollar-sign" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Wage Income"
        id="wage_income"
        text="Input your average monthly paycheck or wage here."
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
      <LinkButton to="/Form/housing" name="NEXT" />
    </Form>
  );
};
