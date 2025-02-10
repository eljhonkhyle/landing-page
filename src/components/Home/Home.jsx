"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import "./home.css"; // Import the separate CSS file

const Home = () => {
  const slides = [
    {
      image: "src/assets/image1.jpg",
      title: "Modern Luxury Home",
      description: "Amet eiusmod occaecat officia esse. Nisi veniam duis quis deserunt mollit non culpa. Laborum adipisicing aute aliquip labore exercitation quis adipisicing magna aliquip. Sunt mollit officia non ullamco sunt. Irure non fugiat consectetur tempor quis nisi fugiat ut ex proident. Id pariatur anim est ullamco est dolore anim reprehenderit incididunt amet. Esse veniam nostrud deserunt elit esse minim ad labore nostrud sint.",
    },
    {
      image: "src/assets/image2.jpg",
      title: "Cozy Family House",
      description: "Occaecat nulla mollit sunt aute id ex est occaecat eiusmod laboris non occaecat sit. Eu aliqua ea laboris id dolore exercitation et ullamco minim. Anim velit ex enim excepteur aliqua mollit aliquip elit sunt amet.",
    },
    {
      image: "src/assets/image3.jpg",
      title: "Elegant Beachfront Villa",
      description: "Esse culpa eiusmod laboris ipsum adipisicing non elit nisi reprehenderit. Lorem sit et laborum non ipsum duis adipisicing aute. Lorem aute aliquip excepteur officia labore excepteur proident ad exercitation incididunt tempor labore culpa fugiat. Pariatur et Lorem non labore nulla do tempor nostrud sint non Lorem excepteur occaecat eu. Cillum consequat ea magna sit do nostrud. Proident nostrud in occaecat quis nulla Lorem enim nostrud aliqua labore enim pariatur sint nulla. Laborum sit fugiat irure proident.",
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

export default Home;
