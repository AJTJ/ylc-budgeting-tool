import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Form from "./views/Form";

import { Container } from "reactstrap";
import ResourceBar from "./views/dashboard/ResourceBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Switch>
            <Route path="/Form/:formType" component={Form} />
            <Redirect to="/Form/income" />
          </Switch>
        </Container>
        <ResourceBar />
      </React.Fragment>
    );
  }
}

export default App;
