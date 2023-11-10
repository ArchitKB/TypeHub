import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill, BsPencilSquare, BsBoxArrowRight } from 'react-icons/bs'; // Import icons
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountPage from './AccountPage';

function BasicExample() {
  const [showAccountPage, setShowAccountPage] = useState(false);

  const handleAccountClick = () => {
    // Toggle the visibility of the AccountPage
    setShowAccountPage(!showAccountPage);
  };

  const handleEditProfileClick = () => {
    // Handle click for Edit Profile
    console.log('Edit Profile clicked');
  };

  const handleLogoutClick = () => {
    // Handle click for Logout
    console.log('Logout clicked');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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

        {/* Edit Profile Icon */}
        <button className="mb-3" onClick={handleEditProfileClick}>
          <BsPencilSquare size={30} />
        </button>

        {/* Logout Icon */}
        <button onClick={handleLogoutClick}>
          <BsBoxArrowRight size={30} />
        </button>
      </div>

      {/* Account Page */}
      {showAccountPage && <AccountPage />}
    </>
  );
}

export default BasicExample;
