import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <h3>Navbar</h3>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};
