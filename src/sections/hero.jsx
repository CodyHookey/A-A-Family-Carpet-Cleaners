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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container vh-100 d-flex align-items-center text-center text-md-start">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center text-white">
            <div>
              <h1 className="mb-3 fw-bold hero-title pb-3">
                Professional Carpet Cleaning Services and More in Milton Keynes
              </h1>
              <h5 className="mb-3">
                A&A Family Carpet Cleaners provides expert carpet, Sofas and
                upholstery, mattresses, corner sofas and armchairs cleaning with
                powerful deep-clean technology that removes stains, dirt, and
                pet odors.
              </h5>
              <h5 className="ms-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Carpets
              </h5>
              <h5 className="ms-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Sofas & Upholstery
              </h5>
              <h5 className="ms-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Mattresses
              </h5>
              <h5 className="ms-4 mb-4">
                <FontAwesomeIcon icon={faCheck} /> Corner Sofas & Armchairs
              </h5>
            </div>
          </div>

          <div className="col-12 col-md-4 ms-auto d-flex align-items-center">
            <div className="box-shadow py-5 rounded text-center bg-white">
              <h3 className="mb-5 fw-bold">Get a Quote Today!</h3>
              <p className="px-5 mb-5">
                Tell us what you need done and we will be in touch shortly
              </p>
              <button className="btn custom-btn px-5 py-3 fs-5 mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Call Us 07440 365853
              </button>
              <p>Or</p>
              <a
                className="btn custom-btn px-5 py-3 fs-5"
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
