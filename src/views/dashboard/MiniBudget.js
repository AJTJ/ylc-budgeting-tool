import React from "react";

import { Container, Row, Col } from "reactstrap";

export default props => {
  console.log(props);
  return (
    <Container>
      <Row>Current Budget</Row>

      <Row>
        <Col>Income</Col>
        <Col>{props.primary_income}</Col>
      </Row>

      <Row>
        <Col>Expenses</Col>
        <Col>{props.rent_mortgage}</Col>
      </Row>
    </Container>
  );
};
