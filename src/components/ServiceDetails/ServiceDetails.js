import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// fetching data
const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("../../../services.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  let singleService = service.find((prod) => prod.id === id);

  if (typeof singleService == "undefined") {
    singleService = "";
  }
  console.log(singleService.title);

  return (
    <div>
      <h3>{singleService.title}</h3>
      <img src={singleService.img} alt="" />
      <h4>${singleService.price}</h4>
    </div>
  );
};

export default ServiceDetails;
