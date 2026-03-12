import React from "react";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/A-A-Logo-SVG.svg";

import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-nav py-3 box-shadow-two">
        <div className="container position-relative">
          <a
            className="navbar-brand monsieur-la-doulaise-regular fs-2"
            href="/"
            aria-label="Home Page"
          >
            <img src={Logo} className="img-fluid" alt="" width={"100px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle d-none d-lg-flex">
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item me-4">
                <Link to="/our-work" className="nav-link custom-link">
                  Our Work
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <div className="d-lg-none">
                <li className="nav-item me-4">
                  <a className="nav-link custom-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link custom-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-lin custom-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item me-4">
                  <Link to="/our-work" className="nav-link custom-link">
                    Our Work
                  </Link>
                </li>
                <hr />
              </div>
              <li className="nav-item me-3">
                <a
                  href="tel:+447440365853"
                  className="fs-5 d-flex align-items-center custom-action-link"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +44
                  (0)7440 365 853
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        className={`navbar navbar-expand-lg bg-nav py-3 fixed-top ${scrolled ? "d-block" : "d-none"} box-shadow-two`}
      >
        <div className="container position-relative">
          <a
            className="navbar-brand monsieur-la-doulaise-regular fs-2"
            href="/"
          >
            <img src={Logo} className="img-fluid" alt="" width={"100px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle d-none d-lg-flex">
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link custom-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item me-4">
                <Link to="/our-work" className="nav-link custom-link">
                  Our Work
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <div className="d-lg-none">
                <li className="nav-item me-4">
                  <a className="nav-link custom-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link custom-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link custom-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item me-4">
                  <Link to="/our-work" className="nav-link custom-link">
                    Our Work
                  </Link>
                </li>
                <hr />
              </div>
              <li className="nav-item me-3">
                <a
                  href="tel:+447440365853"
                  className="fs-5 d-flex align-items-center custom-action-link"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +44
                  (0)7440 365 853
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
