// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Aspirants</h1>
      <div className="links">
        <a className="home" href="/">
          Home
        </a>
        <a className="home" href="/create">
          About
        </a>
        <a className="home" href="/create-signup">
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
