import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import { FaBath, FaBed } from "react-icons/fa";
import Image1 from "../../assets/image1.webp";
import Image2 from "../../assets/image2.webp";
import Image3 from "../../assets/image3.webp";
import Skeleton from "../Skeleton";

const properties = [
  {
    id: 1,
    name: "10951 Mustang Spring",
    location: "Texas, USA",
    image: Image1,
    amenities: { beds: 3, baths: 2 },
  },
  {
    id: 2,
    name: "6308 Green Top Dr",
    location: "Texas, USA",
    image: Image2,
    amenities: { beds: 4, baths: 3 },
  },
  {
    id: 3,
    name: "7613 Agave Bnd",
    location: "Texas, USA",
    image: Image3,
    amenities: { beds: 5, baths: 4 },
  },
];

const RealEstateCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel-container">
      {isLoading ? (
        <Swiper slidesPerView={1} loop>
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="carousel-slide">
              <Skeleton width="100%" height="700px" borderRadius="8px" />
              <div className="carousel-text">
                <Skeleton width="60%" height="20px" />
                <Skeleton
                  width="40%"
                  height="16px"
                  style={{ margin: "8px 0" }}
                />
                <Skeleton width="80px" height="16px" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="carousel-slide">
              <img
                src={property.image}
                alt={property.name}
                className="carousel-image"
              />
              <div className="carousel-text">
                <h2>{property.name}</h2>
                <p>{property.location}</p>
                <p>
                  <FaBed className="inline mr-1" /> {property.amenities.beds}{" "}
                  Beds | <FaBath className="inline ml-2 mr-1" />{" "}
                  {property.amenities.baths} Baths
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default RealEstateCarousel;
