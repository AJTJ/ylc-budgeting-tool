import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Pie } from "@nivo/pie";

let pieData = [
  {
    id: "dogs",
    value: 45
  },
  {
    id: "cats",
    value: 55
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>YLC Budgeting tool!!!</Row>
          <Row>
            <div>
              <Pie data={pieData} height={300} width={300} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
