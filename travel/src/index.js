import React from "react";
import ReactDOM from "react-dom";
import Login from "./Accesso/Login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <>
    {/* <Router>
      <Redirect to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
    </Router> */}
    <App />
  </>,
  document.getElementById("root")
);