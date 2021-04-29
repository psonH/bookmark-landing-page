import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import LogoDesktop from "../images/logo-bookmark.svg";
import LogoMobile from "../images/logo-bookmark-mobile.svg";

let listener = null;

const Menu = () => {
  const [status, setStatus] = useState(false);
  const toggleNavBar = () => {
    setStatus(!status);
  };

  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 80) {
        if (scrollState !== "scroll") {
          setScrollState("scroll");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <Navbar
      className={
        scrollState === "scroll"
          ? status
            ? "nav-mob-view-open scroll-menu"
            : "menu scroll-menu"
          : status
          ? "nav-mob-view-open"
          : "menu"
      }
      fixed="top"
      expand="lg"
      expanded={status}
    >
      <img src={status ? LogoMobile : LogoDesktop} alt="bookmark-logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavBar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className={
            status ? "nav-mob-nav-links ml-auto nav-links" : "ml-auto nav-links"
          }
        >
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
        <div className="btn-nav-bar">Login</div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
