import React from "react";
import { Form, Row } from "reactstrap";

import { BasicInput, LinkButton, BiWeeklyInput } from "../components/index";
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
        name="Wage income"
        id="wage_income"
        text="Your net pay, not gross pay."
        value={values.wage_income}
        onChange={handleChange}
      />
      <BiWeeklyInput
        name="Bi-weekly paycheck"
        id="bi_weekly_paycheck"
        text="Do you receive a bi-weekly paycheck? Type the check amount here and your approximate monthly income will appear beside it."
        // biWeekly="true"
        value={values.bi_weekly_paycheck}
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
        text="Such as child care, pension, disability, worker's compensation etc..."
        value={values.government_benefits}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income"
        text="Such as babysitting, dog walking, gifts etc..."
        value={values.other_income}
        onChange={handleChange}
      />
      <BasicInput
        name="Other Income"
        id="other_income_2"
        text="Such as babysitting, dog walking, gifts etc..."
        value={values.other_income_2}
        onChange={handleChange}
      />
      <Row className="d-flex flex-row-reverse" style={{ paddingLeft: "15px" }}>
        <LinkButton to="/Form/housing" name="NEXT" />
      </Row>
    </Form>
  );
};
