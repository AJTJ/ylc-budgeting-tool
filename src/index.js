import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/genericCss.css";

//FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faHome,
  faCar,
  faWalking,
  faUser,
  faChartPie,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faDollarSign,
  faHome,
  faCar,
  faWalking,
  faUser,
  faChartPie,
  faFileInvoice
);

render(
  <Provider store={store}>
    <BrowserRouter basename="/ylcBudget">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

{
  /* <IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase "/ylcBudget"
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule "/ylcBudget/index.html"
</IfModule> */
}
