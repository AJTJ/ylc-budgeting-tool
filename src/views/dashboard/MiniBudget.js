import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

class MiniBudget extends Component {
  state = {
    primary_income: "",
    rent_mortgage: ""
  };

  // componentDidUpdate = props => {
  //   const values = props.values;
  //   Object.keys(values).forEach(key => {
  //     console.log(key);
  //     // this.setState({ [key]: values[key] });
  //   });
  // };

  render() {
    console.log(532, this.props);
    return (
      <Container>
        <Row>Current Budget</Row>

        <Row>
          <Col>Income</Col>
          <Col>{this.props.values.primary_income}</Col>
        </Row>

        <Row>
          <Col>Expenses</Col>
          <Col>{this.props.values.rent_mortgage}</Col>
        </Row>
      </Container>
    );
  }
}

export default MiniBudget;
