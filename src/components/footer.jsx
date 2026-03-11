import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="dark-blue-bg text-white py-5 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-white">A&A Family Carpet Cleaners</h5>
            <p className="text-white">
              Professional carpet and upholstery cleaning delivered with care,
              reliability, and attention to detail.
            </p>
          </div>

          <div className="col-md-2">
            <h6 className="text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="text-white">Contact</h6>
            <p>
              <a
                href="tel:07440365853"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" /> 07440 365853
              </a>
            </p>
            <p>
              <a
                href="mailto:familycarpetcliners@gmail.com"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                familycarpetcliners@gmail.com
              </a>
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="text-white">Service Area</h6>
            <p className="text-white">Milton Keynes & surrounding areas</p>
          </div>
        </div>

        <hr />

        <p className="text-center mb-0 text-white">
          © 2026 A&A Family Carpet Cleaners. All rights reserved. | Built By{" "}
          <a href="https://cody-hookey.dev/" className="text-white">
            Cody Hookey
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
