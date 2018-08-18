import React from "react";
import styled from "react-emotion";

import colors from "../../style/colors";

import {
  income,
  housing,
  transportation,
  living,
  personal
} from "../formData/computation";

import { Container, Row, Col } from "reactstrap";

const ColorCube = styled("span")`
  align-self: center;
  height: 10px;
  width: 10px;
  background-color: ${props => props.bgcolor};
`;

export const MiniBudget = props => {
  const { values } = props;
  return (
    <Container>
      <Row>Current Budget</Row>

      <Row>
        <ColorCube bgcolor={colors.color1} />
        <Col>Income</Col>
        <Col>${income(values)}</Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color2} />
        <Col>Housing Expenses</Col>
        <Col>${housing(values)}</Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color3} />
        <Col>Transportation Expenses</Col>
        <Col>${transportation(values)}</Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color4} />
        <Col>Living Expenses</Col>
        <Col>${living(values)}</Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color5} />
        <Col>Personal Expenses</Col>
        <Col>${personal(values)}</Col>
      </Row>
    </Container>
  );
};
