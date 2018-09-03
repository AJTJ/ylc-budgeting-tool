import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Form from "./views/Form";

import { Container } from "reactstrap";
import ResourceBar from "./views/dashboard/ResourceBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Redirect from="/" to="/Form/income" />
          <Route path="/Form/:formType" component={Form} />
        </Container>
        <ResourceBar />
      </React.Fragment>
    );
  }
}

export default App;
