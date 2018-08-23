import React from "react";
import { Link } from "react-router-dom";

import { Progress as RSProgress } from "reactstrap";
import styled from "react-emotion";

import colors from "../../style/colors";

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const Progress = styled(RSProgress)`
  height: 30px;
  background-color: ${props => props.color};
`;

const MainProgress = styled(Progress)`
  margin: 20px 0;
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
    <MainProgress multi>
      <Progress
        className={identifier(curForm, "income")}
        bar
        color={colors.color1}
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
    </MainProgress>
  );
};
