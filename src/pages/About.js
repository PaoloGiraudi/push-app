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
        </Link>
      </AnswerText>
      <QuestionText>What is the purpose?</QuestionText>
      <AnswerText>Mostly, to learn about React and Firebase.</AnswerText>
      <QuestionText>Can I look at the code?</QuestionText>
      <AnswerText>
        Sure, check it out at my{" "}
        <Link href="https://github.com/PaoloGiraudi/" target="_blank">
          GitHub Page.
        </Link>
      </AnswerText>
      <QuestionText>Why push ups in particular?</QuestionText>
      <AnswerText>I needed something simple to track in my routine.</AnswerText>
    </Container>
  );
}
