import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HeroImage from "../assets/newHeroImage.jpg";

function HeroSection() {
  return (
    <div
      className="container d-flex align-items-center text-center text-lg-start mt-5 mt-lg-0 pb-5 pb-md-0"
      style={{ minHeight: "100vh" }}
    >
      <div className="row mt-5">
        <div className="col-12 col-md-7 d-flex align-items-center">
          <div>
            <h1 className="mb-3 fw-bold hero-title pb-3 mt-5 mt-lg-0">
              Professional{" "}
              <span className="primary-blue">Family-Owned Carpet Cleaning</span>{" "}
              Services and More in Bedford, Northampton & Milton Keynes
            </h1>
            <h5 className="mb-5">
              <strong className="primary-blue">
                A&A Family Carpet Cleaners
              </strong>{" "}
              provides expert cleaning services for carpets, sofas, upholstery,
              mattresses, corner sofas, and armchairs. Using powerful deep-clean
              technology, we remove dirt, tough stains, and pet odours to
              restore freshness and comfort to your home.
            </h5>
            <a
              href="sms:+447440365853"
              className="btn custom-btn px-5 py-2 fw-bold"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-5 ms-auto d-flex align-items-center justify-content-center order-first order-lg-last mb-5 mt-5">
          <img
            src={HeroImage}
            alt=""
            className="img-fluid rounded hero-image"
            width={"450px"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
