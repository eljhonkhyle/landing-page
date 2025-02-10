import React, { useState } from "react";
import "./header.css";
import Home from "../Home/Home";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <nav className="header">
        {/* Logo */}
        <h1 className="logo" onClick={() => setActiveSection("home")}>Havoc Properties</h1>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={activeSection === "amenities" ? "active" : ""}
            onClick={() => setActiveSection("amenities")}
          >
            <a href="#amenities">Amenities</a>
          </li>
          <li
            className={activeSection === "schedule" ? "active" : ""}
            onClick={() => setActiveSection("schedule")}
          >
            <a href="#schedule">Schedule</a>
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="amenities">
        <h2>Amenities Section</h2>
      </div>
      <div id="schedule">
        <h2>Schedule Section</h2>
      </div>
      <div id="contact">
        <h2>Contact Us Section</h2>
      </div>
    </div>
  );
};

export default Header;
