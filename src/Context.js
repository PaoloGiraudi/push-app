import React, { useState, useEffect } from "react";
import firebase from "firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [newPushupsSession, setNewPushupsSession] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pushups, setPushups] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  // Fetching the total number of pushups from the db

  const fetchTotal = async () => {
    const docRef = firebase.firestore().collection("pushups").doc("--total--");

    try {
      const res = await docRef.get();
      const { total } = res.data();
      setPushups(total);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  // Updating the pushups state forces the counter to re-render

  useEffect(() => {
    fetchTotal();
  }, [pushups]);

  // Log in

  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => setError("invalid-auth"));
  };

  // Authentication

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  // Submit a new session to the db

  const addSession = () => {
    const db = firebase.firestore();
    const value = parseInt(newPushupsSession);

    const incrementPushups = firebase.firestore.FieldValue.increment(
      value || 0
    );
    const totalRef = db.collection("pushups").doc("--total--");
    const pushupsRef = db.collection("pushups").doc(`${Math.random()}`);
    const batch = db.batch();

    batch.set(totalRef, { total: incrementPushups }, { merge: true });
    batch.set(pushupsRef, {
      number: value || 0,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    batch.commit();
    setNewPushupsSession(0);
    fetchTotal();
  };

  return (
    <Context.Provider
      value={{
        newPushupsSession,
        setNewPushupsSession,
        isLoggedIn,
        setIsLoggedIn,
        pushups,
        setPushups,
        addSession,
        email,
        setEmail,
        password,
        setPassword,
        handleLogIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
