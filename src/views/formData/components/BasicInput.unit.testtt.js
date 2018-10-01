import React from "react";
import { shallow } from "enzyme";

import Input from "./BasicInput";

describe("BasicInput", () => {
  it("should render", () => {
    const component = shallow(<Input />);
    expect(component.contains(<div className="foo">Bar</div>)).toBe(true);
  });
});
