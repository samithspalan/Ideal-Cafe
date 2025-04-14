import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
  };

  return (
    <Container fluid className="py-5 bg-light rounded-4 shadow-sm">
      <Row>
        {/* Contact Form Section */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center text-muted">
            We'd love to hear from you. Please reach out to us using the form below.
          </p>

          <Form onSubmit={handleSubmit} className="w-75 mx-auto">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Support Info Section */}
        <Col md={6} className="p-4 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4">Customer Support</h3>
          <p>
            Our friendly customer support team is available to help you with inquiries related to orders,
            services, or suggestions.
          </p>
          <div className="mt-4">
            <h5>Support Details</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> support@idealcafe.com
              </li>
              <li>
                <strong>Phone:</strong> +91 987 654 3210
              </li>
              <li>
                <strong>Address:</strong> 123, MG Road, Bengaluru, Karnataka
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h5>Operating Hours</h5>
            <ul className="list-unstyled">
              <li>Monday - Friday: 9:00 AM – 9:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM – 11:00 PM</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
