import React, { useState } from "react";
import firebase from "./firebase";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <Router>
      <div className="App">
        <Nav auth={isLoggedIn} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form auth={isLoggedIn} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
