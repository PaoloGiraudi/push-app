import React from "react";
import styled from "styled-components";
import { Container, Text } from "./Login";
import { BsArrowUp, BsArrowDownLeft } from "react-icons/bs";

const ArrowUp = styled(BsArrowUp)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const ArrowDownLeft = styled(BsArrowDownLeft)`
  font-size: 3rem;
  margin-right: 2rem;
  margin-top: 1rem;
`;

const TextBig = styled(Text)`
  font-size: 1.25rem;
  margin-bottom: 4rem;
`;

export default function Home({ children, ...props }) {
  return (
    <Container>
      <ArrowUp />
      <TextBig>This is the number of pushups made by Paolo in 2021.</TextBig>

      <Text>More info here</Text>
      <ArrowDownLeft />
    </Container>
  );
}
