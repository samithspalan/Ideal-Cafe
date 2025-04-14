import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg"
          alt="Delicious Ice Cream"
        />
        <Carousel.Caption>
          <h3>Chill with Our Signature Scoops</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/936205852/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=gcPTroDVPNSlCS45BkqEG-6-REnKFEzboBpuX8O3lY4="
          alt="Dessert Platter"
        />
        <Carousel.Caption>
          <h3>Irresistible Treats Await</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/mEUZ-VB5P2E/maxresdefault.jpg"
          alt="Cozy Café Ambience"
        />
        <Carousel.Caption>
          <h3>Relax at Ideal Café</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
