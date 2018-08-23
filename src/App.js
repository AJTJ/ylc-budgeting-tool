import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Form from "./views/Form";

import { Container } from "reactstrap";
import BudgetPDF from "./views/pdf/BudgetPDF";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Redirect from="/" to="/Form/income" />
        <Route path="/Form/:formType" component={Form} />
        <Route path="/BudgetPDF" component={BudgetPDF} />
      </Container>
    );
  }
}

export default App;
