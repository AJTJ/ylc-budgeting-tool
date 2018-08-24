import styled from "react-emotion";

export const ColorIdentifier = styled("span")`
  align-self: center;
  height: 12px;
  width: 12px;
  border-radius: 20px;
  background-color: ${props => props.fillColor};
`;
