import React from 'react';
import { Link } from 'react-router-dom';

const Internship = ({ darkMode }) => {
  return (
    <div className={`right-content apply-intern ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper">
        <h2 className="section-title">Internship Program</h2>
        <h1 className="main-heading gradient-text">Launch Your Tech Career with Us</h1>
        
        <div className="intern-container">
          <div className="intern-info-section">
            <div className="info-card" data-aos="fade-right">
              <h3>📞 Contact</h3>
              <p>+8801577148188</p>
              <Link 
                to="/contact" 
                className="contact-button"
              >
                cyclicit@gmail.com
              </Link>
            </div>
            
            <div className="info-card" data-aos="fade-up">
              <h3>🎓 Learning</h3>
              <ul>
                <li>Hands-on project experience</li>
                <li>Skill development programs</li>
                <li>Collaborative environment</li>
              </ul>
            </div>
            
            <div className="info-card" data-aos="fade-left">
              <h3>🚀 Growth</h3>
              <ul>
                <li>Production best practices</li>
                <li>Performance optimization</li>
                <li>Team growth strategies</li>
              </ul>
            </div>
          </div>
          
          <div className="intern-cta" data-aos="zoom-in">
            <Link 
              to="/contact" 
              className="cta-button primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;