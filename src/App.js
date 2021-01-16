import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ContextProvider } from "./Context";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";
import SwitchWrapper from "./components/SwitchWrapper";
import Login from "./components/Login";
import AddForm from "./components/AddForm";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Wrapper>
          <Header />
          <Counter />
          <SwitchWrapper>
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
          </SwitchWrapper>
          <Nav />
        </Wrapper>
      </Router>
    </ContextProvider>
  );
};

export default App;
