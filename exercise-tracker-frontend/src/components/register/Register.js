import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helper/axiosHelper.js";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [frmDt, setFormDt] = useState({ initialState });

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setFormDt({
      ...frmDt,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await postRegister(frmDt);
    console.log(data);
  };

  return (
    <Row className="login-comp mt-5 py-5">
      <Form onSubmit={handleOnSubmit}>
        <h3> Get Registered here </h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleOnChange}
            placeholder="Enter full name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          already have a account?
          <Link to="/"> Login Here</Link>
        </div>
      </Form>
    </Row>
  );
};
