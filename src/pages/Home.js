import React from "react";
import styled from "styled-components";
import { Container, Text } from "./Login";

const TextBig = styled(Text)`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  
`;

const TextSmall = styled(Text)`
  font-size: 1.25rem;
  padding: 0 1rem;
`;

export default function Home({ children, ...props }) {
  return (
    <Container>
      <TextBig>Welcome to Push App!</TextBig>
      <TextSmall>
        It is a simple database that keeps track of the push ups I have done during
        2021.
      </TextSmall>
    </Container>
  );
}
