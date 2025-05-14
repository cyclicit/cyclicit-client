import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css'; // Import your CSS file for styling
// Import your video file (if using a local file)
import backgroundVideo from '../../assets/mixkit-parcel-worker-looking-for-an-address-42128-full-hd.mp4';

const Home = ({ darkMode }) => {
  return (
    <div className={`right-content default ${darkMode ? 'dark' : ''}`}>
      {/* Background Video */}
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="video-tag"
        >
          <source src={backgroundVideo} type="video/mp4" />
          {/* Add additional source tags for other formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="content-wrapper">
        <h1 className="main-heading gradient-text">Welcome to CycliciT</h1>
        <p className="subtitle">Where imagination meets execution</p>
        <Link 
          to="/services" 
          className="cta-button primary"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default Home;