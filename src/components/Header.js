import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  color: white;
  opacity: 0.9;
  font-size: 3.5rem;
  font-weight: 600;
  cursor: pointer;
`;

export default function Header({ children, ...props }) {
  const history = useHistory();
  return (
    <Container>
      <Title onClick={() => history.push("/")}>Push App</Title>
    </Container>
  );
}
