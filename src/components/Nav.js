import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { Link as NavbarLink } from "react-router-dom";
import { MdLockOutline as Lock } from "react-icons/md";
import { MdLockOpen as Unlock } from "react-icons/md";
import { FiPlusCircle as Plus } from "react-icons/fi";

const Navbar = styled.nav`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  margin: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const NavUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
const NavLink = styled(NavbarLink)`
  font-size: 1.75rem;
  list-style: none;
  cursor: pointer;
  color: #fff;
  opacity: 0.9;
  text-decoration: none;

  &.lock {
    display: grid;
    place-items: center;
    color: ${(props) => props.color};
  }
`;

export default function Nav({ children, ...props }) {
  const { isLoggedIn } = useContext(Context);
  return (
    <Navbar>
      <NavUl>
        <NavLink to="/about">About</NavLink>

        {isLoggedIn && (
          <NavLink to="/form">
            <Plus />
          </NavLink>
        )}

        <NavLink to="/login" className="lock">
          {isLoggedIn ? <Unlock color="green" /> : <Lock color="red" />}
        </NavLink>
      </NavUl>
    </Navbar>
  );
}
