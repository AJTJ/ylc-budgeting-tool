import React, { Component } from "react";

import { connect } from "react-redux";

import actions from "./redux/index";

console.log(222, actions);

import { Container, Row, Button, Col } from "reactstrap";
import { Pie } from "@nivo/pie";

let pieData = [
  {
    id: "income",
    value: 45
  },
  {
    id: "expenses",
    value: 55
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>YLC Budgeting tool!!!</Row>
          <Row>
            <Col>
              <Button onClick={this.props.increment} id="increment">
                Inc
              </Button>
              <Button onClick={this.props.decrement} id="decrement">
                Dec
              </Button>
              <div>{this.props.counter}</div>
            </Col>
            <div>
              <Pie data={pieData} height={300} width={300} innerRadius={0.5} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: dispatch("INCREMENT"),
    decrement: dispatch("DECREMENT")
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
