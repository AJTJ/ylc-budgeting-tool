import React from "react";

import { Pie as NivoPie } from "@nivo/pie";

import styled from "react-emotion";
import colors from "../../style/colors";

import { Container } from "../../components/layout";

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
      id: "Income",
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
      id: "Living",
      label: "Living Expenses",
      value: living(values),
      color: colors.color4
    },
    {
      id: "Personal",
      label: "Personal Expenses",
      value: personal(values),
      color: colors.color5
    }
  ];

  return (
    <Container>
      <PieHolder>
        <NivoPie
          padAngle={0.2}
          cornerRadius={10}
          sliceLabel={d => `${d.id} $${d.value}`}
          enableSlicesLabels={income(values) === 0 ? false : true}
          slicesLabelsSkipAngle={80}
          slicesLabelsTextColor={"white"}
          enableRadialLabels={false}
          radialLabelsLinkDiagonalLength={0}
          fit={true}
          data={income(values) === 0 ? PlaceholderPie : PieData}
          height={250}
          width={250}
          innerRadius={0.2}
          colorBy={d => d.color}
        />
        <h3>Available Income: ${dynamicIncome}</h3>
      </PieHolder>
    </Container>
  );
};

export default Pie;
