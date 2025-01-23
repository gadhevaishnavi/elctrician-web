import React from "react";
import "../assets/css/Footer.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
// import logo from "../assets/images/Logo.png";
// import img1 from '../assets/images/slider1.jpeg';
import img from '../assets/images/footerimg.jpg'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Background Image */}
      <div className="hero-image">
        <img src={img} alt="Factory Background" />
        
        <div className="overlay-content">
  
          {/* Heading */}
          <h1>Light Up Your World - Shubham Electrical</h1>

          {/* Contact Information */}
          <div className="contact-info">
            <p><strong>At: Parajna Tq:Vasamat Dist:Hingoli</strong></p>
            {/* <p><a href="mailto:info@asmkmct.com">info@asmkmct.com</a></p> */}
            <p><strong>Mobile:</strong> 7028773402</p>
  
          </div>

          {/* Navigation Links */}
          <div className="navbar-links">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About Us</NavLink></li>
              {/* <li><NavLink to='/products'>Products</NavLink></li> */}
              <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://wa.me/7028773402" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="tel:+7028773402"><FaPhoneAlt /></a>
            <a href="gayakwadshubham7028@gmail.com"><FaEnvelope /></a>
            <a href="https://www.facebook.com/S.G.Patil/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlusG /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>

          {/* Footer Note */}
          <footer>
            <p>© 2025 Gayakwad Electrical. All Rights Reserved</p>
            <p>Developed by <a href="https://developer.com" target="_blank" rel="noopener noreferrer">Developer</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;

