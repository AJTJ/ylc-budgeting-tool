import React from "react";

import { Pie as NivoPie } from "@nivo/pie";

// import { Card } from "reactstrap";
// import toHslString from "tinycolor2";

import styled from "react-emotion";
import colors from "../../style/colors";

import {
  income,
  housing,
  transportation,
  living,
  personal
} from "../formData/computation";

const Pie = props => {
  const { values } = props;

  const PieHolder = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const dynamicIncome =
    income(values) -
    housing(values) -
    transportation(values) -
    living(values) -
    personal(values);

  const PlaceholderPie = [
    {
      id: "Start by adding your income!",
      label: "Start by adding your income!",
      value: 1,
      color: "yellow"
    }
  ];

  const PieData = [
    {
      id: "Remaining Income",
      label: "Remaining Income",
      value: dynamicIncome,
      color: colors.color1
    },
    {
      id: "Housing",
      label: "Housing Expenses",
      value: housing(values),
      color: colors.color2
    },
    {
      id: "Transportation",
      label: "Transportation Expenses",
      value: transportation(values),
      color: colors.color3
    },
    {
      id: "Living Expenses",
      label: "Living Expenses",
      value: living(values),
      color: colors.color4
    },
    {
      id: "Personal Expenses",
      label: "Personal Expenses",
      value: personal(values),
      color: colors.color5
    }
  ];

  return (
    <React.Fragment>
      <PieHolder>
        <NivoPie
          enableSlicesLabels={false}
          borderWidth={0.5}
          sortByValue={true}
          fit={true}
          data={income(values) === 0 ? PlaceholderPie : PieData}
          height={200}
          width={200}
          innerRadius={0.5}
          colorBy={d => d.color}
        />
        <h3>Available Income: ${dynamicIncome}</h3>
      </PieHolder>
    </React.Fragment>
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
