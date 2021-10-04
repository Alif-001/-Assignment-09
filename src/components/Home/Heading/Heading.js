import React from "react";
import bgImg from "../../../image/headerImg5.png";

const Heading = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      {" "}
      <h1>this is a heading</h1>
    </div>
  );
};

export default Heading;
