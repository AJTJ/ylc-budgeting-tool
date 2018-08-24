import React from "react";
import { Form, Row } from "reactstrap";

import { BasicInput, LinkButton, SubmitButton } from "../components/index";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form>
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/personal" name="PREVIOUS" />
        <SubmitButton
          handleSubmit={handleSubmit}
          name="Print a PDF of your budget!"
          values={values}
        />
      </Row>
    </Form>
  );
};
