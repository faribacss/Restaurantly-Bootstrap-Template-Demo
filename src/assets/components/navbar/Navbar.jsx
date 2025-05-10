import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container';
import { style } from 'framer-motion/client';



function Navs() {
   const [isScrolled, setIsScrolled] = useState(false);
   useEffect(() => {
     const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
    return (
      <>
      <Navbar expand="lg" className={`nav-bar ${isScrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand className="resturant-name" href="#home">
            Resturant
          </Navbar.Brand>
          <Navbar.Toggle
            className="open-list"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-list">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">Specials</Nav.Link>
              <Nav.Link href="#link">Events</Nav.Link>
              <Nav.Link href="#link">Chefs</Nav.Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}
export default Navs;