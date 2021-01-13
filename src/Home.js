import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function Home() {
  const [pushups, setPushups] = useState([]);

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
    <div>
      <h1>{pushups}</h1>
    </div>
  );
}

export default Home;
