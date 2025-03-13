import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Logo from "../../assets/Logo1.png";

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
      <img
        src={Logo}
        className="logo1 cursor-pointer"
        alt="Company Logo"
        onClick={handleLogoClick}
      />
      <div
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        role="button"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {["Home", "Amenities", "Schedule", "Contact"].map((link, index) => (
          <li key={index}>
            <NavLink
              to={`/${link.toLowerCase().replace(/\s/g, "")}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
