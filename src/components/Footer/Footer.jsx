import React from "react";
import "./footer.css";
import {FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import FontAwesome icons
import Logo from "/Logo.png";

const Footer = () => {
  return (
    <section>
      {/* Top Footer */}
      <footer className="top">
        <img src={Logo} alt="Company Logo" className="footer-logo" />
        
        <div className="links">
          {/* Company Section */}
          <div>
            <h2>Company</h2>
            <a>About Us</a>
            <a>Blog</a>
            <a>Partnerships</a>
            <a>Careers</a>
            <a>Property Pricing</a>
          </div>

          {/* Real Estate Services */}
          <div>
            <h2>Real Estate</h2>
            <a>Find Properties</a>
            <a>Buy a Home</a>
            <a>Sell Your Property</a>
            <a>Mortgage Services</a>
            <a>Property Management</a>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose">
          <h2>Why Choose Havoc Properties?</h2>
          <p><strong>📍 Personalized Tours:</strong> <br></br>See your future living space before you decide.</p>
          <p><strong>🏡 Prime Locations:</strong> <br></br>Easy access to local amenities, schools, and transportation.</p>
          <p><strong>💰 Affordable Options:</strong> <br></br>Quality rooms that suit your budget.</p>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="bottom">
        <div className="legal">
          <span>© 2025 Havoc Properties | All rights reserved</span>
          <a href="#">License</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className="links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
