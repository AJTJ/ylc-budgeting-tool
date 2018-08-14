import React from "react";
import { FormGroup, Label, Input as RSInput } from "reactstrap";

const Input = ({ name, id, type = "text", ...props }) => (
  <RSInput {...props} placeholder={name} name={id} type={type} />
);

export default ({ Component = Input, ...props }) => (
  <FormGroup row>
    <Label>{props.name}</Label>
    <Component {...props} />
  </FormGroup>
);
