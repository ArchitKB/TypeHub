import React from "react";
import logo from "./logo-removebg-preview.png";

//hello archit

function Header() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>TypeHub</h1>

        <p className="right">Sign up</p>
        <p className="right">Login</p>
      </header>
    </div>
  );
}

export default Header;
