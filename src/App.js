import React, { Component } from "react";
import { Route } from "react-router-dom";

// import Pie from "./views/dashboard/Pie";
import Trail from "./views/dashboard/Trail";
// import MiniBudget from "./views/dashboard/MiniBudget";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

class App extends Component {
  state = {
    primary_income: 0,
    secondary_income: 0,
    rent_mortgage: 0
  };

  render() {
    return (
      <Container fluid>
        <Trail />
        {/* <Route path="/Form/:formType" render={MyForm} /> */}
        <Route path="/Form/:formType" component={Form} />
      </Container>
    );
  }
}

export default App;
