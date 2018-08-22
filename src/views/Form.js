import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";
import Trail from "../views/dashboard/Trail";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Col, Row as RSRow, Button } from "reactstrap";
import { Container } from "../components/layout";

const Form = props => {
  const curForm = props.match.params.formType;
  const FormComponent = formTypes[curForm].FormComponent;

  return (
    <Formik
      initialValues={values}
      onSubmit={values => {
        props.addBudget({ values });
      }}
      render={({ ...props }) => {
        return (
          <React.Fragment>
            <h1>YLC BUDGETING APP</h1>
            <Trail {...props} curForm={curForm} />
            <RSRow>
              <Col xs={4} sm={4} md={4} lg={4}>
                <MiniBudget {...props} />
                <Pie {...props} />
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                <Container>
                  <FormComponent {...props} />
                </Container>
              </Col>
              {curForm === "personal" && (
                <Button onClick={props.handleSubmit}>
                  Turn your budget into a printable PDF
                </Button>
              )}
            </RSRow>
            <RSRow>
              <Button>Print out a blank budget.</Button>
            </RSRow>
          </React.Fragment>
        );
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
