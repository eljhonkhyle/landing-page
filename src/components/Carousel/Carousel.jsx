"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import "./carousel.css"; // Import the separate CSS file
import Image1 from "../../assets/image1.jpg"
import Image2 from "../../assets/image2.jpg"
import Image3 from "../../assets/image3.jpg"

const Carousel = () => {
  const slides = [
    {
      image: Image1,
      title: "Lorem Ipsum",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
    {
      image: Image2,
      title: "Lorem Ipsum",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
    {
      image: Image3,
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
