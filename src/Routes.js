import React from "react";
import { Route, Redirect } from "react-router-dom";
import Form from "./views/Form";

export const Routes = () => (
  <React.Fragment>
    <Route path="/Form/:formType" component={Form} />
    <Redirect to="/Form/income" />
  </React.Fragment>
);
