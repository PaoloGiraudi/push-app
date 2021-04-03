import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { ContextProvider } from "./Context";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";

import Login from "./pages/Login";
import AddForm from "./pages/AddForm";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Wrapper>
          <Header />
          <Counter />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/form">
              <AddForm />
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
