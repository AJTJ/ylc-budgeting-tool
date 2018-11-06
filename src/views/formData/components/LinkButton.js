import React from "react";
import { Link } from "react-router-dom";

import { StyledButton } from "../../../components/deco";

export default ({ to, name }) => {
  return (
    <Link to={to ? to : null}>
      <StyledButton name={name}>{name}</StyledButton>
    </Link>
  );
};
