import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./Accesso/LoginForm";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import App from './App';
import Routing from './Accesso/Routing'

ReactDOM.render(
  <>
      {/* <Router>
      <Redirect to="/login" />
      <Route exact path="/login">
          <LoginForm />
         </Route>
    </Router> */}
    <Routing />
  </>,
  document.getElementById("root")
);