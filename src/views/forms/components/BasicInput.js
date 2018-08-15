import React from "react";
import { FormGroup, Label, Input as RSInput, Col } from "reactstrap";

const Input = ({ name, id, type = "text", ...props }) => (
  <RSInput {...props} placeholder={name} name={id} type={type} />
);

export default ({ Component = Input, ...props }) => (
  <FormGroup row>
    <Col>
      <Label>{props.name}</Label>
    </Col>
    <Col>
      <Component {...props} />
    </Col>
  </FormGroup>
);
