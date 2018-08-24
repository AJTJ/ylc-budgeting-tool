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
        name="Recreation and Entertainment"
        id="recreation_entertainment"
        value={values.recreation_entertainment}
        onChange={handleChange}
      />
      <BasicInput
        name="Eating Out"
        id="eating_out"
        value={values.eating_out}
        onChange={handleChange}
      />
      <BasicInput
        name="Cigaretted and alcohol"
        id="cigarettes_alcohol"
        value={values.cigarettes_alcohol}
        onChange={handleChange}
      />
      <BasicInput
        name="Personal Grooming"
        id="personal_grooming"
        value={values.personal_grooming}
        onChange={handleChange}
      />
      <BasicInput
        name="Magazines and newspapers"
        id="magazines_newspapers"
        value={values.magazines_newspapers}
        onChange={handleChange}
      />
      <BasicInput
        name="Gifts and donations"
        id="gifts_donations"
        value={values.gifts_donations}
        onChange={handleChange}
      />
      <BasicInput
        name="Vacation and travel"
        id="vacation_travel"
        value={values.vacation_travel}
        onChange={handleChange}
      />
      <BasicInput
        name="Additional saving goals"
        id="saving_goals"
        value={values.saving_goals}
        onChange={handleChange}
      />
      <LinkButton to="/Form/living" name="PREVIOUS" />
      <LinkButton to="/Form/review" name="NEXT" />
    </Form>
  );
};
