import React from "react";
import styled from "styled-components";
import { Container, Text } from "./Login";

export default function Home({ children, ...props }) {
  return (
    <Container>
      <Text>Welcome to the pushapp</Text>
    </Container>
  );
}
