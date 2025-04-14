import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const SignupForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    if (!email || !password) return setError('All fields are required');
    if (password !== confirmPassword) return setError('Passwords do not match');
    setError('');
    console.log('Signup successful:', formData);
    // Simulate storing user data or success message
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 shadow-sm rounded-4 bg-light">
      <h3>Sign Up</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="signupEmail" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="signupPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="confirmPassword" className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirmPassword" onChange={handleChange} required />
      </Form.Group>
      <Button type="submit" variant="primary">Create Account</Button>
    </Form>
  );
};

export default SignupForm;
