import React from "react";
import { Container as RSContainer } from "reactstrap";

import styled from "react-emotion";

import { StyledLink } from "../../components/deco";
import { ComponentFontSizes } from "../../style/mediaQueries";

import colors from "../../style/colors";

const FooterBar = styled("div")`
  background-color: ${colors.cyan};
  height: 60px;
  ${ComponentFontSizes};
`;

const Container = styled(RSContainer)`
  height: 100%;
  display: flex;
  align-content: center;
`;

export default () => (
  <FooterBar>
    <Container className="d-flex justify-content-around">
      <StyledLink
        target="_blank"
        href="http://www.yukonliteracy.com/financial-literacy-workshops.html"
      >
        <span>The YLC Financial Literacy Homepage</span>
      </StyledLink>
    </Container>
  </FooterBar>
);
