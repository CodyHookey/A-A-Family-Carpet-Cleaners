import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import ImageOne from "../assets/image_001.jpeg";
import ImageTwo from "../assets/image_002.jpeg";
import ImageThree from "../assets/image_003.jpeg";
import ImageFour from "../assets/image_004.jpeg";
import ImageFive from "../assets/image_005.jpeg";

function AboutSection() {
  return (
    <div className="container py-5">
      <h3 className="mb-5 fw-bold text-center">
        About A&A Family Carpet Cleaners
      </h3>
      <div className="row g-5">
        <div className="col-12 col-md-4">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide"
            data-bs-touch="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ImageOne} className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src={ImageTwo} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={ImageFour} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={ImageFive} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
          <div className="mb-3 text-center text-md-start">
            <p>
              A&A Family Carpet Cleaners is a family-run carpet cleaning
              business founded by Anastasiia and Andrii. What started as a small
              idea quickly grew into a dedicated service focused on helping
              homes feel cleaner, fresher, and more comfortable.
            </p>
            <p>
              As a family business built from the ground up, pride is taken in
              every job. The goal is simple: provide professional carpet and
              upholstery cleaning with attention to detail, reliability, and
              genuine care for every customer’s home.
            </p>
            <p>
              Using professional equipment and effective deep-cleaning methods,
              A&A Family Carpet Cleaners works to remove dirt, stains, and
              everyday buildup from carpets and furniture, helping to restore
              them to their best condition.
            </p>
            <h5 className="fw-bold">What We Do</h5>
            <p>
              A&A Family Carpet Cleaners specialises in professional cleaning
              services designed to refresh and revitalise your home, including:
            </p>
            <p className="ms-3">&bull; Carpet cleaning</p>
            <p className="ms-3">&bull; Sofa and upholstery cleaning</p>
            <p className="ms-3">&bull; Mattress cleaning</p>
            <p className="ms-3">&bull; Corner sofa cleaning</p>
            <p className="ms-3">&bull; Armchair and furniture cleaning</p>
            <p>
              Each service is carried out with care and a commitment to
              delivering high-quality results.
            </p>
            <h5 className="fw-bold">A Family Business You Can Trust</h5>
            <p>
              Being a family-owned business means every customer and every home
              is treated with respect. The focus is always on providing
              dependable service, professional results, and a cleaner living
              space for every household.
            </p>
          </div>
          <button className="btn custom-btn px-5 py-3 mb-3">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            Call Us 07440 365853
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
