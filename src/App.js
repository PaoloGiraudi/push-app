import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
// import Nav from "./Nav";
import About from "./About";
import Login from "./Login";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pushups, setPushups] = useState(0);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  useEffect(() => {
    const db = firebase.firestore();
    const docRef = db.collection("pushups").doc("--total--");

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const { total } = doc.data();
          setPushups(total);
        }
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }, [pushups]);

  return (
    <Router>
      <Wrapper>
        <Header />
        <Counter pushups={pushups} />
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
        <Nav isLoggedIn={isLoggedIn} />
      </Wrapper>
    </Router>
  );
};

export default App;
