import React from "react";
import { Container as RSContainer } from "reactstrap";

import styled from "react-emotion";

// import { Row } from "../../components/layout";
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
      <StyledLink href="google.com">
        <span>Download a budget workbook</span>
      </StyledLink>
      <StyledLink href="yukonliteracycoalition.com">
        <span>The YLC Financial Literacy Homepage</span>
      </StyledLink>
    </Container>
  </FooterBar>
);
