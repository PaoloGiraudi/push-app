import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const Count = styled.h1`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 5rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.65) 0%,
    rgba(255, 255, 255, 0.9) 25%,
    rgba(255, 255, 255, 0.9) 75%,
    rgba(255, 255, 255, 0.65) 100%
  );
  border-radius: 10px;
  mix-blend-mode: screen;
`;

export default function Counter({ children, ...props }) {
  return (
    <Container>
      <Count>{props.pushups}</Count>
    </Container>
  );
}
