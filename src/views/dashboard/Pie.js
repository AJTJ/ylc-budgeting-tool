import React from "react";

import { Pie as NivoPie } from "@nivo/pie";

import {
  income,
  housing,
  transportation,
  living,
  personal
} from "../formData/computation";
// import { Button, Col } from "reactstrap";
// import { actions } from "../../redux/index";
// import { connect } from "react-redux";

const Pie = props => {
  const { values } = props;

  const PieData = [
    {
      id: "Income",
      label: "Income",
      value: income(values)
    },
    {
      id: "Housing",
      label: "Housing",
      value: housing(values)
    },
    {
      id: "Transportation",
      label: "Transportation",
      value: transportation(values)
    },
    {
      id: "Living Expenses",
      label: "Living Expenses",
      value: living(values)
    },
    {
      id: "Personal Expenses",
      label: "Personal Expenses",
      value: personal(values)
    }
  ];

  return (
    <NivoPie
      enableSlicesLabels={false}
      borderWidth={0.5}
      sortByValue={true}
      fit={true}
      data={PieData}
      height={400}
      width={400}
      innerRadius={0.5}
    />
  );
};

export default Pie;

// const mapStateToProps = state => {
//   return {
//     counter: state.counterReducer.counter
//   };
// };

// const { increment, decrement } = actions;

// const mapDispatchToProps = {
//   increment,
//   decrement
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Pie);
