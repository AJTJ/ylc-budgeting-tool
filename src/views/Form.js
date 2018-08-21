import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Col, Row, Button } from "reactstrap";

const Form = props => {
  const curForm = props.match.params.formType;
  const FormComponent = formTypes[curForm].FormComponent;
  const newBudget = props.newBudget;

  return (
    <Formik
      initialValues={values}
      onSubmit={values => {
        props.addBudget({ values });
      }}
      render={({ ...props }) => {
        console.log(newBudget);
        return (
          <React.Fragment>
            <Col>Hello</Col>
            <Row>
              <Col xs={5} sm={5} md={5} lg={5}>
                <MiniBudget {...props} />
                <Pie {...props} />
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                <FormComponent {...props} />
              </Col>
              {curForm === "personal" && (
                <Button onClick={props.handleSubmit}>
                  Turn your budget into a printable PDF
                </Button>
              )}
            </Row>
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
