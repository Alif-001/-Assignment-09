import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/books.png";
import headerImg from "../../image/headerImg5.png";
import "./header.css";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        paddingTop: "100px",
        marginTop: "50px",
      }}
    >
      <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
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

      <div id="home" className="text-left">
        <h1 className="fadeInLeft me-5 pe-2 title">Welcome to E-learning</h1>
        <div className="px-5 mx-5 w-75">
          <h3>We Take Learning to New Heights.</h3>
          <p>
            We believe everyone has the capacity to be creative. E-learning is a
            place where people develop their own potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
