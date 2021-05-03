import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { MdUpdate } from "react-icons/md";

//  prova a eliminare il fetchtotal dal addsession

const Context = React.createContext();

function ContextProvider({ children }) {
  const [updating, setUpdating] = useState(false);
  const [pushups, setPushups] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  // Fetching the total number of pushups from the db
  // Updating state to re-render when a session is added 

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const db = firebase.firestore();
        const ref = db.collection("pushups").doc("--total--");

        const docs = await ref.get();
        const { total } = docs.data();
        setPushups(total);
        if (total) {
          setUpdating(false);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchTotal();
  }, [updating]);

  // Add session to the firestore with batch

  const addSession = async () => {
    const db = firebase.firestore();
    const batch = db.batch();
    const value = parseInt(newValue);

    const incrementPushups = firebase.firestore.FieldValue.increment(
      value || 0
    );
    const totalRef = db.collection("pushups").doc("--total--");
    const pushupsRef = db.collection("pushups").doc(`${Math.random()}`);

    batch.set(totalRef, { total: incrementPushups }, { merge: true });
    batch.set(pushupsRef, {
      number: value || 0,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await batch.commit();
    setUpdating(true);
    setNewValue(0);
  };

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

  return (
    <Context.Provider
      value={{
        newValue,
        setNewValue,
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
