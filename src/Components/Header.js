import React from "react";
import logo from "./logo-removebg-preview.png";
import {Link} from "react-router-dom"
import Body from "./Body";

function Header() {
  

  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>TypeHub</h1>

        <div className="right-links">
          <Link className="right" to="/signup">Signup</Link>
          <Link className="right" to="/login">Login</Link>
        </div>
      </header>
      <Body/>

    </div>
  );
}

export default Header;
