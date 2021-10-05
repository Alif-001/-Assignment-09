import React from "react";
import { Link } from "react-router-dom";

import "./Heading.css";
//  Header section
const Heading = () => {
  return (
    <div className=" container-fluid m-0 p-0 d-flex     ">
      <div
        id="head-img"
        className="   d-flex justify-content-start img-fluid    "
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          padding: "50px",
        }}
      >
        <div className=" d-flex flex-column w-75 mt-4 m text-center justify-content-center align-items-center header-img fadeInLeft ">
          <div>
            <div className=" text-start">
              <div className="w-75 -text-center   ">
                <h1 className=" d-flex text-justify">
                  Learn Anytime, Anywhere. Accelerate Your Future.
                </h1>
              </div>
            </div>
            <div className="d-flex ">
              <p className="w-50 d-flex text-start  ">
                We believe everyone has the capacity to be creative. E-learning
                is a place where people develop their own potential.
              </p>
            </div>
            <div
              id="btn-header"
              className="d-flex container p-0
              "
            >
              <Link
                to="/contact"
                className="btn btn-info fw-bold text-white align-self-start"
              >
                Sing-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
