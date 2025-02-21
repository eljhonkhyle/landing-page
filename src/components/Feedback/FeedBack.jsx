"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaStar, FaUserCircle } from "react-icons/fa";
import "./feedback.css";
import Skeleton from "../Skeleton";

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Amazing service! The property buying process was seamless and efficient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great experience! The team was very professional and helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Robert Johnson",
    review: "Highly recommended! I found my dream home with their help.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Brown",
    review: "Very satisfied! Their support was outstanding and very helpful.",
    rating: 4,
  },
];

const Feedback = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="feedback-section p-8 bg-gray-100">
      {loading ? (
        <Skeleton
          width="300px"
          height="40px"
          style={{ margin: "0 auto 24px" }}
        />
      ) : (
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#085668" }}
        >
          What Our Clients Say
        </h2>
      )}

      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="feedback-swiper"
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} className="feedback-slide">
                <div className="skeleton-feedback-card p-6 bg-white rounded-lg shadow-md text-center">
                  <Skeleton
                    width="80px"
                    height="80px"
                    borderRadius="50%"
                    style={{ margin: "0 auto 10px" }}
                  />
                  <Skeleton
                    width="150px"
                    height="20px"
                    style={{ margin: "0 auto 10px" }}
                  />
                  <Skeleton
                    width="80%"
                    height="16px"
                    style={{ margin: "0 auto 10px" }}
                  />
                  <Skeleton
                    width="100px"
                    height="16px"
                    style={{ margin: "0 auto" }}
                  />
                </div>
              </SwiperSlide>
            ))
          : feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id} className="feedback-slide">
                <div className="feedback-card p-6 bg-white rounded-lg shadow-md text-center">
                  <FaUserCircle className="text-5xl text-gray-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold">{feedback.name}</h3>
                  <p className="text-gray-600 italic mb-3">
                    "{feedback.review}"
                  </p>
                  <div className="flex justify-center gap-1 star-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          index < feedback.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
