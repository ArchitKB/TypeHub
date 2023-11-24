import React from "react";
import logo from "./logo-removebg-preview.png";

function Header() {
  function backToHome() {
    window.location.href = "/";
  }
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" onClick={backToHome} />
        <h1 onClick={backToHome}>TypeHub</h1>
      </header>
    </div>
  );
}

export default Header;
