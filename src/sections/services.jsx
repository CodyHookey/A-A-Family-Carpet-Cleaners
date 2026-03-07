import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faCouch,
  faMattressPillow,
  faRug,
} from "@fortawesome/free-solid-svg-icons";

function ServicesSection() {
  return (
    <div className="bg-light">
      <div className="container py-5 text-center">
        <h3 className="mb-5">Our Cleaning Services Include</h3>
        <div className="row g-5">
          <div className="col-12 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "black",
                }}
                className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              >
                <FontAwesomeIcon
                  icon={faRug}
                  style={{ color: "white" }}
                  size="2xl"
                />
              </div>
              <h4 className="fw-bold">Carpets</h4>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "black",
                }}
                className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              >
                <FontAwesomeIcon
                  icon={faCouch}
                  style={{ color: "white" }}
                  size="2xl"
                />
              </div>
              <h4 className="fw-bold">Sofas & Upholstery</h4>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "black",
                }}
                className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              >
                <FontAwesomeIcon
                  icon={faMattressPillow}
                  style={{ color: "white" }}
                  size="2xl"
                />
              </div>
              <h4 className="fw-bold">Mattresses</h4>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "black",
                }}
                className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              >
                <FontAwesomeIcon
                  icon={faChair}
                  style={{ color: "white" }}
                  size="2xl"
                />
              </div>
              <h4 className="fw-bold">Corner Sofas & Armchairs</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
