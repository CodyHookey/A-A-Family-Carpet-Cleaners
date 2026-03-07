import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Referral() {
  return (
    <div className="bg-light">
      <div className="container py-5 text-center">
        <h3 className="fw-bold">Why Choose Us?</h3>
        <h5 className="mb-5">
          A&A Family Carpet Cleaners is a family-run business dedicated to
          delivering professional carpet and upholstery cleaning with care,
          reliability, and attention to detail.
        </h5>
        <div className="row g-3 text-center">
          <div className="col-12 col-md-3">
            <div className="bg-white box-shadow rounded p-3 h-100">
              <h5 className="fw-bold mb-3">Family-owned and operated</h5>
              <p>
                A&A Family Carpet Cleaners is built on family values, meaning
                every customer receives friendly, reliable service and genuine
                care for their home.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="bg-white box-shadow rounded p-3 h-100">
              <h5 className="fw-bold mb-3">
                Professional carpet & upholstery cleaning
              </h5>
              <p>
                Using professional cleaning equipment and proven techniques,
                carpets, sofas, and upholstery are deep cleaned to remove dirt,
                stains, and everyday buildup.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="bg-white box-shadow rounded p-3 h-100">
              <h5 className="fw-bold mb-3">Reliable and friendly service</h5>
              <p>
                Dependable service and clear communication help ensure every
                cleaning job is completed smoothly and professionally.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="bg-white box-shadow rounded p-3 h-100">
              <h5 className="fw-bold mb-3">
                Helping homes look fresh and clean again
              </h5>
              <p>
                The goal is simple: to help create cleaner, healthier living
                spaces with high-quality carpet and upholstery cleaning
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
