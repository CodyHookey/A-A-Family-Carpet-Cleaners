import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faCalendarDays,
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function QuickInfo() {
  return (
    <div className="container py-5 text-center">
      <h3 className="fw-bold mb-5">3 Simple Steps to a Cleaner Home</h3>
      <div className="row mb-5">
        <div className="col-12 col-md-4 mb-5 mb-md-0">
          <FontAwesomeIcon icon={faMobileScreen} size="2xl" className="mb-3" />
          <h4 className="fw-bold mb-3">1. Get In Touch Today</h4>
          <p>
            Get in touch today and let us know what your cleaning needs are.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-5 mb-md-0">
          <FontAwesomeIcon icon={faCalendarDays} size="2xl" className="mb-3" />
          <h4 className="fw-bold mb-3">2. Arrange a Preferred Time</h4>
          <p>
            Arrange a time to make sure you get your stuff cleaned when it works
            for you.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <FontAwesomeIcon icon={faHouse} size="2xl" className="mb-3" />
          <h4 className="fw-bold mb-3">3. Enjoy a Clean Home</h4>
          <p>
            We will leave your carpets, sofas and upholstery clean and smelling
            better than when you bought it.
          </p>
        </div>
      </div>
      <button className="btn custom-btn px-5 py-3 mb-3">
        <FontAwesomeIcon icon={faPhone} className="me-2" />
        Call Us 07440 365853
      </button>
    </div>
  );
}

export default QuickInfo;
