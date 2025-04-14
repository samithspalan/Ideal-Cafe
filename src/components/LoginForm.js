import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) return setError('All fields are required');
    setError('');
    console.log('Login successful:', formData);
    // Simulate login flow or redirect
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 shadow-sm rounded-4 bg-light">
      <h3>Login</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="loginEmail" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="loginPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} required />
      </Form.Group>
      <Button type="submit" variant="success" className="w-100">Log In</Button>

      <div className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
