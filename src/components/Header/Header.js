import React from "react";
import logo from "../../logo.svg";

import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="black">
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logo} />
          </Navbar.Brand>
          <Nav className="menu">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/instructor">Instructor</Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
