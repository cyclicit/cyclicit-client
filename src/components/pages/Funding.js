import React from 'react';
import { Link } from 'react-router-dom';

const Funding = ({ darkMode }) => {
  return (
    <div className={`right-content submit-request ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper">
        <h2 className="section-title">Tech Funding</h2>
        <h1 className="main-heading gradient-text">
          <span className="icon">💡</span> Got an Idea? 
          <span className="icon">🚀</span> We've Got Resources
        </h1>
        
        <div className="value-propositions">
          {[
            { icon: "🔍", title: "Idea Evaluation", desc: "Expert feedback on your concept" },
            { icon: "🛠️", title: "Development", desc: "Technical resources to build" },
            { icon: "📊", title: "Strategy", desc: "Custom growth roadmap" }
          ].map((item, index) => (
            <div 
              className="value-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="process-steps">
          <h3>How It Works</h3>
          <div className="steps-container">
            {[
              "Submit Your Idea",
              "Evaluation Phase",
              "Development Support",
              "Launch & Growth"
            ].map((step, index) => (
              <div 
                className="step" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="step-number">{index + 1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
        
        <div className="request-cta" data-aos="fade-up">
          <Link 
            to="/contact" 
            className="cta-button primary"
          >
            Apply for Funding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funding;