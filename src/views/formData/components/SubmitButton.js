import React from "react";

// import { Button as RSButton } from "reactstrap";

import styled from "react-emotion";

import colors from "../../../style/colors";

const StyledButton = styled("a")`
  border: solid 1px ${colors.softBorder};
  padding: 15px;
  margin: 0 15px 0 0;
  background-color: ${colors.color1};
  border-radius: 10px;
  color: white;
  transition: all 0.2s;
  &:hover {
    color: black;
    background: white;
    text-decoration: none;
  }
`;

export default ({ name, href, target, handleSubmit }) => {
  return (
    <StyledButton
      href={href}
      target={target}
      onClick={values => handleSubmit(values)}
    >
      {name}
    </StyledButton>
  );
};
