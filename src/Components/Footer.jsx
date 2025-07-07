import React from 'react';
import '../public/Footer.css';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className='brands' > <img src={logo} alt="" /> <span>Innovader Technologies</span></div>
          {/* <p>Your Trusted Real Estate Partner in South Delhi</p> */}
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#whyus">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Chhattarpur, South Delhi</p>
          <p>📞 +91 8447149389</p>
          <p>✉️ hr@innovader.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Innovader Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
