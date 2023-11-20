// BasicExample.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BsFillPersonFill,
  BsPencilSquare,
  BsBoxArrowRight,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";
import Landing from "./Landing";

function BasicExample() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleEditProfileClick = () => {
    // Handle click for Edit Profile
    console.log("Edit Profile clicked");
    // Add your logic for editing the profile directly here
  };

  const handleLogoutClick = () => {
    // Handle click for Logout
    console.log("Logout clicked");
    // Use Link to navigate to the landing page
    // Do not use window.location.href for React Router navigation
  };

  const handleAccountClick = () => {
    // Toggle the visibility of the Profile component
    setShowProfile(!showProfile);
  };

  const handleCreateAccountClick = () => {
    // Handle click for Create Account
    console.log("Create Account clicked");
    // Add your logic for creating an account directly here
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Type Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Right Sidebar */}
      <div className="d-flex flex-column align-items-end bg-light p-3">
        {/* Account Icon */}
        <button className="mb-3" onClick={handleAccountClick}>
          <BsFillPersonFill size={30} />
        </button>

        {/* Conditionally render Profile component */}
        {showProfile && <Profile />}

        {/* Conditionally render Create Account functionality */}
        {showCreateAccount && (
          <button className="mb-3" onClick={handleCreateAccountClick}>
            {/* Adjust the icon or text for Create Account */}
            Create Account
          </button>
        )}

        {/* Edit Profile Icon */}
        <button className="mb-3" onClick={handleEditProfileClick}>
          <BsPencilSquare size={30} />
        </button>

        {/* Logout Icon with Link to Landing Page */}
        <Link to="/">
          {" "}
          {/* Change '/landing' to the actual URL of your landing page */}
          <button onClick={handleLogoutClick}>
            <BsBoxArrowRight size={30} />
          </button>
        </Link>
      </div>
    </>
  );
}

export default BasicExample;
