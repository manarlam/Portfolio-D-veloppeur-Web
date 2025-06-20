import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image 
            src="/images/logo.png" 
            className="img-fluid logo" 
            alt="brand" 
            width={50}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link as={Link} href="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} href="/#about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} href="/projects" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} href="/contact" onClick={() => updateExpanded(false)}>
                <MdMailOutline style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
