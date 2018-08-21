import React from "react";
import { Tooltip } from "reactstrap";

import Component from "@reactions/component";

export const Tooltip = props => {
  return (
    <Component state={{ toolTipOpen: false }}>
      {({ setState, state, ...props }) => {
        console.log("hello!");

        const toggle = () => {
          setState({
            tooltipOpen: !state.tooltipOpen
          });
        };

        return (
          <Tooltip
            placement="right"
            isOpen={state.tooltipOpen}
            target={props.target}
            toggle={() => toggle()}
          >
            {props.text}
            HELLO!
          </Tooltip>
        );
      }}
    </Component>
  );
};
