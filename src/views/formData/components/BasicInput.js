import React from "react";
import {
  FormGroup,
  Label,
  Input as RSInput,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import { Tooltip } from "../../dashboard/Tooltip";

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
      {props.text ? (
        <React.Fragment>
          {/* <img src="../../../assets/question-mark.svg" id={props.id} alt="" /> */}
          <span id={props.id}>TOOLTIP</span>
          <Tooltip target={props.id} text={props.text} />{" "}
        </React.Fragment>
      ) : null}
    </Col>
    <Col>
      <Component {...props} />
    </Col>
  </FormGroup>
);
