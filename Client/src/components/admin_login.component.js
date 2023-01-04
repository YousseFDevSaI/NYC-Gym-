import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Alert } from 'react-bootstrap';
import httpStatusCodes from 'http-status-codes';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/admin/login', { email, password })
      .then((res) => {
        if (res.status === httpStatusCodes.ACCEPTED) {
          alert('You Will be redirected to The Admin Page');
          setTimeout(() => {
            window.location = 'http://localhost:3001/adminpage';
          }, 0);
        } else {
          // Login failed, set the error message
          setError('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => {
        setError('Error');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Log In
      </Button>
    </Form>
  );
};

export default AdminLogin;
