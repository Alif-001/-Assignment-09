import React from "react";
import "./About.css";
import aboutimg from "../../image/Designer _Flatline.png";

const About = () => {
  return (
    <div className="container">
      {" "}
      <h1 className="mt-5">About us </h1>
      <div className="d-flex justify-content-center ">
        <hr className="bg-info w-50 mx-5 px-5 align-items-center" />
      </div>
      <div className="">
        <div className="d-flex w-100  ms-5">
          <div className="ms-5">
            <img src={aboutimg} alt="" className="" />
          </div>
          <div className="ms-5 ps-5 ">
            <div className="d-flex flex-column w-75">
              <div id="about" className="align-items-center ">
                <div className="  my-5   text-start">
                  <h2>We are E-learning.</h2>
                  <p>
                    An online learning community At E-learning, we believe
                    everyone should have the opportunity to create progress
                    through technology and develop the skills of tomorrow. With
                    assessments, learning paths and courses authored by industry
                    experts.
                  </p>
                </div>
                <div className="my-5 text-start">
                  <h4>A leadership team with vision</h4>
                  <p>
                    Our executives lead by example and guide us to accomplish
                    great things every day. Online learning offers a new way to
                    explore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
