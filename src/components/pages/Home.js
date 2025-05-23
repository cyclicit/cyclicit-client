import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/Hv1.mp4';
import posterImage from '../../assets/Screenshot 2025-05-23 233759.png';
import { motion } from 'framer-motion';
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
          Welcome to Cyclic<span style={{ color: '#4caf50' }}>iT</span>
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

       

<p style={{
  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
  color: 'rgba(255,255,255,0.9)',
  margin: '0 0 3rem',
  fontWeight: 300,
  maxWidth: '800px',
  textShadow: '0 1px 5px rgba(0,0,0,0.2)'
}}>
  <span style={{whiteSpace: 'nowrap'}}>🌐Websites</span>{' '}
  <span style={{whiteSpace: 'nowrap'}}>📱Mobile App</span>{' '}
  <span style={{whiteSpace: 'nowrap'}}>💻Custom Software</span>
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

        {/* Floating Tech Elements */}
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="floating-elements"
  style={{
    position: 'relative',
    width: '100%',
    height: '300px',
    margin: '3rem auto',
    overflow: ''
  }}
>
  {/* Floating elements with improved animations and spacing */}
  <motion.div
    className="floating-element el1"
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, -15, 0, -10, 0],
      x: [0, 10, -5, 5, 0]
    }}
    transition={{ 
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      width: '120px',
      height: '120px',
      top: '10%',
      left: '5%',
      fontSize: '1.1rem',
      background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
      color: darkMode ? '#81c784' : '#2e7d32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '24px',
      border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
      zIndex: 1,
      boxShadow: darkMode 
        ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
        : '0 4px 20px rgba(46, 125, 50, 0.1)'
    }}
  >
    Web
  </motion.div>
  
  <motion.div
    className="floating-element el2"
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, 30, -20, 10, 0],
      x: [0, -10, 10, -5, 0]
    }}
    transition={{ 
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }}
    style={{
      position: 'absolute',
      width: '80px',
      height: '80px',
      top: '40%',
      left: '20%',
      fontSize: '1rem',
      background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
      color: darkMode ? '#81c784' : '#2e7d32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
      zIndex: 1,
      boxShadow: darkMode 
        ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
        : '0 4px 20px rgba(46, 125, 50, 0.1)'
    }}
  >
    Mobile
  </motion.div>
  
  <motion.div
    className="floating-element el3"
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, -10, 20, -10, 0],
      x: [0, 15, -10, 5, 0]
    }}
    transition={{ 
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }}
    style={{
      position: 'absolute',
      width: '150px',
      height: '150px',
      top: '5%',
      right: '10%',
      fontSize: '1.3rem',
      background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
      color: darkMode ? '#81c784' : '#2e7d32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '30px',
      border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
      zIndex: 1,
      boxShadow: darkMode 
        ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
        : '0 4px 20px rgba(46, 125, 50, 0.1)'
    }}
  >
    AI
  </motion.div>
  
  <motion.div
    className="floating-element el4"
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, 20, -5, 10, 0],
      x: [0, -10, 15, -5, 0]
    }}
    transition={{ 
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 3
    }}
    style={{
      position: 'absolute',
      width: '60px',
      height: '60px',
      bottom: '15%',
      left: '10%',
      fontSize: '0.9rem',
      background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
      color: darkMode ? '#81c784' : '#2e7d32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
      zIndex: 1,
      boxShadow: darkMode 
        ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
        : '0 4px 20px rgba(46, 125, 50, 0.1)'
    }}
  >
    Cloud
  </motion.div>
  
  <motion.div
    className="floating-element el5"
    initial={{ y: 0, x: 0 }}
    animate={{ 
      y: [0, 10, 10, 0, 0],
      x: [0, 30, -25, 10, 0]
    }}
    transition={{ 
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 4
    }}
    style={{
      position: 'absolute',
      width: '90px',
      height: '90px',
      bottom: '5%',
      right: '20%',
      fontSize: '1rem',
      background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
      color: darkMode ? '#81c784' : '#2e7d32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '22px',
      border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
      zIndex: 1,
      boxShadow: darkMode 
        ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
        : '0 4px 20px rgba(46, 125, 50, 0.1)'
    }}
  >
    IoT
  </motion.div>

  


</motion.div>


        
        
        
      </div>
    </div>
  );
};

export default Home;