import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <Form className="w-50 text-start my-5">
        {" "}
        <h1 className="text-center ">Contact Us</h1>
        <hr className="bg-info mb-5 " />
        <Form.Group className="my-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="info" type="submit" className="fw-bold text-white">
          Sing Up
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
