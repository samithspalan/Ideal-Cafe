import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    image: '',
  });

  const [menuItems, setMenuItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price || !newItem.category) return;
    setMenuItems(prev => [...prev, { ...newItem, id: Date.now() }]);
    setNewItem({ name: '', category: '', description: '', price: '', image: '' });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>

      {/* Add Menu Item Form */}
      <Form onSubmit={handleAddItem} className="mb-5 shadow-sm p-4 bg-light rounded-4">
        <h4>Add New Menu Item</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={newItem.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={newItem.category} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Ice Creams">Ice Creams</option>
                <option value="Desserts">Desserts</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control type="number" name="price" value={newItem.price} onChange={handleChange} required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={newItem.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control name="image" value={newItem.image} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="primary" className="w-100 mt-2">Add Item</Button>
      </Form>

      {/* Display Added Items */}
      <h4 className="mb-3">Menu Preview</h4>
      <Row>
        {menuItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image || "https://via.placeholder.com/150"} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>₹{item.price}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminDashboard;
