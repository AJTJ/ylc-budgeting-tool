import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";
import Trail from "../views/dashboard/Trail";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Col, Row } from "reactstrap";
import { Container } from "../components/layout";
import { H1Title } from "../style/typography";
import styled from "react-emotion";

const MainContainer = styled(Container)`
  border: none;
  margin: 10px auto;
  padding: none;
`;

const Form = props => {
  let curForm = props.match.params.formType;
  const FormComponent = formTypes[curForm].FormComponent;

  console.log(666, props);

  return (
    <Formik
      initialValues={values}
      onSubmit={values => {
        props.addBudget({ values });
        console.log(values);
        /* 
        open a new tab with the full-page budget component.
        - it will take the 'values' prop
        - it will be the exact size for printing 8.5 x 11 (no larger OR smaller)
        - it can also take the pie, potentially
        */
      }}
      render={({ ...props }) => {
        if (curForm === "review") {
          return (
            <MainContainer>
              <H1Title className="text-center">
                THE YLC BUDGETING APPLICATION
              </H1Title>
              <Trail {...props} curForm={curForm} />
              <Col className="justify-content-center">
                <Row>
                  <Col xs={5} sm={5} md={5} lg={5}>
                    <MiniBudget {...props} curForm={curForm} />
                  </Col>
                  <Col>
                    <Pie {...props} curForm={curForm} />
                  </Col>
                </Row>
                <Row>
                  <Container>
                    <FormComponent {...props} curForm={curForm} />
                  </Container>
                </Row>
              </Col>
            </MainContainer>
          );
        } else {
          return (
            <MainContainer>
              <H1Title className="text-center">
                THE YLC BUDGETING APPLICATION
              </H1Title>
              <Trail {...props} curForm={curForm} />
              <Row className="justify-content-center">
                <Col xs={5} sm={5} md={5} lg={5}>
                  <MiniBudget {...props} curForm={curForm} />
                  <Pie {...props} curForm={curForm} />
                </Col>
                <Col xs={7} sm={7} md={7} lg={7}>
                  <Container>
                    <FormComponent {...props} curForm={curForm} />
                  </Container>
                </Col>
              </Row>
              <Row>
                <a target="_blank" href="/budget">
                  BUDGET BUTTON
                </a>
              </Row>
            </MainContainer>
          );
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

const { addBudget } = actions;

const mapDispatchToProps = {
  addBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
