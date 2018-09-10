import React from "react";

import colors from "../../style/colors";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses
} from "../formData/calculation";

import { Col } from "reactstrap";

import styled from "react-emotion";

import { Container, Row as StyledRow } from "../../components/layout";
import { ColorIdentifier } from "../../components/deco";
import { H5Underline } from "../../style/typography";
import { ComponentFontSizes } from "../../style/mediaQueries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBox = styled("div")`
  display: inline-block;
  text-align: center;
  width: 40px;
`;

const Row = styled(StyledRow)`
  ${ComponentFontSizes};
`;

export const MiniBudget = props => {
  const { values } = props;
  return (
    <Container>
      <Row className="justify-content-center">
        <H5Underline>Monthly Budget</H5Underline>
      </Row>

      <Row underline="true" className="font-weight-bold">
        <ColorIdentifier fillColor={colors.color1} />
        <Col>
          <IconBox>
            <FontAwesomeIcon icon="dollar-sign" />
          </IconBox>
          Monthly Income
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${income(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier fillColor={colors.color2} />
        <Col>
          <IconBox>
            <FontAwesomeIcon icon="home" />
          </IconBox>
          Housing
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${housing(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier fillColor={colors.color3} />
        <Col>
          <IconBox>
            <FontAwesomeIcon icon="car" />
          </IconBox>
          Transportation
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${transportation(values)}
        </Col>
      </Row>

      <Row>
        <ColorIdentifier fillColor={colors.color4} />
        <Col>
          <IconBox>
            <FontAwesomeIcon icon="walking" />
          </IconBox>
          Living
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${living(values)}
        </Col>
      </Row>

      <Row underline="true">
        <ColorIdentifier fillColor={colors.color5} />
        <Col>
          <IconBox>
            <FontAwesomeIcon icon="user" />
          </IconBox>
          Personal
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${personal(values)}
        </Col>
      </Row>

      <Row className="font-weight-bold">
        <ColorIdentifier fillColor={"white"} />
        <IconBox />
        <Col>Monthly Expenses</Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          ${totalExpenses(values)}
        </Col>
      </Row>
    </Container>
  );
};
