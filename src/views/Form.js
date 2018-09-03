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

// const ResponsiveRow = styled(Row)``;

const Form = props => {
  let curForm = props.match.params.formType;
  const FormComponent = formTypes[curForm].FormComponent;

  return (
    <Formik
      initialValues={values}
      onSubmit={values => {
        console.log("submitting");
        console.log(values);
        props.addBudget({ values });
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
                <Col xs={6} sm={6} md={6} lg={6}>
                  <MiniBudget {...props} />
                  <Pie {...props} />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Container>
                    <FormComponent {...props} />
                  </Container>
                </Col>
              </Row>
            </MainContainer>
          );
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    newBudget: state.budgetReducer
  };
};

const { addBudget } = actions;

const mapDispatchToProps = {
  addBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
