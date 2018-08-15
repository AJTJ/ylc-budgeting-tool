import React from "react";

import { Container, Row, Col } from "reactstrap";

export default props => (
  <Container>
    <Row>Current Budget</Row>

    <Row>
      <Col>Income</Col>
      <Col>25235</Col>
    </Row>

    <Row>
      <Col>Expenses</Col>
      <Col>{props.expenses}</Col>
    </Row>
  </Container>
);
