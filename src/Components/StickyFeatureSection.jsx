import React from 'react';
import '../public/StickyFeatureSection.css';
import { FaUsers, FaLightbulb, FaListAlt, FaAward, FaShieldAlt, FaHeadset, FaRocket, FaHandshake } from 'react-icons/fa';


const StickyFeatureSection = () => {
  return (
    <>
   
    <section className="feature-wrapper">
      {/* Left Column - Sticky */}
      <aside className="feature-left">
      <h1 className='stickyhead' id='whyus'><span>Why</span> Innovader Technologies</h1>
        <h3>1. SEO-Friendly Website Setup</h3>
        <p>On-page SEO, proper structure, and performance to rank faster.</p>

        <h3>2. Analytics Integration</h3>
        <p>
          Connect Google Analytics, Tag Manager, or Facebook Pixel to track users.
        </p>

        <h3>3. Conversion Optimization Setup</h3>
        <p>
          Add CTAs, lead forms, heatmaps & chatbots to capture more leads.
        </p>
        <h3>4. Interactive UI with 3D Animations</h3>
<p>Create immersive experiences using modern 3D effects and smooth animations that engage users.</p>

<h3>5. Dynamic & Responsive Web Design</h3>
<p>Craft device-friendly websites that adapt seamlessly across all screen sizes and user behaviors.</p>

<h3>6. Database-Driven Functionality</h3>
<p>Build powerful, data-backed features using robust database integration for real-time performance.</p>

      </aside>

      {/* Right Column - Cards */}
      <div className="feature-right-scroll-container">
  <div className="feature-scroll-track">
    <div className="stat-card">
      <FaUsers className="stat-icon" />
      <h2>1000+</h2>
      <p>Over 1000+ Trusted Clients Around the Globe.</p>
    </div>

    <div className="stat-card">
      <FaLightbulb className="stat-icon" />
      <h2>500+</h2>
      <p>Successful Web Project Delivery Track Records with Satisfaction.</p>
    </div>

    <div className="stat-card">
      <FaListAlt className="stat-icon" />
      <h2>100%</h2>
      <p>Transparency in Process, Tasks & Milestones.</p>
    </div>

    <div className="stat-card">
      <FaAward className="stat-icon" />
      <h2>15+</h2>
      <p>Backed with a Decade of Industry Expertise in delivering successful projects.</p>
    </div>

    <div className="stat-card">
      <FaShieldAlt className="stat-icon" />
      <h2>Secure</h2>
      <p>Data security and privacy ensured through industry standards.</p>
    </div>

    <div className="stat-card">
      <FaHeadset className="stat-icon" />
      <h2>24/7</h2>
      <p>Reliable Support & Maintenance Anytime You Need.</p>
    </div>

    <div className="stat-card">
      <FaRocket className="stat-icon" />
      <h2>Scalable</h2>
      <p>Solutions built to scale as your business grows.</p>
    </div>

    <div className="stat-card">
      <FaHandshake className="stat-icon" />
      <h2>95%</h2>
      <p>Client Retention Rate Showcasing Long-Term Relationships.</p>
    </div>

    
  </div>
</div>


    </section>
    </>
  );
};

export default StickyFeatureSection;
