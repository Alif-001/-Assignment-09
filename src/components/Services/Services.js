import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services m-5">
      <Container>
        <h1 className="m-3">Services</h1>
        <Row xs={2} md={4} lg={4} className="d-flex align-items-stretch">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
