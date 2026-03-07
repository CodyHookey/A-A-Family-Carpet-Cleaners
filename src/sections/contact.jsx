import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="container py-5 text-center">
      <h3 className="fw-bold">Contact A&A Family Carpet Cleaners</h3>
      <h5 className="mb-5">
        If you would like to book a cleaning service or have any questions, feel
        free to get in touch.
      </h5>

      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <button className="btn custom-btn px-5 py-3 mb-3 me-3">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          Call / Message: 07440 365853
        </button>
        <a
          className="btn custom-btn px-5 py-3 mb-3"
          href="mailto:familycarpetcliners@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          Email: familycarpetcliners@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
