import React, { useState, useEffect } from "react";
import "./properties.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Skeleton from "../Skeleton";
import Mustang1 from "../../assets/10951 Mustang Spring/1000000852.jpg";
import Mustang2 from "../../assets/mustang2.webp";
import GreenTop1 from "../../assets/greentop.webp";
import GreenTop2 from "../../assets/greentop2.webp";
import Agave1 from "../../assets/agave.webp";
import Agave2 from "../../assets/agave2.webp";

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    propertyIndex: 0,
    imageIndex: 0,
  });

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const changeImage = (index, direction) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val + direction + properties[i].images.length) %
            properties[i].images.length
          : val
      )
    );
  };

  // Open Lightbox
  const openLightbox = (propertyIndex, imageIndex) => {
    setLightbox({ isOpen: true, propertyIndex, imageIndex });
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightbox({ isOpen: false, propertyIndex: 0, imageIndex: 0 });
  };

  // Navigate Lightbox Images
  const navigateLightbox = (direction) => {
    const { propertyIndex, imageIndex } = lightbox;
    const totalImages = properties[propertyIndex].images.length;
    const newIndex = (imageIndex + direction + totalImages) % totalImages;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  return (
    <div className="properties-container">
      {loading ? (
        <Skeleton
          width="400px"
          height="50px"
          style={{ margin: "0 auto 20px" }}
        />
      ) : (
        <h1>Available Properties in San Antonio, Texas</h1>
      )}

      <div className="card-container">
        {loading
          ? properties.map((_, index) => (
              <div className="card" key={index}>
                <Skeleton
                  width="80%"
                  height="24px"
                  style={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="90%"
                  height="16px"
                  style={{ marginBottom: "10px" }}
                />
                <Skeleton width="100%" height="200px" borderRadius="8px" />
              </div>
            ))
          : properties.map((property, propertyIndex) => (
              <div className="card" key={propertyIndex}>
                <h2 className="property-name">{property.name}</h2>
                <p className="property-description">{property.description}</p>
                <div className="image-container">
                  <FaChevronLeft
                    className="arrow left"
                    onClick={() => changeImage(propertyIndex, -1)}
                  />
                  <img
                    className="image-property"
                    src={property.images[currentIndexes[propertyIndex]]}
                    alt={`Property ${property.name}`}
                    loading="lazy"
                    onClick={() =>
                      openLightbox(propertyIndex, currentIndexes[propertyIndex])
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <FaChevronRight
                    className="arrow right"
                    onClick={() => changeImage(propertyIndex, 1)}
                  />
                </div>
              </div>
            ))}
      </div>

      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <FaTimes className="lightbox-close" onClick={closeLightbox} />
            <FaChevronLeft
              className="lightbox-arrow left"
              onClick={() => navigateLightbox(-1)}
            />
            <img
              src={
                properties[lightbox.propertyIndex].images[lightbox.imageIndex]
              }
              alt="Expanded view"
              className="lightbox-image"
            />
            <FaChevronRight
              className="lightbox-arrow right"
              onClick={() => navigateLightbox(1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;
