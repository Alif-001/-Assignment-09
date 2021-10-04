import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { title, img, price } = props.serviceitem;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h4>Price : ${price}</h4>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/notfound" className="btn btn-primary">
            Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
