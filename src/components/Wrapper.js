import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  overflow: hidden;
  text-align: center;
  background: linear-gradient(150deg, #b45d00 40%, #323f00 100%);
  max-height: 900px;
  max-width: 450px;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1.25fr 1fr 3.25fr 0.75fr;
  padding: 1rem;
`;

export default function Wrapper({ children, ...props }) {
  return <Wrap>{children}</Wrap>;
}
