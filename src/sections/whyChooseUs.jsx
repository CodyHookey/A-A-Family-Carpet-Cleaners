import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Referral() {
  return (
    <div className="bg-light">
      <div className="container py-5 text-center">
        <h3 className="fw-bold">Why Choose Us?</h3>
        <h5 className="mb-3">
          A&A Family Carpet Cleaners is a family-run business dedicated to
          delivering professional carpet and upholstery cleaning with care,
          reliability, and attention to detail.
        </h5>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Family-owned and operated
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Professional carpet & upholstery
          cleaning
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Reliable and friendly service
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} /> Helping homes look fresh and clean
          again
        </p>
      </div>
    </div>
  );
}

export default Referral;
