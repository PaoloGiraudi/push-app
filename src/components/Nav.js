import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineLock as Lock } from "react-icons/ai";
import { AiOutlineUnlock as Unlock } from "react-icons/ai";
import { AiOutlinePlusSquare as Add } from "react-icons/ai";

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
const NavLi = styled.li`
  font-size: 1.5rem;
  list-style: none;
  cursor: pointer;

  a {
    color: white;
  }
`;

export default function Nav({ children, ...props }) {
  return (
    <Navbar>
      <NavUl>
        <NavLi>
          <Link to="/about">About</Link>
        </NavLi>
        {props.isLoggedIn && (
          <NavLi>
            <Link to="/form">
              <Add className="icon" />
            </Link>
          </NavLi>
        )}
        <NavLi>
          <Link to="/login">
            {props.isLoggedIn ? (
              <Unlock className="icon unlock" />
            ) : (
              <Lock className="icon lock" />
            )}
          </Link>
        </NavLi>
      </NavUl>
    </Navbar>
  );
}
