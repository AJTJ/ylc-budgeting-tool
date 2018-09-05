import React from "react";
import { Container as RSContainer } from "reactstrap";

import styled from "react-emotion";

import { StyledLink } from "../../components/deco";

import colors from "../../style/colors";

const FooterBar = styled("div")`
  background-color: ${colors.cyan};
  height: 60px;
`;

const Container = styled(RSContainer)`
  height: 100%;
  display: flex;
  align-content: center;
`;

export default () => (
  <FooterBar>
    <Container>
      <StyledLink href="http://www.google.com/">
        <span>Download a budget workbook</span>
      </StyledLink>
      <StyledLink target="_blank" href="http://www.yukonliteracy.com/">
        <span>The YLC Financial Literacy Homepage</span>
      </StyledLink>
      <StyledLink target="_blank" href="http://www.google.com/">
        <span>Start a new budget</span>
      </StyledLink>
    </Container>
  </FooterBar>
);
