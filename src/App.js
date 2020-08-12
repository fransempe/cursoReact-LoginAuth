import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About'
import Nav from './components/Nav';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {

  

  return (
    <Router>
        <div>
          <Nav />
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
