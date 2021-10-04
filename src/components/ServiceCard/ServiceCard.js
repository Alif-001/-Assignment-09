import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { name, img, price, id, details } = props.setServiceForHome;
  return (
    <Col className="d-flex align-items-stretch">
      <Card className="my-3">
        <Card.Img variant="top" src={img} height="200px" />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <h5>Price : ${price}</h5>
          <Card.Text className="my-3">{details.slice(0, 100)}...</Card.Text>
          <div className="col align-self-end">
            <Link
              to={`/service/${id}/${name.replace(/ /g, "-").toLowerCase()}`}
              className="btn btn-info fw-bolder btn-block "
            >
              Details
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
