import React, { useState } from "react";
import "./properties.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Import images (Ensure they are optimized and in WebP format)
import Mustang1 from "../../assets/mustang.webp";
import Mustang2 from "../../assets/mustang2.webp";
import GreenTop1 from "../../assets/greentop.webp";
import GreenTop2 from "../../assets/greentop2.webp";
import Agave1 from "../../assets/agave.webp";
import Agave2 from "../../assets/agave2.webp";

const Properties = () => {
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
      description:
        "Ideal for those looking for a quiet and convenient living space.",
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    new Array(properties.length).fill(0)
  );

  const [lightbox, setLightbox] = useState({ isOpen: false, propertyIndex: 0 });
  const [slideDirections, setSlideDirections] = useState(
    new Array(properties.length).fill(null)
  );

  const changeImage = (index, direction) => {
    // Set the direction for the specific property image
    setSlideDirections((prev) =>
      prev.map((val, i) =>
        i === index ? (direction === 1 ? "right" : "left") : val
      )
    );

    // Change the image index with wraparound logic
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val + direction + properties[i].images.length) %
            properties[i].images.length
          : val
      )
    );

    // Reset the sliding direction after the animation is completed
    setTimeout(() => {
      setSlideDirections((prev) =>
        prev.map((val, i) => (i === index ? null : val))
      );
    }, 500); // Match the transition duration
  };

  const openLightbox = (propertyIndex) => {
    setLightbox({ isOpen: true, propertyIndex });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, propertyIndex: 0 });
  };

  return (
    <div className="properties-container">
      <h1>Available Properties in San Antonio, Texas.</h1>

      <div className="card-container">
        {properties.map((property, index) => (
          <div className="card" key={index}>
            <h2 className="property-name">{property.name}</h2>
            <p className="property-description">{property.description}</p>
            <div
              className={`image-container ${
                slideDirections[index] ? `slide-${slideDirections[index]}` : ""
              }`}
            >
              <FaChevronLeft
                className="arrow left"
                onClick={() => changeImage(index, -1)}
              />
              <img
                className="image-property"
                src={property.images[currentIndexes[index]]}
                alt={`Property ${property.name}`}
                loading="lazy" // Lazy loading
                onClick={() => openLightbox(index)}
              />
              <FaChevronRight
                className="arrow right"
                onClick={() => changeImage(index, 1)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <FaTimes className="close-icon" onClick={closeLightbox} />
            <FaChevronLeft
              className="lightbox-arrow left"
              onClick={() => changeImage(lightbox.propertyIndex, -1)}
            />
            <img
              src={
                properties[lightbox.propertyIndex].images[
                  currentIndexes[lightbox.propertyIndex]
                ]
              }
              alt="Large View"
              loading="lazy" // Lazy loading
            />
            <FaChevronRight
              className="lightbox-arrow right"
              onClick={() => changeImage(lightbox.propertyIndex, 1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
