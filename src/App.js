import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import About from "./About";
import Login from "./Login";
import { ContextProvider } from "./Context";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Wrapper>
          <Header />
          <Counter />
          <Switch>
            <Route path="/" exact />

            <Route path="/about">
              <About />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Nav />
        </Wrapper>
      </Router>
    </ContextProvider>
  );
};

export default App;
