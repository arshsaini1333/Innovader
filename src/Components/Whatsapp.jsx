import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../public/Whatsaap.css'; // Import CSS

const WhatsAppButton = () => {
  const phoneNumber = '918447149389'; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
