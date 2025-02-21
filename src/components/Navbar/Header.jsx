import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Logo from "../../assets/Logo1.png";
import Skeleton from "../Skeleton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home");
    }
  };

  return (
    <nav className="header">
      {isLoading ? (
        <Skeleton
          width="120px"
          height="70px"
          borderRadius="8px"
          style={{ marginLeft: "50px", marginTop: "30px" }}
        />
      ) : (
        <img
          src={Logo}
          className="logo1 cursor-pointer"
          alt="Company Logo"
          onClick={handleLogoClick}
        />
      )}

      <div
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        role="button"
      >
        {isLoading ? (
          <Skeleton width="30px" height="30px" borderRadius="50%" />
        ) : isMenuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <Skeleton width="80px" height="30px" />
              </li>
            ))
          : ["Home", "Amenities", "Schedule", "Contact"].map((link, index) => (
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
