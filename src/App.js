import React, { Component } from "react";
// import { Switch } from "react-router-dom";

import { Container } from "reactstrap";
import { Routes } from "./Routes";
import ResourceBar from "./views/dashboard/ResourceBar";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Routes />
        <ResourceBar />
      </Container>
    );
  }
}

export default App;
