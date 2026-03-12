import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container py-5 text-center" id="contact">
      <h3 className="fw-bold">Contact Us</h3>
      <h5 className="mb-5">
        If you would like to book a cleaning service or have any questions, feel
        free to get in touch.
      </h5>

      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-5">
        <a
          href="tel:07440365853"
          className="btn custom-btn px-5 py-3 mb-3 me-md-3"
        >
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          Message Us
        </a>
        <a
          className="btn custom-btn px-5 py-3 mb-3"
          href="mailto:familycarpetcliners@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          Email Us
        </a>
      </div>

      <h4 className="fw-bold">Socials</h4>
      <h5 className="mb-5">Follow us on our socials.</h5>
      <div className="d-flex justify-content-center">
        <a
          href="https://www.facebook.com/people/AA-Family-Carpet-Cleaners/61587477011232/?rdid=x28bKMWIiLlSMQfh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Ls7jF6X2%2F"
          aria-label="Facebook"
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="me-3"
            size="2xl"
            style={{ color: "#00a8e8" }}
          />
        </a>
        <a
          href="https://www.instagram.com/family_carpet_cleners_ua"
          aria-label="Instagram"
        >
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="me-3"
            size="2xl"
            style={{ color: "#00a8e8" }}
          />
        </a>
        <a
          href="https://www.tiktok.com/@family_carpet_cleners_ua"
          aria-label="Tiktok"
        >
          <FontAwesomeIcon
            icon={faTiktok}
            size="2xl"
            style={{ color: "#00a8e8" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
