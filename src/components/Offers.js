import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Offers = () => {
  const offers = [
    {
      title: 'Buy 1 Get 1 Free',
      image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80',
      description: 'On all sundaes every Monday!',
    },
    {
      title: '20% Off on Family Packs',
      image: 'https://www.gianisicecream.com/wp-content/themes/gianis/assets/images/home/find-store-slides/find-store-slide-3.png',
      description: 'Weekend special offer!',
    },
  ];

  return (
    <Row className="justify-content-center">
      {offers.map((offer, idx) => (
        <Col key={idx} md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img 
              variant="top" 
              src={offer.image} 
              alt={offer.title} 
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{offer.title}</Card.Title>
              <Card.Text>{offer.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Offers;
