import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./../Service/Service";

const ServicesForHome = () => {
  const [service, setService] = useState([]);
  //const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <h1 className="my-2"> Top Services</h1>
        <hr className="bg-info " />
        <Row xs={2} md={4} lg={4}>
          {service.slice(0, 4).map((serviceitem) => (
            <Service key={serviceitem.id} serviceitem={serviceitem}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesForHome;
