import React from "react";
import "./Hero.css";
import pic from "../../assets/pic.jpg";
import cv from "../../assets/cv.pdf";
import cvicon from "../../assets/cvicon.jpg";

function Hero() {
  return (
    <div className="card text-center mx-5 mt-5 py-3 border-0" id="hero">
      <div className="card-body">
        <div className="card shadow">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-5">
                <h1 className="card-title">The Future of Tech</h1>
                <p className="herotext mx-4">
                  As a dedicated and passionate student, I am excited to share
                  my academic journey with you through this portfolio. This
                  collection of works showcases my growth and development as a
                  writer, thinker, and creative problem solver throughout my
                  college years.
                </p>
                <a href={cv} download>
                  <button type="button" class="btn btn-light">
                    <img src={cvicon} className="icon" alt="" />
                    _RESUME
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={pic}
                className="img-fluid rounded-circle w-75 py-5"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
