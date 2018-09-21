import React from "react";

import Component from "@reactions/component";

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
  ${ComponentFontSizes};
`;

const InputComponent = ({ name, id, type = "number", ...props }) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
    <RSInput
      {...props}
      placeholder={name}
      name={id}
      type={type}
      autoComplete="off"
    />
    <InputGroupAddon addonType="append">.00</InputGroupAddon>
  </InputGroup>
);

const Input = styled(InputComponent)`
  color: red;
`;

// const BiWeeklyDisplay = money => {
//   // const totalIncome = biWeeklyIncome / 14 * 30
//   return <Row>{money}</Row>;
// };

export default ({ InputComponent = Input, ...props }) => {
  // const calculatedvalue = parseFloat(props.calculatedvalue).toFixed(0);
  return (
    <Component onChange={props.onChange} initialState={{ biWeekly: 0 }}>
      {({ setState, state }) => (
        <React.Fragment>
          <FormGroup row>
            <Col
              className="d-flex align-items-center"
              xs={12}
              sm={12}
              md={12}
              lg={5}
            >
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
            <Col xs={12} sm={12} md={12} lg={7}>
              <InputComponent {...props} />
            </Col>
          </FormGroup>
          <FormGroup row>
            Monthly income from bi-weekly paycheck: ${" "}
            {props.calculatedvalue === "" ? 0 : props.calculatedvalue}
          </FormGroup>
        </React.Fragment>
      )}
    </Component>
  );
};

// onChange={e => {
//   let currentNum = e.target.value;
//   // // console.log(props);
//   // props.onChange(currentNum);
//   // console.log("currentNum", currentNum);
//   setState(() => ({
//     biWeekly: currentNum
//   }));
//   props.onChange;
// }}
