import React from "react";
import { Form } from "reactstrap";

import { BasicInput, LinkButton } from "../components/index";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form>
      <BasicInput
        name="Food"
        id="food"
        value={values.food}
        onChange={handleChange}
      />
      <BasicInput
        name="Clothing and Laundry"
        id="clothing_laundry"
        value={values.clothing_laundry}
        onChange={handleChange}
      />
      <BasicInput
        name="Childcare"
        id="childcare"
        value={values.childcare}
        onChange={handleChange}
      />
      <BasicInput
        name="Loan Payment"
        id="loan_payment"
        value={values.loan_payment}
        onChange={handleChange}
      />
      <BasicInput
        name="Credit Card Payments"
        id="credit_card"
        value={values.credit_card}
        onChange={handleChange}
      />
      <BasicInput
        name="Prescription Drugs"
        id="prescription_drugs"
        value={values.prescription_drugs}
        onChange={handleChange}
      />
      <BasicInput
        name="Pets"
        id="pets"
        value={values.pets}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_living_expenses"
        value={values.other_living_expenses}
        onChange={handleChange}
      />
      <LinkButton to="/Form/transportation" name="PREVIOUS" />
      <LinkButton to="/Form/personal" name="NEXT" />
    </Form>
  );
};
