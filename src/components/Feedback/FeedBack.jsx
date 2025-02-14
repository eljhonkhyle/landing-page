"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaStar, FaUserCircle } from "react-icons/fa";
import "./feedback.css";

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
  return (
    <div className="feedback-section p-8 bg-gray-100">
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ color: "#085668" }}
      >
        What Our Clients Say
      </h2>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true} // Always keep the active slide in the center
        slidesPerView="auto" // Ensure dynamic size
        loop={true} // Enable infinite loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false, // Removes unwanted shadows
        }}
        className="feedback-swiper"
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id} className="feedback-slide">
            <FaUserCircle className="text-5xl text-gray-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">{feedback.name}</h3>
            <p className="text-gray-600 italic mb-3">"{feedback.review}"</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
