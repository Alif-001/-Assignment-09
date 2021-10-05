import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, price, details } = props.serviceitem;
  // card data
  return (
    <Col className="my-5 h-100 align-items-stretch ">
      <Card className="align-items-stretch  h-100">
        <Card.Img variant="top" src={img} width="100px" height="200px" />
        <Card.Body>
          <Card.Title className="fs-5">{name}</Card.Title>
          <h5>Price : ${price}</h5>
          <Card.Text>{details.slice(0, 100)}...</Card.Text>
          <Link to="/notfound" className="btn btn-info">
            Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
