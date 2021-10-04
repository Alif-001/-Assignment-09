import React from "react";
import img404 from "../../image/404 Page Not Found .png";

const NotFound = () => {
  return (
    <div className="my-5">
      <img src={img404} alt="" />
      <h2>
        <span className="text-danger m-3">oops! </span>Page not found
      </h2>
    </div>
  );
};

export default NotFound;
