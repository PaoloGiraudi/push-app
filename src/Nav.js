import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLock as Lock } from "react-icons/ai";
import { AiOutlineUnlock as Unlock } from "react-icons/ai";
import { AiOutlinePlusSquare as Add } from "react-icons/ai";

function Nav({ auth }) {
  return (
    <nav>
      <Link to="/">PushApp</Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">What is this?</Link>
        </li>
        {auth && (
          <li>
            <Link to="/form">
              <Add className="icon" />
            </Link>
          </li>
        )}
        <li>
          <Link to="/login">
            {auth ? (
              <Unlock className="icon unlock" />
            ) : (
              <Lock className="icon lock" />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
