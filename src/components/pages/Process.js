import React from 'react';
import { Link } from 'react-router-dom';

const Process = ({ darkMode }) => {
  return (
    <div className={`right-content e2e ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper">
        <h2 className="section-title">Our Process</h2>
        <h1 className="main-heading gradient-text">End-to-End Development Solutions</h1>
        
        <div className="process-container">
          <div className="process-steps">
            {[
              { number: 1, title: "Discovery", desc: "Requirement analysis and planning" },
              { number: 2, title: "Design", desc: "UI/UX and architecture design" },
              { number: 3, title: "Development", desc: "Agile development sprints" },
              { number: 4, title: "Deployment", desc: "Launch and maintenance" }
            ].map((step, index) => (
              <div 
                className="process-step" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="process-features">
            {[
              { icon: "🧩", title: "Modular Approach", desc: "Scalable component architecture" },
              { icon: "📊", title: "Transparency", desc: "Weekly progress reports" },
              { icon: "🔒", title: "Security First", desc: "Built-in security protocols" }
            ].map((feature, index) => (
              <div 
                className="feature-card" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 400}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="process-cta" data-aos="fade-up">
            <Link 
              to="/contact" 
              className="cta-button primary"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;