import React from "react";
import styled from "styled-components";
import { Container, Text } from "./Login";

const QuestionText = styled.h3`
  font-weight: 600;
  margin-bottom: 0.25em;
`;

const AnswerText = styled(Text)`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  cursor: pointer;
  color: #fff;
  opacity: 0.8;

  :visited {
    color: white;
  }
`;

export default function About({ children, ...props }) {
  return (
    <Container>
      <QuestionText>Who made this?</QuestionText>
      <AnswerText>
        It is all made by{" "}
        <Link href="https://paologiraudi.com" target="_blank">
          Paolo.
        </Link>{" "}
      </AnswerText>
      <QuestionText>Are you trying to get bigger?</QuestionText>
      <AnswerText>No, I am trying to learn React.</AnswerText>
      <QuestionText>Can I have more technical info on the project?</QuestionText>
      <AnswerText>
        Sure, check out my{" "}
        <Link href="https://github.com/PaoloGiraudi/" target="_blank">
          GitHub Page.
        </Link>
      </AnswerText>
      <QuestionText>Why do you want to count your pushups?</QuestionText>
      <AnswerText>I like numbers.</AnswerText>
    </Container>
  );
}
