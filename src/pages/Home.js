import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import IceCreamOfTheDay from '../components/IceCreamOfTheDay';
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';    // Import Testimonials component

const Home = () => {
  return (
    <div className="p-3">
      {/* Hero section */}
      <HeroCarousel />

      {/* Ice Cream of the Day */}
      <section className="bg-warning bg-opacity-25 text-center p-4 rounded-4 my-4 shadow-sm">
        <h2 className="mb-3">Ice Cream of the Day</h2>
        <IceCreamOfTheDay />
      </section>

      {/* Testimonials Section */}
      <section className="bg-light p-5 my-5">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <div className="d-flex justify-content-around flex-wrap">
          <Testimonials />
        </div>
      </section>

      {/* Offers Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Today's Special Offers</h2>
        <Offers />
      </section>
    </div>
  );
};

export default Home;
