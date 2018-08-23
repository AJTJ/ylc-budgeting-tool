import React from "react";
import styled from "react-emotion";

import colors from "../../style/colors";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses
} from "../formData/computation";

import { Col } from "reactstrap";

import { Container, Row } from "../../components/layout";

import { H5Underline } from "../../style/typography";

const ColorIdentifier = styled("span")`
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
      <Row className="justify-content-center">
        <H5Underline>Monthly Budget</H5Underline>
      </Row>

      <Row underline="true" className="font-weight-bold">
        <ColorIdentifier bgcolor={colors.color1} />
        <Col>Monthly Income</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${income(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier bgcolor={colors.color2} />
        <Col>Housing</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${housing(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier bgcolor={colors.color3} />
        <Col>Transportation</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${transportation(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier bgcolor={colors.color4} />
        <Col>Living</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${living(values)}
        </Col>
      </Row>

      <Row underline="true">
        <ColorIdentifier bgcolor={colors.color5} />
        <Col>Personal</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${personal(values)}
        </Col>
      </Row>

      <Row className="font-weight-bold">
        <ColorIdentifier bgcolor={"white"} />
        <Col>Monthly Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${totalExpenses(values)}
        </Col>
      </Row>
    </Container>
  );
};
