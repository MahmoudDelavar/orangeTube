import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./index.css";
import { ThemeProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./StateManagement/store";

//---------------------------
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider dir="rtl">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
