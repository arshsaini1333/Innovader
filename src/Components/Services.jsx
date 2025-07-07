import React from "react";
import "../public/Services.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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
  {
    title: "E-commerce Stores",
    description:
      "Fully functional online stores with shopping cart, secure payments, and inventory management.",
    points: [
      "Custom product catalogs",
      "Payment gateway integration",
      "Order tracking & notifications",
    ],
    icon: <ShoppingCartIcon fontSize="large" className="icon" />,
  },
  {
    title: "Custom Websites",
    description:
      "Tailored web solutions built from scratch to fit your brand, workflow, and business logic.",
    points: [
      "Unique UX/UI design",
      "Scalable and maintainable code",
      "Third-party API integration",
    ],
    icon: <AutoAwesomeIcon fontSize="large" className="icon" />,
  },
  {
    title: "Shopify Stores",
    description:
      "Professional Shopify stores with custom themes, apps, and full support for product management and checkout flow.",
    points: [
      "Custom Shopify theme setup",
      "Shopify app integration",
      "Optimized for conversions",
    ],
    icon: <ShoppingBagIcon fontSize="large" className="icon" />,
  },
];

const Services = () => {
  const col1 = services.slice(0, 2);
  const col2 = services.slice(2, 4);
  const col3 = services.slice(4, 6);

  return (
    <section className="services-section">
    <h2>Our Web Development Services</h2>
    <div className="services-columns">
      <div className="services-column column-1">
        {col1.map((service, idx) => (
          <div className="service-card" key={idx}>
            {service.icon}
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

      <div className="services-column column-2">
        {col2.map((service, idx) => (
          <div className="service-card" key={idx}>
            {service.icon}
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

      <div className="services-column column-3">
        {col3.map((service, idx) => (
          <div className="service-card" key={idx}>
            {service.icon}
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
    </div>
  </section>
  );
};

export default Services;
