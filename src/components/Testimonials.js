import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <div className="testimonials text-center my-5">
      <h2 className="mb-4">What Our Customers Say</h2>
      <Carousel fade interval={4000} indicators={false}>
        <Carousel.Item>
          <p className="fs-5 fst-italic">
            "Absolutely loved the kulfi and the cozy ambience. A must-visit for dessert lovers!" – Aanya Sharma
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="fs-5 fst-italic">
            "Their filter coffee and masala fries combo is my new guilty pleasure!" – Rohan Iyer
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="fs-5 fst-italic">
            "Perfect place to hang out with friends. Great service and amazing flavours!" – Meera Patel
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="fs-5 fst-italic">
            "From chai to chat, everything was just perfect. Felt like home!" – Aarav Khanna
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
