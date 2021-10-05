import React from "react";
// fioter section
const Footer = () => {
  return (
    <div
      className="  footer bg-info mt-5
    "
      style={{ listStyle: "none" }}
    >
      <div className="d-flex justify-content-evenly pt-5 text-start">
        {" "}
        <div>
          <div>
            <h4>Company</h4>
            <ul style={{ listStyle: "none", paddingRight: "10px" }}>
              <li>About</li>
              <li>Career</li>
              <li>Resource</li>
              <li>Guides</li>
            </ul>
          </div>
          <hr className="w-100" />
          <h6>
            © 2021<span className="text-white"> E-learning</span> Inc. All
            rights reserved.
          </h6>
        </div>
        <div>
          <div>
            <h4>Support</h4>
            <ul style={{ listStyle: "none" }}>
              <li>Contact us</li>
              <li>Site feedback</li>
              <li>System Requirements</li>
              <li>Register Activation Key</li>
            </ul>
          </div>
          <hr className="w-100" />
          <h4>Call : 05265-28285</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
