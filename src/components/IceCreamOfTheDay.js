import React from 'react';
import { Card } from 'react-bootstrap';

const IceCreamOfTheDay = () => {
  return (
    <Card className="mx-auto" style={{ maxWidth: '400px' }}>
      <Card.Img 
        variant="top" 
        src="https://brokenovenbaking.com/wp-content/uploads/2022/05/chocolate-malted-crunch-ice-cream-14.jpg" 
        alt="Ice Cream of the Day" 
      />
      <Card.Body>
        <Card.Title>Vanilla-Choco Crunch</Card.Title>
        <Card.Text>
          A rich vanilla and chocolate swirl topped with caramel sauce and a cookie crunch!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IceCreamOfTheDay;
