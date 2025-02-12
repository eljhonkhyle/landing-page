import React, { useState } from 'react';
import "./properties.css";
import Mustang1 from "../../assets/mustang.jpg";
import Mustang2 from "../../assets/mustang2.jpg";
import GreenTop1 from "../../assets/greentop.jpg";
import GreenTop2 from "../../assets/greentop2.jpg";
import Agave1 from "../../assets/agave.jpg";
import Agave2 from "../../assets/agave2.jpg";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Properties = () => {
  // Image data for each property
  const properties = [
    {
      name: "10951 Mustang Spring",
      images: [Mustang1, Mustang2],
      description: "A vibrant community with excellent amenities nearby.",
    },
    {
      name: "6308 Green Top Dr",
      images: [GreenTop1, GreenTop2],
      description: "Comfortable and spacious rooms in a peaceful area.",
    },
    {
      name: "7613 Agave Bnd",
      images: [Agave1, Agave2],
      description: "Ideal for those looking for a quiet and convenient living space.",
    }
  ];

  // State for tracking current image in each property
  const [currentIndexes, setCurrentIndexes] = useState(properties.map(() => 0));

  // Lightbox state
  const [lightbox, setLightbox] = useState({ isOpen: false, propertyIndex: 0 });

  const nextImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => (i === index ? (val + 1) % properties[i].images.length : val))
    );
  };

  const prevImage = (index) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => (i === index ? (val - 1 + properties[i].images.length) % properties[i].images.length : val))
    );
  };

  // Open lightbox for a property
  const openLightbox = (propertyIndex) => {
    setLightbox({ isOpen: true, propertyIndex });
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({ isOpen: false, propertyIndex: 0 });
  };

  // Switch images inside the lightbox
  const nextLightboxImage = () => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === lightbox.propertyIndex ? (val + 1) % properties[i].images.length : val
      )
    );
  };

  const prevLightboxImage = () => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === lightbox.propertyIndex ? (val - 1 + properties[i].images.length) % properties[i].images.length : val
      )
    );
  };

  return (
    <div className='properties-container'>
      <h1>Available Properties in San Antonio, Texas.</h1>
      
      <div className='card-container'>
        {properties.map((property, index) => (
          <div className='card' key={index}>
            <h2 className='property-name'>{property.name} </h2>
            <p className='property-description'>{property.description}</p>
            <div className="image-container">
              <FaChevronLeft className="arrow left" onClick={() => prevImage(index)} />
              <img 
                className='image-property' 
                src={property.images[currentIndexes[index]]} 
                alt={`Property ${property.name}`} 
                onClick={() => openLightbox(index)} 
              />
              <FaChevronRight className="arrow right" onClick={() => nextImage(index)} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <FaTimes className="close-icon" onClick={closeLightbox} />
            <FaChevronLeft className="lightbox-arrow left" onClick={prevLightboxImage} />
            <img src={properties[lightbox.propertyIndex].images[currentIndexes[lightbox.propertyIndex]]} alt="Large View" />
            <FaChevronRight className="lightbox-arrow right" onClick={nextLightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
