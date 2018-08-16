import React, { Component } from "react";
import { Route } from "react-router-dom";

import Pie from "./views/dashboard/Pie";
import Trail from "./views/dashboard/Trail";
import MiniBudget from "./views/dashboard/MiniBudget";
import { Form } from "./views/Form";

import { Container } from "reactstrap";

class App extends Component {
  state = {
    primary_income: 0,
    secondary_income: 0,
    rent_mortgage: 0
  };

  updateDashboard = formObject => {
    console.log("formObject", formObject);
    Object.keys(formObject).forEach(key => {
      if (formObject[key] === this.state[key]) {
        this.setState({ [key]: formObject[key] });
      }
    });
  };

  render() {
    const MyForm = props => {
      return <Form {...props} updateDashboard={this.updateDashboard} />;
    };
    return (
      <Container fluid>
        <Trail />
        <MiniBudget {...this.state} />
        <Pie {...this.state} />
        <Route path="/Form/:formType" component={MyForm} />
      </Container>
    );
  }
}

export default App;
