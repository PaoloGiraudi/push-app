import React, { useState } from "react";
import firebase from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <section className="login">
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogIn}>Sign in</button>
      </div>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </section>
  );
};

export default Login;
