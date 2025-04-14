import React, { useState} from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Menu = ({ searchQuery }) => {
  const { addToCart } = useCart();

  const menuItems = [
    { id: 1, name: 'Vanilla Ice Cream', category: 'Ice Creams', price: 150, img: 'https://i.pinimg.com/736x/19/83/f7/1983f7601f0f77c035c08d0161ea2ed6.jpg' },
    { id: 2, name: 'Chocolate Sundae', category: 'Ice Creams', price: 180, img: 'https://cookienameddesire.com/wp-content/uploads/2018/05/brownie-sundae.jpg' },
    { id: 3, name: 'Strawberry Delight', category: 'Desserts', price: 160, img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_27/2919166/better_ice_cream.jpg' },
    { id: 4, name: 'Mango Sorbet', category: 'Ice Creams', price: 140, img: 'https://www.aimadeitforyou.com/wp-content/uploads/2019/05/Mango-Lime-Sorbet-7.jpg' },
    { id: 5, name: 'Hot Coffee', category: 'Beverages', price: 90, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNeMdjvZtpt_L0eDDy9fCpP1XjvBfJHyV0Q&s' },
    { id: 6, name: 'Cold Coffee', category: 'Beverages', price: 110, img: 'https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg' },
    { id: 7, name: 'Fries', category: 'Snacks', price: 120, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdfhNHFpts2r5tUFzCJIHyLC7XRIF5dV8g&s' },
    { id: 8, name: 'Brownie Sundae', category: 'Desserts', price: 200, img: 'https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg' },
  ];

  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('');

  const filteredItems = menuItems.filter(item => {
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false; // Filter based on search query
    if (filter === 'All') return true;
    if (filter === 'Only Ice Creams') return item.category === 'Ice Creams';
    if (filter === 'Popular') return ['Vanilla Ice Cream', 'Fries'].includes(item.name);
    if (filter === 'New Arrivals') return ['Brownie Sundae', 'Cold Coffee'].includes(item.name);
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'Price Low to High') return a.price - b.price;
    if (sortOption === 'Price High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Menu</h2>

      {/* Filters & Sorting */}
      <div className="d-flex justify-content-between flex-wrap mb-4">
        <Form.Select
          className="mb-2 me-2"
          style={{ width: '200px' }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Only Ice Creams">Only Ice Creams</option>
          <option value="Popular">Popular</option>
          <option value="New Arrivals">New Arrivals</option>
        </Form.Select>

        <Form.Select
          className="mb-2"
          style={{ width: '200px' }}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="Price Low to High">Price Low to High</option>
          <option value="Price High to Low">Price High to Low</option>
        </Form.Select>
      </div>

      {/* Menu Grid */}
      <Row>
        {sortedItems.map((item) => (
          <Col sm={6} md={4} lg={3} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCart(item)}
                  className="mt-auto"
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
