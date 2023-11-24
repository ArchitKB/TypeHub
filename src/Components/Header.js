import React from "react";
import { useSpring, animated } from "react-spring";
import logo from "./logo-removebg-preview.png";
import { Link } from "react-router-dom";
import Body from "./Body";
import "./login.css";
function Header() {
  // Animation for the logo
  const logoAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Animation for the navigation links
  const linksAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000, delay: 200 },
  });

  function backToHome() {
    window.location.href = "/";
  }

  return (
    <div>
      <header className="header">
        <animated.img
          className="logo"
          src={logo}
          alt="logo"
          style={logoAnimation}
          onClick={backToHome}
        />
        <animated.h1 style={logoAnimation} onClick={backToHome}>
          TypeHub
        </animated.h1>

        <div className="right-links">
          <animated.div style={linksAnimation} className="right">
            <Link to="/signup">
              <button className="btn">SignUp</button>
            </Link>
          </animated.div>
          <animated.div style={linksAnimation} className="right">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </animated.div>
        </div>
      </header>
      <Body />
    </div>
  );
}

export default Header;
