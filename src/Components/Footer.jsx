import React from 'react';
import '../public/Footer.css';
import logo from '../assets/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router';
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
        <li><a href="#whyus">Why Choose Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Chhattarpur, South Delhi</p>
          <p>📞 +91 8447149389</p>
          <p>📩  Hr@innovader.in</p>
          <div className="social-links">
      <a href="https://www.instagram.com/innovader_technologies_?igsh=MWp4cHZzZzNlNGJqeg==" target="_blank" rel="noopener noreferrer">
        <InstagramIcon  />
      </a>
      <a href="https://www.facebook.com/share/195spd5srR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
      <FacebookIcon  />
      
      </a>
      <a href="https://x.com/Innovadertech" target="_blank" rel="noopener noreferrer">
        <TwitterIcon  />
      </a>
      <a href="https://www.linkedin.com/company/innovader-technologiess/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon  />
      </a>
    </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Innovader Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
