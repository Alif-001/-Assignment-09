import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/books.png";

import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#header">
          <img height="30" src={logo} alt="" />{" "}
          <span className="fw-bold logo"> E-learning</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto menu">
            <Nav.Link className="text-dark  ">
              <Link
                className="text-decoration-none fw-bold text-info"
                id="menu-items"
                to="/home"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="text-dark ">
              <Link
                className="text-decoration-none fw-bold text-info"
                id="menu-items"
                to="/about"
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link className="text-dark ">
              <Link
                className="text-decoration-none fw-bold text-info"
                id="menu-items"
                to="/services"
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="text-dark ">
              <Link
                className="text-decoration-none fw-bold text-info"
                id="menu-items"
                to="/Contact"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
