import {
  FaUsers, FaLightbulb, FaListAlt, FaAward,
  FaShieldAlt, FaHeadset, FaRocket, FaHandshake
} from 'react-icons/fa';
import '../public/WhyUs.css';

export default function WhyUsSection() {
  const stats = [
    { icon: <FaUsers />, value: "1000+", text: "Over 1000+ Trusted Clients Around the Globe." },
    { icon: <FaLightbulb />, value: "500+", text: "Successful Web Project Delivery Track Records with Satisfaction." },
    { icon: <FaListAlt />, value: "100%", text: "Transparency in Process, Tasks & Milestones." },
    { icon: <FaAward />, value: "15+", text: "Backed with a Decade of Industry Expertise in delivering successful projects." },
    { icon: <FaShieldAlt />, value: "Secure", text: "Data security and privacy ensured through industry standards." },
    { icon: <FaHeadset />, value: "24/7", text: "Reliable Support & Maintenance Anytime You Need." },
    { icon: <FaRocket />, value: "Scalable", text: "Solutions built to scale as your business grows." },
    { icon: <FaHandshake />, value: "95%", text: "Client Retention Rate Showcasing Long-Term Relationships." },
  ];

  // Duplicate for smooth scroll
  const allStats = [...stats, ...stats];

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

      {/* Right section (animated) */}
      <div className="feature-right-scroll-container">
        <div className="feature-scroll-track">
          {allStats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <h2>{item.value}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
