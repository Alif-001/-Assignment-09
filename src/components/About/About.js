import React from "react";
import "./About.css";
import aboutimg from "../../image/Designer _Flatline.png";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center ">
      <div className=" w-100  ms-5">
        <div className=" my-5  w-50 text-center">
          <h2>We are E-learning.</h2>
          <p>
            An online learning community At E-learning, we believe everyone
            should have the opportunity to create progress through technology
            and develop the skills of tomorrow. With assessments, learning paths
            and courses authored by industry experts.
          </p>
        </div>
        <div
          className="my-5 ms-5 w-50 text-center
         "
        >
          <h4>A leadership team with vision</h4>
          <p>
            Our executives lead by example and guide us to accomplish great
            things every day. Online learning offers a new way to explore.
          </p>
        </div>
      </div>
      <div>
        <img src={aboutimg} alt="" />
      </div>
    </div>
  );
};

export default About;
