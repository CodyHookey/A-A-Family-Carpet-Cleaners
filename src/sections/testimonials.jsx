import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <div className="light-blue-bg">
      <div className="container py-5">
        <h3 className="fw-bold text-center">Reviews</h3>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-dark"
          data-bs-touch="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active text-center py-5">
              <div className="mb-3">
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
              </div>
              <h5>
                Fantastic Job!!! So pleased with the outcome and a lovely couple
                too!!
              </h5>
              <p>
                <i>~ Courtney J</i>
              </p>
            </div>
            <div className="carousel-item text-center py-5 px-5">
              <div className="mb-3">
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
              </div>
              <h5 className="px-5">
                I'm extremely happy with the service from A&A Family Carpet
                Cleaners .They were punctual, professional, and very friendly
                throughout the whole process. My sofa looks and smells amazing —
                it honestly looks almost new again! They paid great attention to
                detail and made sure everything was spotless before leaving.
                <br /> The service was efficient, tidy, and completely
                stress-free. I would definitely recommend A&A Family Cleaner to
                anyone looking for high-quality sofa cleaning. <br />
                <br />
                Thank you so much for the excellent job!
              </h5>
              <p>
                <i>~ Stella I</i>
              </p>
            </div>
            <div className="carousel-item text-center py-5 px-5">
              <div className="mb-3">
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
              </div>
              <h5 className="px-5">
                Thank you very much, I am very pleased with your work.
                <br />
                It turned out superb - that big coffee stain has disappeared 😯
                <br />
                <br />I previously had another company clean the carpet, and I
                had to call them back to come a second time because I didn't
                like how they worked.
                <br />
                <br />
                You are wonderful. Thank you for your services.
                <br />I highly recommend you with great pleasure.
              </h5>
              <p>
                <i>~ Diana I</i>
              </p>
            </div>
            <div className="carousel-item text-center py-5 px-5">
              <div className="mb-3">
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#00a8e8" }}
                />
              </div>
              <h5 className="px-5">
                Perfect, simply perfect. <br />
                As if the sofa is brand new - very, very beautiful.
                <br /> All my salon clients will be calling you ❤️❤️❤️
              </h5>
              <p>
                <i>~ Adriana P</i>
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
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
    </div>
  );
}

export default Testimonials;
