"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import "./carousel.css"; // Import the separate CSS file
import { FaBath, FaBed } from "react-icons/fa";
import Image1 from "../../assets/image1.jpg"
import Image2 from "../../assets/image2.jpg"
import Image3 from "../../assets/image3.jpg"

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
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      className="carousel-container"
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id} className="carousel-slide">
          <img src={property.image} alt={property.name} className="carousel-image" />
          <div className="carousel-text">
            <h2>{property.name}</h2>
            <p>{property.location}</p>
            <p> <FaBed className="inline mr-1" /> {property.amenities.beds} Beds | <FaBath className="inline ml-2 mr-1" /> {property.amenities.baths} Baths</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RealEstateCarousel;
