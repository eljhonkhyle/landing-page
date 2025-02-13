import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Logo from "../../assets/Logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      {/* Logo */}
      <img
        src={Logo}
        className="logo1"
        alt="Company Logo"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        role="button"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/amenities" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsMenuOpen(false)}>
            Amenities
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsMenuOpen(false)}>
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
