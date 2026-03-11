import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Referral() {
  return (
    <div className="light-blue-bg">
      <div className="container py-5 text-center">
        <h3 className="fw-bold">Why Choose Us?</h3>
        <h5 className="mb-5">
          A&A Family Carpet Cleaners is a family-run business dedicated to
          delivering professional carpet and upholstery cleaning with care,
          reliability, and attention to detail.
        </h5>
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="card h-100 box-shadow ">
              <div className="p-3 card-img-top primary-blue-bg d-flex align-items-center justify-content-center">
                <h5 className="text-white mb-0 mt-0 fw-bold">
                  Proudly Family-owned and operated
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  A&A Family Carpet Cleaners is built on family values, meaning
                  every customer receives friendly, reliable service and genuine
                  care for their home.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="card h-100 box-shadow ">
              <div className="p-3 card-img-top primary-blue-bg d-flex align-items-center justify-content-center">
                <h5 className="text-white mb-0 mt-0 fw-bold">
                  Professional carpet & upholstery cleaning
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Using professional cleaning equipment and proven techniques,
                  carpets, sofas, and upholstery are deep cleaned to remove
                  dirt, stains, and everyday buildup.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
            <div className="card h-100 box-shadow ">
              <div className="p-3 card-img-top primary-blue-bg d-flex align-items-center justify-content-center">
                <h5 className="text-white mb-0 mt-0 fw-bold">
                  Reliable and friendly service every time
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Dependable service and clear communication help ensure every
                  cleaning job is completed smoothly and professionally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
            <div className="card h-100 box-shadow ">
              <div className="p-3 card-img-top primary-blue-bg d-flex align-items-center justify-content-center">
                <h5 className="text-white mb-0 mt-0 fw-bold">
                  Helping homes look fresh and clean again
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  The goal is simple: to help create cleaner, healthier living
                  spaces with high-quality carpet and upholstery cleaning
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
