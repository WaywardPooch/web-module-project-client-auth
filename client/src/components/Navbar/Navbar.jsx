import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <header>
      <h3>Navbar</h3>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/friends">Friends</Link>
          <Link to="/add-friend">Add New Friend</Link>
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
