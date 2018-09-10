import React from "react";

import { ResponsivePie as NivoPie } from "@nivo/pie";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "react-emotion";
import colors from "../../style/colors";

import { Container } from "../../components/layout";
// import { ColorIdentifier } from "../../components/deco";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses
} from "../formData/calculation";

const Pie = props => {
  const values = props.values;

  const PieHolder = styled("div")`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const StyledH3 = styled("h3")`
    padding-bottom: 30px;
    font-weight: bold;
    color: ${props => (props.dynamicIncome < 0 ? "red" : "black")};
  `;

  const dynamicIncome =
    income(values) -
    housing(values) -
    transportation(values) -
    living(values) -
    personal(values);

  const PlaceholderPie = [
    {
      id: "placeholderPie",
      label: "Add your income or expenses!",
      value: 1,
      color: "yellow"
    }
  ];

  const PieData = [
    {
      id: "income",
      label: "Available Income",
      value: dynamicIncome,
      color: colors.color1,
      icon: "dollar-sign"
    },
    {
      id: "housing",
      label: "Housing",
      value: housing(values),
      color: colors.color2,
      icon: "home"
    },
    {
      id: "transportation",
      label: "Transportation",
      value: transportation(values),
      color: colors.color3,
      icon: "car"
    },
    {
      id: "living",
      label: "Living",
      value: living(values),
      color: colors.color4,
      icon: "walking"
    },
    {
      id: "personal",
      label: "Personal",
      value: personal(values),
      color: colors.color5,
      icon: "user"
    }
  ];

  // const tooltipHandler = income => {
  //   console.log(income);
  //   if (income === 0) <span>Start by adding your income or expenses!</span>;
  //   return null;
  // };

  return (
    <PieHolder>
      <NivoPie
        //DIMENSIONS
        margin={{
          top: 30,
          bottom: 30,
          right: 115,
          left: 115
        }}
        innerRadius={0.1}
        padAngle={0.05}
        cornerRadius={10}
        colorBy={d => d.color}
        //SLICE LABEL
        sliceLabel={d => `$${d.value}`}
        enableSlicesLabels={income(values) === 0 ? false : true}
        slicesLabelsTextColor={"white"}
        slicesLabelsSkipAngle={1}
        //RADIAL LABEL
        radialLabel={d => {
          return d.label;
        }}
        enableRadialLabels={true}
        radialLabelsSkipAngle={1}
        radialLabelsLinkDiagonalLength={5}
        radialLabelsLinkHorizontalLength={5}
        //DATA
        data={
          income(values) === 0 && totalExpenses(values) === 0
            ? PlaceholderPie
            : PieData
        }
        //TOOLTIP
        // tooltipFormat={tooltipHandler(dynamicIncome)}
      />
      <StyledH3 dynamicIncome={dynamicIncome}>
        {props.curForm === "review" || "budget"
          ? `Remaining Income: $${dynamicIncome}`
          : `Available Income: $${dynamicIncome}`}
      </StyledH3>
    </PieHolder>
  );
};

export default Pie;
