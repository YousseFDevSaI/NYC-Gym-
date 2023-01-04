import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import httpStatusCodes from 'http-status-codes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/user/login', { email, password })
      .then((res) => {
        if (res.status === httpStatusCodes.ACCEPTED) {
          // Welcome message
          alert(`Welcome ! You will be redirected to the home page in a second .`);
          // Redirect to home page after 1 seconds
          setTimeout(() => {
            window.location = 'https://hompage.nicepage.io/?version=3b708eed-a4e4-483d-9f5d-b32d0ee955c7';
          }, 1000);
        } else {
          alert('Your Password Or Your Email Might Be Wrong. Please Try Again');
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
