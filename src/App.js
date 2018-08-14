import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Route, Link
import Pie from "./views/dashboard/Pie";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

export default () => (
  <Container fluid>
    <Pie />
    <Router>
      <Form path=":formType" />
    </Router>
  </Container>
);
