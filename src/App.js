import React, { Component } from "react";
import { Route } from "react-router-dom";

import Pie from "./views/dashboard/Pie";
import Trail from "./views/dashboard/Trail";
import MiniBudget from "./views/dashboard/MiniBudget";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

class App extends Component {
  state = {
    income: 345,
    expenses: 555
  };

  handleChange = (id, amount) => {
    return this.setState({ [id]: [amount] });
  };

  render() {
    return (
      <Container fluid>
        <Trail />
        <MiniBudget {...this.state} />
        <Pie {...this.state} />
        <Route path="/Form/:formType" handleChange component={Form} />
      </Container>
    );
  }
}

export default App;
