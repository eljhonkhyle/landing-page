import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Logo from "../../assets/Logo1.png";
import Schedule from "../Schedule/Schedule";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home");
    }
  };

  return (
    <nav className="header">
      {/* Logo (Clickable - Navigates to Homepage) */}
      <img
        src={Logo}
        className="logo1 cursor-pointer"
        alt="Company Logo"
        onClick={handleLogoClick}
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
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/amenities"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Amenities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
