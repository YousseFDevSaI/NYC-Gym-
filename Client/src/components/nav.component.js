import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/style.css";

const App = () => {
  return (
    <Navbar className='navbar'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Login</Link>          
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/adminlogin" className="nav-link">Admin</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
