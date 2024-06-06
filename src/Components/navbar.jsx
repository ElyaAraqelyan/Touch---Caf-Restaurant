import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/App.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ toggleTheme, isNavbarWhite, setIsNavbarWhite, pathName }) => {
  useEffect(() => {
    if (pathName === "/newsAndEvents") {
      setIsNavbarWhite(true);
    } else {
      setIsNavbarWhite(false);
    }

    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant={isNavbarWhite ? "light" : "dark"}
        className="navbar-custom"
      >
        <Navbar.Brand className="ff text-primary-hover d-lg-none" href="#">
          Touché
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarCollapse"
          data-bs-target="#navbarCollapse"
          aria-expanded="false"
          data-bs-toggle="collapse"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse
          id="navbarCollapse"
          className="justify-content-lg-center"
        >
          <Nav className="d-flex align-items-lg-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="text-primary-hover nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-primary-hover nav-link" to="/menu">
                  MENU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-primary-hover nav-link"
                  to="/reservation"
                >
                  RESERVATION
                </NavLink>
              </li>
            </ul>
            <Navbar.Brand
              className="ff text-primary-hover d-none d-lg-flex"
              href="/"
            >
              Touché
            </Navbar.Brand>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="text-primary-hover nav-link"
                  to="newsAndEvents"
                >
                  NEWS & EVENTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-primary-hover nav-link" to="/gallery">
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-primary-hover nav-link"
                  to="/contactUs"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="form-check form-switch form-switch-color-mode ms-lg-3">
              <input
                onChange={toggleTheme}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="colorModeSwitch"
              />
              <label
                className="form-check-label"
                htmlFor="colodeModeSwitch"
              ></label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
