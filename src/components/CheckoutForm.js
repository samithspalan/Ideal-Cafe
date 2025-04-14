import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    delivery: 'Dine-in'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" required onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" required onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Delivery Option</Form.Label>
        <Form.Select name="delivery" onChange={handleChange}>
          <option>Dine-in</option>
          <option>Takeaway</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">Place Order</Button>
    </Form>
  );
};

export default CheckoutForm;
