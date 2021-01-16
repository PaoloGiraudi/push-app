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

  :hover {
    opacity: 0.7;
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