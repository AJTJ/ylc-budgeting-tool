import React from "react";

import { Pie as NivoPie } from "@nivo/pie";
// import { Button, Col } from "reactstrap";

// import { actions } from "../../redux/index";
// import { connect } from "react-redux";

const Pie = props => {
  const { values } = props;

  const doesExist = id => {
    if (values[id] === undefined) {
      return 0;
    } else {
      return Number(values[id]);
    }
  };

  const PieData = [
    {
      id: "primary_income",
      label: "Income",
      value: doesExist("primary_income")
    },
    {
      id: "rent_mortgage",
      label: "rent/mortgage",
      value: doesExist("rent_mortgage")
    }
  ];

  return (
    <NivoPie
      enableSlicesLabels={false}
      borderWidth={0.5}
      sortByValue={true}
      fit={true}
      data={PieData}
      height={300}
      width={300}
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
