import React from "react";
import styled from "styled-components";

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
`;

export default function Header({ children, ...props }) {
  return (
    <Container>
      <Title>Push App</Title>
    </Container>
  );
}
