import React, { useState } from "react";
import "./header.css";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

import logo1 from '../../assets/logo1.png'

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state

  return (
    <div>
      <nav className="header">
        {/* Logo */}
        <img src={logo1} className="logo1" onClick={() => setActiveSection("home")}/>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => { setActiveSection("home"); setIsMenuOpen(false); }}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={activeSection === "amenities" ? "active" : ""}
            onClick={() => { setActiveSection("amenities"); setIsMenuOpen(false); }}
          >
            <a href="#amenities">Amenities</a>
          </li>
          <li
            className={activeSection === "schedule" ? "active" : ""}
            onClick={() => { setActiveSection("schedule"); setIsMenuOpen(false); }}
          >
            <a href="#schedule">Schedule</a>
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => { setActiveSection("contact"); setIsMenuOpen(false); }}
          >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home">
        <Hero />
        <Carousel />
      </div>
      <div id="amenities"><h2></h2></div>
      <div id="schedule"><h2></h2></div>
      <div id="contact"><h2></h2></div>
    </div>
  );
};

export default Header;
