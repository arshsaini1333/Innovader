import {
    FaUsers, FaLightbulb, FaListAlt, FaAward,
    FaShieldAlt, FaHeadset, FaRocket, FaHandshake
  } from 'react-icons/fa';
  import '../public/WhyUs.css';
  
  export default function WhyUsSection() {
    return (
      <section className="why-us-container">
        {/* Left section (static) */}
        <div className="left-static">
          <h2><i>Why</i> Innovader Technologies</h2>
          <ol>
            <li><span>1. SEO-Friendly Website Setup</span><br />On-page SEO, proper structure, and performance to rank faster.</li>
            <li><span>2. Analytics Integration</span><br />Connect Google Analytics, Tag Manager, or Facebook Pixel to track users.</li>
            <li><span>3. Conversion Optimization Setup</span><br />Add CTAs, lead forms, heatmaps & chatbots to capture more leads.</li>
            <li><span>4. Interactive UI with 3D Animations</span><br />Modern 3D effects and smooth animations that engage users.</li>
            <li><span>5. Dynamic & Responsive Web Design</span><br />Craft device-friendly websites that adapt across screen sizes.</li>
            <li><span>6. Database-Driven Functionality</span><br />Build robust database integration for real-time performance.</li>
          </ol>
        </div>
  
        {/* Right section (animated badges) */}
        <div className="right-animated">
          <div className="stat-card"><FaUsers className="stat-icon" /><h2>1000+</h2><p>Over 1000+ Trusted Clients Around the Globe.</p></div>
          <div className="stat-card"><FaLightbulb className="stat-icon" /><h2>500+</h2><p>Successful Web Project Delivery Track Records with Satisfaction.</p></div>
          <div className="stat-card"><FaListAlt className="stat-icon" /><h2>100%</h2><p>Transparency in Process, Tasks & Milestones.</p></div>
          <div className="stat-card"><FaAward className="stat-icon" /><h2>15+</h2><p>Backed with a Decade of Industry Expertise in delivering successful projects.</p></div>
          <div className="stat-card"><FaShieldAlt className="stat-icon" /><h2>Secure</h2><p>Data security and privacy ensured through industry standards.</p></div>
          <div className="stat-card"><FaHeadset className="stat-icon" /><h2>24/7</h2><p>Reliable Support & Maintenance Anytime You Need.</p></div>
          <div className="stat-card"><FaRocket className="stat-icon" /><h2>Scalable</h2><p>Solutions built to scale as your business grows.</p></div>
          <div className="stat-card"><FaHandshake className="stat-icon" /><h2>95%</h2><p>Client Retention Rate Showcasing Long-Term Relationships.</p></div>
        </div>
      </section>
    );
  }
  