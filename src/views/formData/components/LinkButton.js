import React from "react";
import { Link } from "react-router-dom";
import { Button as RSButton } from "reactstrap";

import styled from "react-emotion";

import colors from "../../../style/colors";

const StyledButton = styled(RSButton)`
  border: solid 1px ${colors.softBorder};
  /* height: 60px; */
  /* width: 90px; */
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
    <Link to={to}>
      <StyledButton name={name}>{name}</StyledButton>
    </Link>
  );
};
