import React from "react";
import bgImg from "../../../image/bg.png";
import "./Heading.css";
//  Header section
const Heading = () => {
  return (
    <div
      className="img-fluid d-flex justify-content-start mb-0 "
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",

        objectFit: "fill",
        padding: "130px",
        // marginLeft: "200px",
        backgroundSize: "contain, cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-75 me-5 pe-5 text-center header-img fadeInLeft">
        <h1 className="w-75">
          Learn Anytime, Anywhere. Accelerate Your Future.
        </h1>
        <p className="w-50 ms-5 ps-5">
          We believe everyone has the capacity to be creative. E-learning is a
          place where people develop their own potential.
        </p>
      </div>
    </div>
  );
};

export default Heading;
