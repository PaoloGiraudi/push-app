import React, { useState, useEffect } from "react";
import firebase from "firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [newPushupsSession, setNewPushupsSession] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pushups, setPushups] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Log in

  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // Authentication

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  // Fetch total pushups

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
  }, [setPushups]);

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
    updateCounter();
  };

  // Update total on submit --TO FIX--

  const updateCounter = () => {
    const docRef = firebase.firestore().collection("pushups").doc("--total--");
    docRef
      .get()
      .then((doc) => {
        const { total } = doc.data();
        setPushups(total);

        console.log(total);
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
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
