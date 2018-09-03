import React from "react";

import { Button as RSButton } from "reactstrap";

import styled from "react-emotion";

import colors from "../../../style/colors";

const StyledButton = styled(RSButton)`
  border: solid 1px ${colors.softBorder};
  padding: 15px;
  margin: 0 15px 0 0;
  background-color: ${colors.color1};
  border-radius: 10px;
  color: white;
  &:hover {
    color: black;
    background: white;
    text-decoration: none;
  }
`;

export default ({ handleSubmit, name, values }) => {
  return (
    <StyledButton onClick={values => handleSubmit(values)}>{name}</StyledButton>
  );
};
