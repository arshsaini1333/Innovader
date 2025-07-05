import React from "react";
import "../public/Services.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const services = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive sales for your marketing campaigns.",
    points: [
      "Mobile-optimized designs",
      "Fast loading speeds",
      "A/B testing integration",
    ],
    icon: <RocketLaunchIcon fontSize="large" className="icon" />,
  },
  {
    title: "Real Estate Websites",
    description:
      "Powerful property showcase platforms with IDX integration, property search, and lead capture systems.",
    points: [
      "Property listings management",
      "Mortgage calculators",
      "Virtual tour integration",
    ],
    icon: <HomeIcon fontSize="large" className="icon" />,
  },
  {
    title: "Business Websites",
    description:
      "Complete business websites with CMS integration, appointment booking, and e-commerce capabilities.",
    points: [
      "Content management",
      "SEO optimized",
      "Analytics dashboard",
    ],
    icon: <BusinessCenterIcon fontSize="large" className="icon" />,
  },
];

const Services = () => {
  return (
    <section className="dark-section">
      <h2 className="dark-heading">Our Web Development Services</h2>
      <div className="dark-cards-container">
        {services.map((service, index) => (
          <div className={`dark-card stair-${index}`} key={index}>
            <div className="dark-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>
            <a href="#">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
