import React from "react";
import {
  FormGroup,
  Label,
  Input as RSInput,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import styled from "react-emotion";

import help from "../../../assets/help.svg";

import { Tooltip } from "../../dashboard/Tooltip";

const Question = styled("img")`
  height: 20px;
  width: 20px;
  margin: 5px;
`;

const Input = ({ name, id, type = "number", ...props }) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
    <RSInput {...props} placeholder={name} name={id} type={type} />
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
  </InputGroup>
);

export default ({ Component = Input, ...props }) => (
  <FormGroup row>
    <Col className="d-flex align-items-center">
      <Label className="m-0">{props.name}</Label>
      {props.text ? (
        <React.Fragment>
          <Question src={help} alt="Question Mark Icon" id={props.id} />
          <Tooltip target={props.id} text={props.text} />
        </React.Fragment>
      ) : null}
    </Col>
    <Col>
      <Component {...props} />
    </Col>
  </FormGroup>
);
