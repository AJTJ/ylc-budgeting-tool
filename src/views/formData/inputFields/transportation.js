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
        name="Car"
        id="car"
        value={values.car}
        onChange={handleChange}
      />
      <BasicInput
        name="Gas"
        id="gas"
        value={values.gas}
        onChange={handleChange}
      />
      <BasicInput
        name="Parking"
        id="parking"
        value={values.parking}
        onChange={handleChange}
      />
      <BasicInput
        name="Public Transport"
        id="public_transport"
        value={values.public_transport}
        onChange={handleChange}
      />
      <BasicInput
        name="Taxicabs"
        id="taxi"
        value={values.taxi}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_transport"
        value={values.other_transport}
        onChange={handleChange}
      />
      <LinkButton to="/Form/housing" name="PREVIOUS" />
      <LinkButton to="/Form/living" name="NEXT" />
    </Form>
  );
};
