import React from "react";
import { Route } from "react-router-dom";
// Route, Link
import Pie from "./views/dashboard/Pie";
import Trail from "./views/dashboard/Trail";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

export default () => (
  <Container fluid>
    <Pie />
    <Trail />
    <Route path="/basicIncome" component={Form} />
  </Container>
);
