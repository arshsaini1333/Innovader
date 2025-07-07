// TestimonialCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../public/TestimonialSlider.css'; // Optional CSS file
import { FaQuoteLeft } from 'react-icons/fa';


const testimonials = [
  {
    name: 'Rohit Khurana',
    role: 'Villa Property Developer - South Delhi',
    text: 'Our luxury villa project needed a high-end landing page. The site you built delivered elegance, speed, and trust. Leads doubled in a week!',
  },
  {
    name: 'Meenal Sethi',
    role: 'Real Estate Agent - Gurugram',
    text: 'The landing page for my property listings looks stunning. It’s mobile-friendly, fast, and integrates perfectly with WhatsApp & CRM.',
  },
  {
    name: 'Pranav Mehta',
    role: 'Restaurant Owner - Rajouri Garden',
    text: 'The website you built boosted our table reservations and food delivery inquiries. I loved the animations and how well it performs!',
  },
  {
    name: 'Sneha Arora',
    role: 'Luxury Villa Host - Chattarpur',
    text: 'You captured the vibe of my rental villa perfectly. The design, speed, and CTA placement brought in more direct bookings without relying on Airbnb.',
  },
  {
    name: 'Aakash Taneja',
    role: 'Commercial Property Dealer - Noida',
    text: 'The landing pages for my office spaces look premium and convert really well. It’s SEO-optimized and the backend is super easy to update.',
  },
  {
    name: 'Ritika Sharma',
    role: 'Restaurant Owner - Hauz Khas',
    text: 'Thank you for giving my cafe a classy one-page website. The gallery, menus, and contact form make it easy for new customers to find us.',
  },
  {
    name: 'Devansh Kohli',
    role: 'Rental Property Owner - Saket',
    text: 'My PG rental site gets daily leads now. The student-friendly design and mobile responsiveness are just what I needed. Well done!',
  },
  {
    name: 'Pooja Bhalla',
    role: 'Vacation Home Owner - Manesar',
    text: 'Our holiday rental landing page looks clean and professional. It’s helping us get direct clients, especially from mobile.',
  },
  {
    name: 'Saurabh Jain',
    role: 'Real Estate Consultant - Janakpuri',
    text: 'The lead generation-focused site you built works flawlessly. Fast load times, schema, and analytics — everything’s in place.',
  },
  {
    name: 'Neha Vats',
    role: 'Restaurant Owner - CP, Delhi',
    text: 'I loved how interactive the menu section is. The landing page loads instantly and helped us drive more Zomato traffic too!',
  },
];

const Testimonilas = () => {
  return (
    <div className="testimonial-container">
      <h1><span>What Our</span> Client Says</h1>
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
           <div className="testimonial-box">
      <div className="testimonial-content">
        <div className="quote-icon">
          <FaQuoteLeft />
        </div>
        <p className="testimonial-text">{item.text}</p>
      </div>
      <div className="testimonial-arrow" />
      <div className="testimonial-author">
        <strong>{item.name}</strong>
        <p>{item.role}</p>
      </div>
    </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonilas;
