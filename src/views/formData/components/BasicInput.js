import React from "react";
import {
  FormGroup as RSFormGroup,
  Label as RSLabel,
  Input as RSInput,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import styled from "react-emotion";
import { ComponentFontSizes } from "../../../style/mediaQueries";

import help from "../../../assets/help.svg";

import { Tooltip } from "../../dashboard/Tooltip";

const Label = styled(RSLabel)`
  ${ComponentFontSizes};
`;

const Question = styled("img")`
  height: 20px;
  width: 20px;
  margin: 2px;
`;

const FormGroup = styled(RSFormGroup)`
  margin: 10px 0 30px;
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
    <Col className="d-flex align-items-center" xs={5} sm={5} md={5} lg={5}>
      {props.text ? (
        <React.Fragment>
          <Col xs={10} sm={10} md={10} lg={10}>
            <Label className="m-0">{props.name}</Label>
          </Col>
          <Question src={help} alt="Question Mark Icon" id={props.id} />
          <Tooltip target={props.id} text={props.text} />
        </React.Fragment>
      ) : (
        <Label className="m-0">{props.name}</Label>
      )}
    </Col>
    <Col xs={7} sm={7} md={7} lg={7}>
      <Component {...props} />
    </Col>
  </FormGroup>
);
