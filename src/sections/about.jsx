import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import ImageSix from "../assets/IMG_6062.webp";

function AboutSection() {
  return (
    <div className="container py-5" id="about">
      <h3 className="mb-5 fw-bold text-center d-none d-lg-block">About Us</h3>
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 mb-5 mb-md-0 d-flex justify-content-center">
          <img
            src={ImageSix}
            alt=""
            className="img-fluid rounded about-img mb-5"
            style={{ maxHeight: "640px" }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
          <div className="mb-3 text-center text-lg-start">
            <h3 className="mb-5 fw-bold text-center d-block d-lg-none">
              About Us
            </h3>
            <p>
              A&A Family Carpet Cleaners is a family-run business started by
              Anastasiia and Andrii. What began as a small idea has grown into a
              service focused on helping people enjoy cleaner, fresher homes.
            </p>

            <p>
              As a family business, we genuinely care about the work we do and
              the homes we visit. Every job is carried out with attention to
              detail, the right professional equipment, and a commitment to
              leaving your carpets and furniture looking their best.
            </p>

            <h5 className="fw-bold">What We Do</h5>
            <p>
              We offer professional cleaning services designed to refresh and
              restore your home, including:
            </p>

            <ul className="list-unstyled">
              <li>&bull; Carpet cleaning</li>
              <li>&bull; Sofa and upholstery cleaning</li>
              <li>&bull; Mattress cleaning</li>
              <li>&bull; Corner sofa cleaning</li>
              <li>&bull; Armchair and furniture cleaning</li>
            </ul>

            <h5 className="fw-bold">A Family Business You Can Trust</h5>
            <p>
              We treat every home with the same care and respect we would our
              own. Our goal is simple — provide reliable service, great results,
              and a cleaner, more comfortable space for you and your family.
            </p>
          </div>
          <button
            href="tel:07440365853"
            className="btn custom-btn px-5 py-3 mb-3"
          >
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
