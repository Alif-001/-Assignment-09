import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="  footer
    "
    >
      <h1>this is footer</h1>
      <div className="d-flex justify-content-evenly">
        {" "}
        <div>
          <h4>© 2021 Coursera Inc. All rights reserved.</h4>
        </div>
        <div>
          <h4>call:224584295420</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
