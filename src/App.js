import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { Container } from "reactstrap";

import Form from "./views/Form";
import ResourceBar from "./views/dashboard/ResourceBar";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Switch>
          <Route path="/Form/:formType" component={Form} />
          <Redirect to="/Form/income" />
        </Switch>
        <ResourceBar />
      </Container>
    );
  }
}

export default App;
