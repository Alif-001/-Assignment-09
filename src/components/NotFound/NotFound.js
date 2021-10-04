import React from "react";
import img404 from "../../image/404 Page Not Found .png";
// not found
const NotFound = () => {
  return (
    <div className="my-5">
      <img src={img404} alt="" />
      <h2 className=" m-5 pb-5">
        <span className="text-danger my-3 pb-5">oops! </span>Page not found
      </h2>
    </div>
  );
};

export default NotFound;
