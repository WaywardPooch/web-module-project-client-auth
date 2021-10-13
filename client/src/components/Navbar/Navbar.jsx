import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./../../contexts";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <header className="navbar">
      <h3 className="navbar__title">Friends App</h3>
      <nav className="navbar__nav">
        <Link className="navbar__link" to="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link className="navbar__link" to="/friends">
              Friends
            </Link>
            <Link className="navbar__link" to="/add-friend">
              Add New Friend
            </Link>
            <Link className="navbar__link" to="/logout">
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link className="navbar__link" to="/login">
              Log In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
