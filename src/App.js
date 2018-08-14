import React from "react";
import { Router } from "@reach/router";

import Pie from "./views/dashboard/Pie";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

export default () => (
  <Container fluid>
    <Pie />
    <Router>
      <Form path="/" />
    </Router>
  </Container>
);
