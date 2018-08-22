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

import { Col } from "reactstrap";

import { Container, Row } from "../../components/layout";

const ColorCube = styled("span")`
  align-self: center;
  height: 12px;
  width: 12px;
  border-radius: 20px;
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
        <Col xs={4} sm={4} md={4} lg={4}>
          ${income(values)}
        </Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color2} />
        <Col>Housing Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${housing(values)}
        </Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color3} />
        <Col>Transportation Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${transportation(values)}
        </Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color4} />
        <Col>Living Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${living(values)}
        </Col>
      </Row>

      <Row>
        <ColorCube bgcolor={colors.color5} />
        <Col>Personal Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${personal(values)}
        </Col>
      </Row>
    </Container>
  );
};
