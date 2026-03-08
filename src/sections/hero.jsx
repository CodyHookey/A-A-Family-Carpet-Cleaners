import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HeroImage from "../assets/heroImage.png";
import AltImage from "../assets/altImage.jpg";

function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${AltImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="container d-flex align-items-center text-center text-md-start mt-5 mt-md-0 pb-5 pb-md-0"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center text-white mt-5 mt-md-0">
            <div>
              <h1 className="mb-3 fw-bold hero-title pb-3 mt-5 mt-md-0">
                Professional Carpet Cleaning Services and More in Milton Keynes
              </h1>
              <h5 className="mb-3">
                A&A Family Carpet Cleaners provides expert carpet, Sofas and
                upholstery, mattresses, corner sofas and armchairs cleaning with
                powerful deep-clean technology that removes stains, dirt, and
                pet odors.
              </h5>
              <h5 className="ms-md-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Carpets
              </h5>
              <h5 className="ms-md-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Sofas & Upholstery
              </h5>
              <h5 className="ms-md-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Mattresses
              </h5>
              <h5 className="ms-md-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Corner Sofas & Armchairs
              </h5>
            </div>
          </div>

          <div className="col-12 col-md-5 ms-auto d-flex align-items-center justify-content-center">
            <div className="box-shadow py-5 rounded text-center bg-white">
              <h3 className="mb-5 fw-bold">Get a Quote Today!</h3>
              <p className="px-5 mb-5">
                Tell us what you need done and we will be in touch shortly
              </p>
              <a
                href="tel:07440365853"
                className="btn custom-btn px-5 py-3 mb-3"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Call Us 07440 365853
              </a>
              <p>Or</p>
              <a
                className="btn custom-btn px-5 py-3"
                href="mailto:familycarpetcliners@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
