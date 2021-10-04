import React from "react";

import headerImg from "../../image/headerImg5.png";
import "./header.css";

const Header = () => {
  return (
    <div
      id="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        paddingTop: "100px",
        marginTop: "50px",
      }}
    >
      <div
        id="home"
        className="text-left mb-5 w-75 pe-5 text-center
      "
      >
        <div className="header-title">
          <h1 className="fadeInLeft me-5 pe-5 title">Welcome to E-learning</h1>
          <div className="header-p">
            <div className="px-5 mx-5 ">
              <h4 className="me-5">We Take Learning to New Heights.</h4>
              <p className=" me-5  ">
                We believe everyone has the capacity to be creative. E-learning
                is a place where people develop their own potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
