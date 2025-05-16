import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/3209829-uhd_3840_2160_25fps.mp4';
import posterImage from '../../assets/Screenshot 2025-05-17 024832.png';

const Home = ({ darkMode }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.preload = 'auto';
    }
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: darkMode ? '#121212' : '#f8f9fa'
    }}>
      {/* Optimized Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage} // Add poster frame
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          {/* Multiple sources for better compatibility */}
          <source src={backgroundVideo} type="video/mp4" />
          {/* Add WebM version if available */}
          {/* <source src={backgroundVideoWebM} type="video/webm" /> */}
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}></div>
      </div>
      
      {/* Centered Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 800,
          margin: '0 0 1rem',
          color: 'white',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          lineHeight: 1.2,
          maxWidth: '900px'
        }}>
          Welcome to CycliciT
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          color: 'rgba(255,255,255,0.9)',
          margin: '0 0 3rem',
          fontWeight: 300,
          maxWidth: '600px',
          textShadow: '0 1px 5px rgba(0,0,0,0.2)'
        }}>
          Where imagination meets execution
        </p>
        
        <Link 
          to="/services" 
          style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            borderRadius: '50px',
            background: 'linear-gradient(90deg, #2e7d32, #4caf50)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(46, 125, 50, 0.5)',
            border: 'none',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 25px rgba(46, 125, 50, 0.7)',
              background: 'linear-gradient(90deg, #1b5e20, #2e7d32)'
            }
          }}
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default Home;