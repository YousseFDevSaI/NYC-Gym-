import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const SignUp = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/user/signup', { name, contact, address, email, password }).then((res) => {
    console.log(res.data);
    alert('You will Be redirected to the Login page in a second ')
    setTimeout(() => {
      window.location = 'http://localhost:3001/';
    }, 1000);
    
  });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </Form.Group>
      <Form.Group controlId="formContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};








export default SignUp;
