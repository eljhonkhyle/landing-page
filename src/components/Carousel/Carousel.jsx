import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carousel.css";
import { FaBath, FaBed } from "react-icons/fa";
import Skeleton from "../Skeleton";
import Mustang1 from "../../assets/10951 Mustang Spring/mustang1.jpg";
import GreenTop1 from "../../assets/6308 Green Top Dr/greentop3.jpg";
import Agave1 from "../../assets/7613 Agave Bnd/agave1.png";

const properties = [
  {
    id: 1,
    name: "10951 Mustang Spring",
    location: "Texas, USA",
    image: Mustang1,
    amenities: { beds: 3, baths: 2 },
  },
  {
    id: 2,
    name: "6308 Green Top Dr",
    location: "Texas, USA",
    image: GreenTop1,
    amenities: { beds: 4, baths: 3 },
  },
  {
    id: 3,
    name: "7613 Agave Bnd",
    location: "Texas, USA",
    image: Agave1,
    amenities: { beds: 5, baths: 4 },
  },
];

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id} className="carousel-slide">
            {isLoading ? (
              <Skeleton width="100%" height="700px" borderRadius="8px" />
            ) : (
              <img
                src={property.image}
                alt={property.name}
                className="carousel-image"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            )}
            <div className="carousel-text">
              {isLoading ? (
                <>
                  <Skeleton width="60%" height="20px" />
                  <Skeleton
                    width="40%"
                    height="16px"
                    style={{ margin: "8px 0" }}
                  />
                  <Skeleton width="80px" height="16px" />
                </>
              ) : (
                <>
                  <h2>{property.name}</h2>
                  <p>{property.location}</p>
                  <p>
                    <FaBed className="inline mr-1" /> {property.amenities.beds}{" "}
                    Beds |
                    <FaBath className="inline ml-2 mr-1" />{" "}
                    {property.amenities.baths} Baths
                  </p>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
