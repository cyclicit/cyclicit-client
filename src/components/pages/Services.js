import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ darkMode }) => {
  return (
    <div className={`right-content what-we-offer ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper" data-aos="fade-up">
        <h2 className="section-title">What We Offer</h2>
        <h1 className="main-heading gradient-text">Transform Your Business with Digital Solutions</h1>
        <p className="section-subtitle">Powered by <span className="cyclicit-highlight">CycliciT</span></p>
        
        <div className="services-container">
          <div className="services-grid">
            {[
              { icon: '⚡', title: 'Fast Project Delivery', desc: 'Rapid implementation with agile methodologies' },
              { icon: '📚', title: 'Custom Code Library', desc: 'Reusable components for efficient development' },
              { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at competitive rates' },
              { icon: '👨‍💻', title: 'Experienced Team', desc: 'Experts across multiple industries' },
              { icon: '🔄', title: 'End-to-End Solutions', desc: 'From concept to deployment and beyond' },
              { icon: '🖥️', title: 'Hosting Options', desc: 'Flexible VPS solutions for all needs' }
            ].map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="cta-section">
            <Link to="/funding" className="cta-button primary">
              Request Tech-Funding
              <span className="button-arrow">→</span>
            </Link>
            
            <Link to="/contact" className="cta-button secondary">
              Get Started Today
            </Link>
            
            <Link to="/internship" className="cta-button tertiary">
              Apply for Internship
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;