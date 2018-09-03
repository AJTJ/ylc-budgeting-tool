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
        text="Type your average monthly paycheck or wage here."
        value={values.wage_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Self Employment Income"
        id="self_employment_income"
        text="If you are self-employed, then this is where you put the average amount you make a month."
        value={values.self_employment_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Government Benefits"
        id="government_benefits"
        text="If you receive government benefits, then put your average monthly benefits here."
        value={values.government_benefits}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income"
        text="This is an extra space for any other type of income you receive. :)"
        value={values.other_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income_2"
        text="And here is ANOTHER extra space for any other money you are making! :)"
        value={values.other_income_2}
        onChange={handleChange}
      />
      <LinkButton to="/Form/housing" name="NEXT" />
    </Form>
  );
};
