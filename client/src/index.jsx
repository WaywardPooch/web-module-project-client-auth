// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import App from "./App";
// Styles
import "./css/index.css";

// Render the app
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.body.querySelector("#root")
);
