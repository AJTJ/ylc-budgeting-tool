import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";
import Trail from "../views/dashboard/Trail";
import Budget from "../views/budget/BudgetHtml";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Col, Row, Container as RSContainer } from "reactstrap";
import { Container } from "../components/layout";
import { H5Underline, H4Title } from "../style/typography";

import styled from "react-emotion";

import ylcLogo from "../assets/ylcLogo.png";

const MainContainer = styled(Container)`
  border: none;
  margin: 10px auto;
  padding: none;
`;

const ImageContainer = styled(RSContainer)`
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const Form = props => {
  let curForm = props.match.params.formType;
  let FormComponent =
    curForm === "budget" ? null : formTypes[curForm].FormComponent;

  return (
    <Formik
      initialValues={values}
      onSubmit={values => {
        props.addBudget({ values });
        props.history.push("/Form/budget");
      }}
      // onSubmit={values => {
      //   props.addBudget({ values }).then(props.history.push("/Form/budget"));
      // }}
      render={({ ...props }) => {
        if (curForm === "review") {
          return (
            <MainContainer>
              <ImageContainer>
                <img src={ylcLogo} alt="" />
                <H4Title>Budgeting Application</H4Title>
              </ImageContainer>
              <Trail {...props} curForm={curForm} />
              <Col className="justify-content-center">
                <Row>
                  <Container>
                    <FormComponent {...props} curForm={curForm} />
                  </Container>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={5}>
                    <MiniBudget {...props} curForm={curForm} />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={7}>
                    <Container>
                      <H5Underline>Review</H5Underline>
                      <Pie {...props} curForm={curForm} />
                    </Container>
                  </Col>
                </Row>
              </Col>
            </MainContainer>
          );
        } else if (curForm === "budget") {
          return (
            <MainContainer>
              <Budget />
            </MainContainer>
          );
        } else {
          return (
            <MainContainer>
              <ImageContainer>
                <img src={ylcLogo} alt="" />
                <H4Title>Budgeting Application</H4Title>
              </ImageContainer>
              <Trail {...props} curForm={curForm} />
              <Row className="d-flex justify-content-center">
                <Col xs={12} sm={12} md={12} lg={7}>
                  <Container>
                    <FormComponent {...props} curForm={curForm} />
                  </Container>
                </Col>
                <Col xs={12} sm={12} md={12} lg={5}>
                  <MiniBudget {...props} curForm={curForm} />
                  <Container>
                    <Pie {...props} curForm={curForm} />
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
  console.log("state in mapstate in Form", state);
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
