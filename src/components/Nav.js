import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { Link as NavbarLink } from "react-router-dom";
import { MdLockOutline as Lock } from "react-icons/md";
import { MdLockOpen as Unlock } from "react-icons/md";
import { FiPlusCircle as Plus } from "react-icons/fi";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const NavUl = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
`;
const NavLink = styled(NavbarLink)`
  display: block;
  font-size: 1.75rem;
  list-style: none;
  cursor: pointer;
  color: #fff;
  opacity: 0.9;
  text-decoration: none;
  justify-self: center;
  padding: 0.5rem;

  &.icon {
    display: grid;
    place-items: center;
    color: ${(props) => props.color};
  }
`;

const Blank = styled.div``;

export default function Nav({ children, ...props }) {
  const { isLoggedIn } = useContext(Context);
  return (
    <Navbar>
      <NavUl>
        <NavLink to="/about">About</NavLink>

        {isLoggedIn ? (
          <NavLink to="/form" className="icon">
            <Plus />
          </NavLink>
        ) : (
          <Blank />
        )}

        <NavLink to="/login" className="icon">
          {isLoggedIn ? <Unlock color="#0D3100" /> : <Lock color="#6D0000" />}
        </NavLink>
      </NavUl>
    </Navbar>
  );
}
