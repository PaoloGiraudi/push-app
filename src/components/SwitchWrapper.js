import React from "react";
import styled from "styled-components";

const SwitchWrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function Header({ children, ...props }) {
  return <SwitchWrapper>{children}</SwitchWrapper>;
}
