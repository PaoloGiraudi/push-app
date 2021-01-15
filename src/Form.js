import React, { useState, useContext } from "react";
import firebase from "./firebase";
import { Context } from "./Context";

export default function Form() {
  const { newPushupsSession, addSession, setNewPushupsSession } = useContext(
    Context
  );
  // const [newValue, setNewValue] = useState(0);

  // const addSession = () => {
  //   const db = firebase.firestore();
  //   const incrementPushups = firebase.firestore.FieldValue.increment(newValue);
  //   const totalRef = db.collection("pushups").doc("--total--");
  //   const pushupsRef = db.collection("pushups").doc(`${Math.random()}`);
  //   const batch = db.batch();

  //   batch.set(totalRef, { total: incrementPushups }, { merge: true });
  //   batch.set(pushupsRef, {
  //     number: newValue,
  //     date: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   batch.commit();
  //   setNewPushupsSession();
  //   setNewValue(0);
  // };

  return (
    <div>
      <input
        type="number"
        value={newPushupsSession}
        onChange={(e) => setNewPushupsSession(parseInt(e.target.value))}
      />
      <button onClick={() => addSession()}>Add</button>
    </div>
  );
}
