import React from "react";

import styled from "react-emotion";

import colors from "../style/colors";

import { Container as RSContainer, Row as RSRow } from "reactstrap";

export const Container = styled(RSContainer)`
  border: solid ${colors.softBorder} 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

export const Row = styled(RSRow)`
  padding-left: 15px;
`;
