import React from "react";
import { FaSwimmer, FaCar, FaTree, FaWifi, FaDumbbell, FaShieldAlt } from "react-icons/fa";
import "./amenities.css";

const properties = [
  {
    name: "10951 Mustang Spring",
    amenities: [
      { icon: <FaSwimmer />, label: "Swimming Pool" },
      { icon: <FaCar />, label: "Parking Garage" },
      { icon: <FaTree />, label: "Garden Area" },
    ],
  },
  {
    name: "6308 Green Top Dr",
    amenities: [
      { icon: <FaWifi />, label: "High-Speed WiFi" },
      { icon: <FaDumbbell />, label: "Gym & Fitness" },
      { icon: <FaShieldAlt />, label: "24/7 Security" },
    ],
  },
  {
    name: "7613 Agave Bnd",
    amenities: [
      { icon: <FaSwimmer />, label: "Swimming Pool" },
      { icon: <FaTree />, label: "Garden & Park" },
      { icon: <FaDumbbell />, label: "Gym Access" },
    ],
  },
];

const Amenities = () => {
  return (
    <section className="amenities-section">
      <h2>Amenities</h2>
      <div className="amenities-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <h3>{property.name}</h3>
            <ul>
              {property.amenities.map((amenity, idx) => (
                <li key={idx} className="amenity-item">
                  {amenity.icon} <span>{amenity.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
