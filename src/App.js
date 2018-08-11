import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Pie } from "@nivo/pie";

let pieData = [
  {
    id: "income",
    value: 45
  },
  {
    id: "expenses",
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
              <Pie data={pieData} height={300} width={300} innerRadius={0.5} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
