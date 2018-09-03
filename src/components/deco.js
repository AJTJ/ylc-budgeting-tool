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
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.darkBlue};
  font-weight: 700;
  /* border-bottom: solid 1px transparent; */
  border-right: 1px solid ${colors.darkBlue};
  border-left: 1px solid ${colors.darkBlue};
  /* border-radius: 4px; */
  background: transparent;
  padding: 5px 20px;
  margin: 5px;
  transition: all 0.4s;
  &:hover {
    color: black;
    /* background: linear-gradient(transparent 70%, white); */
    /* border-bottom: solid 1px white; */
    text-decoration: none;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-radius: 10px;
  }
`;
