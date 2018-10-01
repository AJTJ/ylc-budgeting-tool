import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

it("renders without crashing", () => {
  shallow(<Form />);
});

// import ReactDOM from "react-dom";
// const div = document.createElement("div");
// ReactDOM.render(<Form />, div);
