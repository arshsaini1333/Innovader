import {
  FaUsers, FaLightbulb, FaListAlt, FaAward,
  FaShieldAlt, FaHeadset, FaRocket, FaHandshake
} from 'react-icons/fa';
import '../public/WhyUs.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import AnimationIcon from '@mui/icons-material/Animation';
import PreviewIcon from '@mui/icons-material/Preview';
import StorageIcon from '@mui/icons-material/Storage';

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
    <>
    <section className="why-us-container">
      {/* Left section (static) */}
      <div className="left-static">
        <h2><i>Why</i> Innovader Technologies</h2>
        <ol>
          <li><ShowChartIcon/><span> SEO-Friendly Website Setup</span></li>
          <li><LeaderboardIcon/><span> Analytics Integration</span></li>
          <li><WifiProtectedSetupIcon/><span> Conversion Optimization Setup</span></li>
          <li><AnimationIcon/><span> Interactive UI with 3D Animations</span></li>
          <li><PreviewIcon/><span>Dynamic & Responsive Web Design</span></li>
          <li><StorageIcon/><span> Database-Driven Functionality</span></li>
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
    <div className='cta-line'>
          <span><TipsAndUpdatesIcon/>Tired of Slow, Ugly Websites?</span>
          <a href="#contact">Let's Build you a Better One</a>
        </div>
    </>
  );
}
