import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Row className="login-comp mt-5 py-5">
      <Form>
        <h3> Welcome to Exercise Tracker </h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="text-end">
          <Link to="/register"> Register here</Link>
        </div>
      </Form>
    </Row>
  );
};
