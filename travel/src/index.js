import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Accesso/Login';
import App from './App'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
  
  <div>
         <Router>
                <Redirect to="/login" />
                <Route exact path = "/login">
                  <Login />
                </Route> 
            )    
         </Router>
    {/* <App /> */}
  </div>,
  document.getElementById('root')
);
