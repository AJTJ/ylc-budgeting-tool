import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { Container } from "reactstrap";

import Form from "./views/Form";
import Budget from "./views/budget/BudgetHtml";
import ResourceBar from "./views/dashboard/ResourceBar";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Switch>
          <Route path="/Form/:formType" component={Form} />
          {/* Keep it in the Form */}
          <Route path="/budget" component={Budget} />
          <Redirect to="/Form/income" />
        </Switch>
        <ResourceBar />
      </Container>
    );
  }
}

export default App;
