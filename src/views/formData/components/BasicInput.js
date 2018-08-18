import React from "react";
import {
  FormGroup,
  Label,
  Input as RSInput,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

const Input = ({ name, id, type = "number", ...props }) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
    <RSInput {...props} placeholder={name} name={id} type={type} />
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
  </InputGroup>
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
