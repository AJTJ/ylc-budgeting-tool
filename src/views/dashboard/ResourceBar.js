import React from "react";
import { Container } from "reactstrap";

import styled from "react-emotion";

// import { Row } from "../../components/layout";
import { StyledLink } from "../../components/deco";

import colors from "../../style/colors";

const FooterBar = styled("div")`
  background-color: ${colors.softBorder};
  padding: 20px 0;
`;

export default () => (
  <FooterBar>
    <Container>
      <StyledLink href="google.com">Download a budget workbook</StyledLink>
    </Container>
  </FooterBar>
);
