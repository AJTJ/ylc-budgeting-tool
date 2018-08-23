import React from "react";
import { Link as RRLink } from "react-router-dom";

import styled from "react-emotion";

import colors from "../../../style/colors";

const StyledLink = styled(RRLink)`
  border: solid 1px ${colors.softBorder};
  padding: 15px;
  margin: 0 15px 0 0;
  background-color: ${props =>
    props.name === "PREVIOUS" ? colors.color6 : colors.color7};
  border-radius: 10px;
  color: white;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export default ({ to, name }) => {
  return (
    <StyledLink name={name} to={to}>
      {name}
    </StyledLink>
  );
};
