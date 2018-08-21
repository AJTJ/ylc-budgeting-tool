import React, { Component } from "react";
import { Route } from "react-router-dom";

import Trail from "./views/dashboard/Trail";
import Form from "./views/Form";

import { BudgetPDF } from "./views/pdf/budgetPDF";

import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Trail />
        {/* <Route path="/Form/:formType" render={MyForm} /> */}
        <Route path="/Form/:formType" component={Form} />
        <Route path="/budget" component={BudgetPDF} />
      </Container>
    );
  }
}

export default App;
