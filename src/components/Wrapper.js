import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  text-align: center;
  background: linear-gradient(150deg, #b45d00 40%, #323f00 100%);
  max-height: 900px;
  max-width: 450px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default function Header({ children, ...props }) {
  return <Wrapper>{children}</Wrapper>;
}
