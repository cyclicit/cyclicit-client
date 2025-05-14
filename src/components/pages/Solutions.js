import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = ({ darkMode }) => {
  return (
    <div className={`right-content showcase ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper">
        <h2 className="section-title">Our Solutions</h2>
        <h1 className="main-heading gradient-text">Tailored Packages for Every Need</h1>
        
        <div className="deals-container">
          {[
            {
              title: "🚀 Prime Deal",
              tag: "Limited",
              duration: "21 Days",
              price: "$$$",
              features: ["Responsive design", "SEO optimized", "1 year free hosting"],
              color: "linear-gradient(135deg, #6e8efb, #a777e3)",
              buttonText: "Claim Deal"
            },
            {
              title: "🌱 Genuine Deal",
              tag: "Standard",
              duration: "50 Days",
              price: "$$",
              features: ["Mobile-friendly", "Basic SEO", "6 months hosting"],
              color: "linear-gradient(135deg, #4CAF50, #8BC34A)",
              buttonText: "Get Started"
            },
            {
              title: "✨ Ready Deal",
              tag: "Instant",
              duration: "7 Days",
              price: "$",
              features: ["Pre-designed", "Quick setup", "3 months hosting"],
              color: "linear-gradient(135deg, #9C27B0, #E91E63)",
              buttonText: "Browse Templates"
            }
          ].map((deal, index) => (
            <div 
              className="deal-card" 
              key={index}
              style={{ background: deal.color }}
              data-aos="flip-up"
              data-aos-delay={index * 200}
            >
              <div className="deal-header">
                <h3>{deal.title}</h3>
                <span className="deal-tag">{deal.tag}</span>
              </div>
              
              <div className="deal-duration">
                <div className="duration-circle">
                  <span>{deal.duration.split(' ')[0]}</span>
                  <small>{deal.duration.split(' ')[1]}</small>
                </div>
              </div>
              
              <div className="deal-features">
                <ul>
                  {deal.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/contact" 
                className="deal-button"
              >
                {deal.buttonText}
              </Link>
              
              <div className="deal-popularity">
                <div className="popularity-bar">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${100 - (index * 30)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;