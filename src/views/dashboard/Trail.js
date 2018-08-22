import React from "react";
import { Link } from "react-router-dom";

import { Progress } from "reactstrap";
import styled from "react-emotion";

import colors from "../../style/colors";

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export default props => {
  const curForm = props.curForm;

  const identifier = (curForm, formName) => {
    if (curForm === formName) {
      return "progress-bar-striped progress-bar-animated";
    } else {
      return null;
    }
  };

  return (
    <Progress multi>
      <Progress
        className={identifier(curForm, "income")}
        bar
        color="#FF0000"
        value="20"
      >
        <StyledLink to="/Form/income">Income</StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "housing")}
        bar
        color={colors.color2}
        value="20"
      >
        <StyledLink to="/Form/housing">Housing</StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "transportation")}
        bar
        color={colors.color3}
        value="20"
      >
        <StyledLink to="/Form/transportation">Transportation</StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "living")}
        bar
        color={colors.color4}
        value="20"
      >
        <StyledLink to="/Form/living">Living</StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "personal")}
        bar
        color={colors.color5}
        value="20"
      >
        <StyledLink to="/Form/personal">Personal</StyledLink>
      </Progress>
    </Progress>
  );
};
