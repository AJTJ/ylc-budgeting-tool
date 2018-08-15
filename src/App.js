import React from "react";
import { Route } from "react-router-dom";

import Pie from "./views/dashboard/Pie";
import Trail from "./views/dashboard/Trail";
import MiniBudget from "./views/dashboard/MiniBudget";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

export default () => (
  <Container fluid>
    <Trail />
    <MiniBudget />
    <Pie />
    <Route path="/Form/:formType" component={Form} />
  </Container>
);
