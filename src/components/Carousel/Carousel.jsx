"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import "./carousel.css"; // Import the separate CSS file

const Carousel = () => {
  const slides = [
    {
      image: "src/assets/image1.jpg",
      title: "Lorem Ipsum",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
    {
      image: "src/assets/image2.jpg",
      title: "Lorem Ipsum",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
    {
      image: "src/assets/image3.jpg",
      title: "Lorem Ipsum",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
  ];

  return (
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="carousel-container"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          <img src={slide.image} alt={slide.title} className="carousel-image" />
          <div className="carousel-text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Carousel;
