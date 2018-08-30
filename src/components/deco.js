import styled from "react-emotion";
import colors from "../style/colors";

import { Button as RSButton } from "reactstrap";

export const ColorIdentifier = styled("span")`
  align-self: center;
  height: 12px;
  width: 12px;
  border-radius: 20px;
  background-color: ${props => props.fillColor};
`;

export const StyledButton = styled(RSButton)`
  border-radius: 10px;
  padding: 15px;
  margin: 0 15px 0 0;
  background-color: ${props => {
    if (props.name) {
      return props.name === "PREVIOUS" ? colors.color6 : colors.color7;
    } else {
      return props.color;
    }
  }};
  color: white;
  transition: all 0.2s;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const StyledLink = styled("a")`
  color: white;
  border: solid 1px transparent;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.2s;
  &:hover {
    color: black;
    border-color: black;
    text-decoration: none;
  }
`;
