import React, { useState, useEffect } from "react";
import firebase from "firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [newPushupsSession, setNewPushupsSession] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pushups, setPushups] = useState(0);

  const db = firebase.firestore();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  useEffect(() => {
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

  const updateCounter = () => {
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
  };

  const addSession = () => {
    const incrementPushups = firebase.firestore.FieldValue.increment(
      newPushupsSession
    );
    const totalRef = db.collection("pushups").doc("--total--");
    const pushupsRef = db.collection("pushups").doc(`${Math.random()}`);
    const batch = db.batch();

    batch.set(totalRef, { total: incrementPushups }, { merge: true });
    batch.set(pushupsRef, {
      number: newPushupsSession,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    batch.commit();
    setNewPushupsSession(0);
    updateCounter();
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
