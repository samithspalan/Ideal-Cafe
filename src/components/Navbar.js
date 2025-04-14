import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ darkMode, setSearchQuery }) => {
  const [searchQuery, setLocalSearchQuery] = useState('');

  // Function to handle the change in the search input field
  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  // Function to handle form submission (search)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery); // Pass search query to parent (App or Menu)
  };

  return (
    <Navbar expand="lg" className={`py-3 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-4">Ideal Café</Navbar.Brand>

        <Nav className="d-flex align-items-center ms-auto">
          <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu" className="mx-2">Menu</Nav.Link>
          <Nav.Link as={Link} to="/locations" className="mx-2">Locations</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-2">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/login" className="mx-2">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="mx-2">Cart</Nav.Link>
          <Nav.Link as={Link} to="/admin" className="mx-2">Admin Dashboard</Nav.Link>

          {/* Search bar */}
          <div className="d-flex align-items-center ms-auto" style={{ minWidth: '300px' }}>
            <Form className="d-flex flex-grow-1" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search dishes..."
                className="me-2 w-100"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}  // Update the state when the input changes
              />
              <Button type="submit" variant={darkMode ? 'light' : 'dark'}>
                Search
              </Button>
            </Form>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
