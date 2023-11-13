import React from "react";
import logo from "./logo-removebg-preview.png";

function Header() {
  

  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>TypeHub</h1>
      </header>
       </div>
  );
}

export default Header;
