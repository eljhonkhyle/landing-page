import React, { useState } from 'react';
import "./properties.css";
import Mustang1 from "../../assets/mustang.jpg";
import Mustang2 from "../../assets/mustang2.jpg";
import GreenTop1 from "../../assets/greentop.jpg";
import GreenTop2 from "../../assets/greentop2.jpg";
import Agave1 from "../../assets/agave.jpg";
import Agave2 from "../../assets/agave2.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Properties = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Image data for each property
  const properties = [
    {
      name: "10951 Mustang Spring",
      images: [Mustang1, Mustang2],
    },
    {
      name: "6308 Green Top Dr",
      images: [GreenTop1, GreenTop2],
    },
    {
      name: "7613 Agave Bnd",
      images: [Agave1, Agave2],
    }
  ];

  // State to track which image is shown for each property
  const [currentIndexes, setCurrentIndexes] = useState(properties.map(() => 0));

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

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className='properties-container'>
      <h1>Available Properties in San Antonio, Texas.</h1>
      
      <div className='card-container'>
        {properties.map((property, index) => (
          <div className='card' key={index}>
            <h2 className='property-name'>{property.name}</h2>
            <div className="image-container">
              <FaChevronLeft className="arrow left" onClick={() => prevImage(index)} />
              <img 
                className='image-property' 
                src={property.images[currentIndexes[index]]} 
                alt={`Property ${property.name}`} 
                onClick={() => openLightbox(property.images[currentIndexes[index]])} 
              />
              <FaChevronRight className="arrow right" onClick={() => nextImage(index)} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Large View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
