import React from 'react';
import './hero.css';
import House from '../../assets/house1.svg';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h1>Find Your Ideal Home Today!</h1>
        <p className='about'>
          We make finding your perfect living space easy and hassle-free. Whether you’re looking for a cozy room or a vibrant community, we’ve got you covered. 
          With properties across the San Antonio TX area, our rooms are located in well-connected neighborhoods in Texas. Explore our properties or available rooms in person to find the perfect fit.
        </p>
      </div>
      <div className='hero-image'>
        <img src={House} alt="Illustration of a modern house" />
        </div>

        </div>
  );
};

export default Hero;
