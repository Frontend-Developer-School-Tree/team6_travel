import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function Routing() {
  return (
    <>
      <Router>
        <Redirect to="/home" />
        <Route exact path="/home">
          <App />
        </Route>
      </Router>
    </>
  );
}

export default Routing;
