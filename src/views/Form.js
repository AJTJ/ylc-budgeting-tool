import React from "react";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Pie from "./dashboard/Pie";
import { MiniBudget } from "./dashboard/MiniBudget";

import { Col, Row } from "reactstrap";

export const Form = props => {
  const curForm = formTypes[props.match.params.formType];
  const FormComponent = curForm.FormComponent;

  return (
    <Formik
      initialValues={values}
      render={({ ...props }) => (
        <React.Fragment>
          <Row>
            <Col xs={5} sm={5} md={5} lg={5}>
              <MiniBudget {...props} />
              <Pie {...props} />
            </Col>
            <Col xs={7} sm={7} md={7} lg={7}>
              <FormComponent {...props} />
            </Col>
          </Row>
        </React.Fragment>
      )}
    />
  );
};
