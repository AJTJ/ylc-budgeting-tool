import React from "react";

import { Pie as NivoPie } from "@nivo/pie";

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
      id: "placeholderPie",
      label: "Add your income or expenses!",
      value: 1,
      color: "yellow"
    }
  ];

  const PieData = [
    {
      id: "income",
      label: "Remaining Income",
      value: dynamicIncome,
      color: colors.color1
    },
    {
      id: "housing",
      label: "Housing Expenses",
      value: housing(values),
      color: colors.color2
    },
    {
      id: "transportation",
      label: "Transportation Expenses",
      value: transportation(values),
      color: colors.color3
    },
    {
      id: "living",
      label: "Living Expenses",
      value: living(values),
      color: colors.color4
    },
    {
      id: "personal",
      label: "Personal Expenses",
      value: personal(values),
      color: colors.color5
    }
  ];

  return (
    <Container>
      <PieHolder>
        <NivoPie
          //DIMENSIONS
          margin={{
            top: 30,
            bottom: 30,
            right: 80,
            left: 80
          }}
          height={350}
          width={500}
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
            if (d.id === "placeholderPie") {
              return `${d.label}`;
            } else {
              return `${d.label} $${d.value}`;
            }
          }}
          enableRadialLabels={true}
          radialLabelsSkipAngle={1}
          radialLabelsLinkDiagonalLength={5}
          radialLabelsLinkHorizontalLength={5}
          //TOOLTIP
          // tooltip={d => {
          //   if (d.id === "placeholderPie") {
          //     return `${d.label}`;
          //   } else {
          //     return (
          //       <p>
          //         <ColorIdentifier fillColor={d.color} />
          //         {d.label} ${d.value}
          //       </p>
          //     );
          //   }
          // }}
          //DATA
          data={
            income(values) === 0 && totalExpenses(values) === 0
              ? PlaceholderPie
              : PieData
          }
        />
        <h3>Available Income: ${dynamicIncome}</h3>
      </PieHolder>
    </Container>
  );
};

export default Pie;
