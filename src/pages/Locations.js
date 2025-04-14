import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Ideal Café - Downtown",
      address: "123 Downtown St, Bengaluru, KA, 560001",
      phone: "+91 123 456 7890",
      map: "https://maps.google.com/?q=123+Downtown+St+Bengaluru",
    },
    {
      id: 2,
      name: "Ideal Café - Whitefield",
      address: "456 Whitefield Rd, Bengaluru, KA, 560066",
      phone: "+91 987 654 3210",
      map: "https://maps.google.com/?q=456+Whitefield+Rd+Bengaluru",
    },
    {
      id: 3,
      name: "Ideal Café - Koramangala",
      address: "789 Koramangala, Bengaluru, KA, 560034",
      phone: "+91 112 233 4455",
      map: "https://maps.google.com/?q=789+Koramangala+Bengaluru",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Café Locations</h2>
      <Row>
        {locations.map((location) => (
          <Col key={location.id} sm={12} md={6} lg={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{location.name}</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> <br />
                  {location.address}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> <br />
                  {location.phone}
                </Card.Text>
                <a href={location.map} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Locations;
