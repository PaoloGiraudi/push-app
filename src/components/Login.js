import React, { useContext } from "react";
import firebase from "../firebase";
import { Context } from "../Context";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 2em;
`;
export const Text = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.125rem;
`;

export const Input = styled.input`
  margin-bottom: 1em;
  font-size: 1.125rem;
  padding: 0.25em 0.5em;
  background-color: #fff;
  opacity: 0.9;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
export const Button = styled.button`
  display: block;
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.5em 1.25em;
  border-radius: 5px;
  opacity: 0.9;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    opacity: 0.8;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  }
`;

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    isLoggedIn,
  } = useContext(Context);

  return (
    <>
      {isLoggedIn ? (
        <Container>
          <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        </Container>
      ) : (
        <Container>
          <Text>Email</Text>
          <Input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Password</Text>
          <Input
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogIn}>Sign in</Button>
        </Container>
      )}
    </>
  );
};

export default Login;
