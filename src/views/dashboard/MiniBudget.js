import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

export const MiniBudget = props => {
  const { values } = props;
  return (
    <Container>
      <Row>Current Budget</Row>

      <Row>
        <Col>Income</Col>
        <Col>{values.primary_income}</Col>
      </Row>

      <Row>
        <Col>Expenses</Col>
        <Col>{values.rent_mortgage}</Col>
      </Row>
    </Container>
  );
};
