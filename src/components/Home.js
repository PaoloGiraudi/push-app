import React from "react";
import styled from "styled-components";
import { Container, Text } from "./Login";
import { BsArrowUp, BsArrowDownLeft } from "react-icons/bs";

const ArrowUp = styled(BsArrowUp)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const ArrowDownLeft = styled(BsArrowDownLeft)`
  font-size: 2rem;
  margin-right: 2rem;

`;

const TextBig = styled(Text)`
  font-size: 1.25rem;
  margin-bottom: 6rem;
`;

const TextSmall = styled(Text)`
  font-size: 1rem;
  margin-bottom: 1rem;

`;

export default function Home({ children, ...props }) {
  return (
    <Container>
      <ArrowUp />
      <TextBig>This is the number of pushups by Paolo in 2021.</TextBig>
      <TextSmall>Few more info here</TextSmall>
      <ArrowDownLeft />
    </Container>
  );
}
