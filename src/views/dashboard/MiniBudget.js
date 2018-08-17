import React from "react";

import {
  income,
  housing,
  transportation,
  living,
  personal
} from "../formData/computation";

import { Container, Row, Col } from "reactstrap";

export const MiniBudget = props => {
  const { values } = props;
  return (
    <Container>
      <Row>Current Budget</Row>

      <Row>
        <Col>Income</Col>
        <Col>${income(values)}</Col>
      </Row>

      <Row>
        <Col>Housing Expenses</Col>
        <Col>${housing(values)}</Col>
      </Row>

      <Row>
        <Col>Transportation Expenses</Col>
        <Col>${transportation(values)}</Col>
      </Row>

      <Row>
        <Col>Living Expenses</Col>
        <Col>${living(values)}</Col>
      </Row>

      <Row>
        <Col>Personal Expenses</Col>
        <Col>${personal(values)}</Col>
      </Row>
    </Container>
  );
};
