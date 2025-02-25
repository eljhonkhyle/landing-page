import React, { useState, useEffect } from "react";
import "./properties.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Skeleton from "../Skeleton";
import Mustang1 from "../../assets/10951 Mustang Spring/mustang1.jpg";
import Mustang2 from "../../assets/10951 Mustang Spring/mustang2.jpg";
import Mustang3 from "../../assets/10951 Mustang Spring/mustang3.jpg";
import Mustang4 from "../../assets/10951 Mustang Spring/mustang4.jpg";
import Mustang5 from "../../assets/10951 Mustang Spring/mustang5.jpg";
import Mustang6 from "../../assets/10951 Mustang Spring/mustang6.jpg";
import Mustang7 from "../../assets/10951 Mustang Spring/mustang7.jpg";
import Mustang8 from "../../assets/10951 Mustang Spring/mustang8.jpg";
import Mustang9 from "../../assets/10951 Mustang Spring/mustang9.jpg";
import GreenTop1 from "../../assets/6308 Green Top Dr/greentop1.jpg";
import GreenTop2 from "../../assets/6308 Green Top Dr/greentop2.jpg";
import GreenTop3 from "../../assets/6308 Green Top Dr/greentop3.jpg";
import GreenTop4 from "../../assets/6308 Green Top Dr/greentop4.jpg";
import GreenTop5 from "../../assets/6308 Green Top Dr/greentop5.jpg";
import GreenTop6 from "../../assets/6308 Green Top Dr/greentop6.jpg";
import GreenTop7 from "../../assets/6308 Green Top Dr/greentop7.jpg";
import GreenTop8 from "../../assets/6308 Green Top Dr/greentop8.jpg";
import GreenTop9 from "../../assets/6308 Green Top Dr/greentop9.jpg";
import Agave1 from "../../assets/7613 Agave Bnd/agave0.png";
import Agave2 from "../../assets/7613 Agave Bnd/agave1.png";
import Agave3 from "../../assets/7613 Agave Bnd/agave2.png";
import Agave4 from "../../assets/7613 Agave Bnd/agave3.png";
import Agave5 from "../../assets/7613 Agave Bnd/agave4.png";
import Agave6 from "../../assets/7613 Agave Bnd/agave5.png";
import Agave7 from "../../assets/7613 Agave Bnd/agave6.png";
import Agave8 from "../../assets/7613 Agave Bnd/agave7.png";
import Agave9 from "../../assets/7613 Agave Bnd/agave8.png";
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
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.558314679041!2d-98.71353068489851!3d29.5041239820837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5cbe5bbf5e45%3A0x77c3b1d4f3ef4c1a!2s10951%20Mustang%20Spring%2C%20San%20Antonio%2C%20TX%2078254!5e0!3m2!1sen!2sus!4v1708987654321!5m2!1sen!2sus",
      images: [
        Mustang1,
        Mustang2,
        Mustang3,
        Mustang4,
        Mustang5,
        Mustang6,
        Mustang7,
        Mustang8,
        Mustang9,
      ],
      description: "A vibrant community with excellent amenities nearby.",
    },
    {
      name: "6308 Green Top Dr",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.3675190564697!2d-98.38821438490082!3d29.58540218204653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8e234d8710f3%3A0x9bb56ec3c1f4b6b!2s6308%20Green%20Top%20Dr%2C%20San%20Antonio%2C%20TX%2078233!5e0!3m2!1sen!2sus!4v1708987654321!5m2!1sen!2sus",

      images: [
        GreenTop1,
        GreenTop2,
        GreenTop3,
        GreenTop4,
        GreenTop5,
        GreenTop6,
        GreenTop7,
        GreenTop8,
        GreenTop9,
      ],
      description: "Comfortable and spacious rooms in a peaceful area.",
    },
    {
      name: "7613 Agave Bnd",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.0212690207615!2d-98.37590938490168!3d29.61772698199872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8ef4b6b4b8e5%3A0x26d1e7d59d6e4e6f!2s7613%20Agave%20Bnd%2C%20San%20Antonio%2C%20TX%2078218!5e0!3m2!1sen!2sus!4v1708987654321!5m2!1sen!2sus",

      images: [
        Agave1,
        Agave2,
        Agave3,
        Agave4,
        Agave5,
        Agave6,
        Agave7,
        Agave8,
        Agave9,
      ],
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
                <p className="property-location">{property.location}</p>

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
                <div className="map-container">
                  <iframe
                    src={property.mapUrl}
                    width="100%"
                    height="270"
                    style={{
                      border: "0",
                      borderRadius: "12px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${property.name}`}
                  ></iframe>
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
