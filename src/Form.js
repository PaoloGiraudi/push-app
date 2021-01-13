import React, { useState } from "react";
import firebase from "./firebase";

export default function Form() {
  const [newPushupsSession, setNewPushupsSession] = useState(0);

  const addSession = () => {
    const db = firebase.firestore();
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
  };

  return (
    <div>
      <input
        type="number"
        value={newPushupsSession}
        onChange={(e) => setNewPushupsSession(parseInt(e.target.value))}
      />
      <button onClick={addSession}>Add</button>
    </div>
  );
}
