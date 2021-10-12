import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <header>
      <h3>Navbar</h3>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/friends">Friends</Link>
          <Link to="/logout">Log Out</Link>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
        </>
      )}
    </header>
  );
};
