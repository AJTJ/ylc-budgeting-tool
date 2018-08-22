import React, { Component } from "react";
import { Route } from "react-router-dom";

// import Trail from "./views/dashboard/Trail";
import Form from "./views/Form";

import { Container } from "reactstrap";
import BudgetPDF from "./views/pdf/BudgetPDF";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Route path="/Form/:formType" component={Form} />
        <Route path="/BudgetPDF" component={BudgetPDF} />
      </Container>
    );
  }
}

export default App;
