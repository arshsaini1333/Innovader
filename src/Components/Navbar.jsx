import React, { useState } from 'react';
import '../public/Navbar.css';
import logo from '../assets/logo.png'
import CallIcon from '@mui/icons-material/Call';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
      </div>

      <div className='contact-btn'>
        <span></span>
          <span className='cbt'>Let's Talk</span>
          <span className='call-icon'><CallIcon/></span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>
    </nav>
  );
};

export default Navbar;
