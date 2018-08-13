import React, { Component } from "react";

import { connect } from "react-redux";

import { actions } from "./redux/reducers/index";

import { Button, Col } from "reactstrap";
import { Pie } from "@nivo/pie";

class App extends Component {
  render() {
    let pieData = [
      {
        id: "income",
        label: "income",
        value: this.props.counter
      },
      {
        id: "expenses",
        label: "expenses",
        value: 55
      }
    ];
    return (
      <div>
        <Col>
          <Button onClick={() => this.props.increment(5)} id="increment">
            Inc
          </Button>
          <Button onClick={() => this.props.decrement(25)} id="decrement">
            Dec
          </Button>
          <div>{this.props.counter}</div>
        </Col>
        <Col>
          <Pie
            fit={true}
            data={pieData}
            height={300}
            width={300}
            innerRadius={0.5}
          />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  };
};

const { increment, decrement } = actions;

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
