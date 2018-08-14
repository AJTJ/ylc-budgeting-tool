import React from "react";

import { Pie as NivoPie } from "@nivo/pie";
import { Button, Col } from "reactstrap";

import { actions } from "../../redux/index";
import { connect } from "react-redux";

const Pie = props => {
  const PieData = [
    {
      id: "income",
      label: "income",
      value: props.counter
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
        <Button onClick={() => props.increment(5)} id="increment">
          Inc
        </Button>
        <Button onClick={() => props.decrement(25)} id="decrement">
          Dec
        </Button>
        <div>{props.counter}</div>
      </Col>
      <Col>
        <NivoPie
          fit={true}
          data={PieData}
          height={300}
          width={300}
          innerRadius={0.5}
        />
      </Col>
    </div>
  );
};

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
)(Pie);
