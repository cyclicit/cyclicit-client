import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/hv3.mp4';
import posterImage from '../../assets/Screenshot 2025-05-23 233759.png';
import { motion } from 'framer-motion';

const Home = ({ darkMode }) => {
  const videoRef = useRef(null);
  const [activeElement, setActiveElement] = useState(null);
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [typedText, setTypedText] = useState('');
  const phrases = ["Web sites", "Mobile Apps", "AI Solutions", "Cloud Services", "IoT Systems"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.preload = 'auto';
    }

    // Typewriter effect
    const typeInterval = setInterval(() => {
      if (typingForward) {
        if (typedText.length < phrases[currentPhraseIndex].length) {
          setTypedText(phrases[currentPhraseIndex].substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setTypingForward(false), 1500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.substring(0, typedText.length - 1));
        } else {
          setTypingForward(true);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [typedText, currentPhraseIndex, typingForward]);

  const floatingElements = [
    {
      id: 'web',
      label: 'Web',
      size: 120,
      top: '60%',
      left: '45%',
      fontSize: '1.1rem',
      borderRadius: '24px',
      info: 'Modern, responsive websites with cutting-edge technologies like React, Next.js, and Node.js.'
    },
    {
      id: 'mobile',
      label: 'Mobile',
      size: 80,
      top: '40%',
      left: '20%',
      fontSize: '1rem',
      borderRadius: '20px',
      info: 'Cross-platform mobile apps using React Native and Flutter for iOS and Android.'
    },
    {
      id: 'ai',
      label: 'AI',
      size: 150,
      top: '5%',
      right: '10%',
      fontSize: '1.3rem',
      borderRadius: '30px',
      info: 'AI-powered solutions including machine learning models, chatbots, and computer vision applications.'
    },
    {
      id: 'cloud',
      label: 'Cloud',
      size: 60,
      bottom: '15%',
      left: '10%',
      fontSize: '0.9rem',
      borderRadius: '16px',
      info: 'Cloud architecture, deployment, and management on AWS, Azure, and Google Cloud Platform.'
    },
    {
      id: 'iot',
      label: 'IoT',
      size: 90,
      bottom: '5%',
      right: '20%',
      fontSize: '1rem',
      borderRadius: '22px',
      info: 'Internet of Things solutions connecting devices and creating smart ecosystems.'
    }
  ];

  const handleElementClick = (element) => {
    setActiveElement(element);
    setShowInfoCard(true);
  };

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
          poster={posterImage}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
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
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="floating-elements"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            margin: '3rem auto',
            overflow: ''
          }}
        >
          {floatingElements.map((el, index) => (
            <motion.div
              key={el.id}
              className={`floating-element ${el.id}`}
              initial={{ y: 0, x: 0 }}
              animate={{ 
                y: [0, -35, 0, -20, 0],
                x: [0, 20, -10, 10, 0]
              }}
              transition={{ 
                duration: 12 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              style={{
                position: 'absolute',
                width: `${el.size}px`,
                height: `${el.size}px`,
                [el.top ? 'top' : 'bottom']: el.top || el.bottom,
                [el.left ? 'left' : 'right']: el.left || el.right,
                fontSize: el.fontSize,
                background: darkMode ? 'rgba(76, 175, 80, 0.15)' : 'rgba(46, 125, 50, 0.15)',
                color: darkMode ? '#81c784' : '#2e7d32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: el.borderRadius,
                border: `1px solid ${darkMode ? 'rgba(76, 175, 80, 0.4)' : 'rgba(46, 125, 50, 0.4)'}`,
                zIndex: 1,
                boxShadow: darkMode 
                  ? '0 4px 20px rgba(76, 175, 80, 0.1)' 
                  : '0 4px 20px rgba(46, 125, 50, 0.1)',
                cursor: 'pointer'
              }}
              onClick={() => handleElementClick(el)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {el.label}
            </motion.div>
          ))}
        </motion.div>

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

        <div style={{
          position: 'relative',
          height: '3rem',
          margin: '1rem 0'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#4caf50',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.5rem',
                backgroundColor: '#4caf50',
                marginLeft: '0.5rem',
                verticalAlign: 'middle'
              }}
            />
          </motion.div>
        </div>

        <p style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          color: 'rgba(255,255,255,0.9)',
          margin: '0 0 3rem',
          fontWeight: 300,
          maxWidth: '800px',
          textShadow: '0 1px 5px rgba(0,0,0,0.2)'
        }}>
          <span style={{whiteSpace: 'nowrap'}}>🌐 Websites</span>{' '}
          <span style={{whiteSpace: 'nowrap'}}>📱 Mobile Apps</span>{' '}
          <span style={{whiteSpace: 'nowrap'}}>💻 Custom Software</span>
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
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
              textAlign: 'center',
              width: '100%',
              ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 25px rgba(46, 125, 50, 0.7)',
                background: 'linear-gradient(90deg, #1b5e20, #2e7d32)'
              }
            }}
          >
            Explore Our Services
          </Link>
          
          <Link 
            to="/funding" 
            style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, #1565c0, #1976d2)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(21, 101, 192, 0.5)',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              width: '100%',
              ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 25px rgba(21, 101, 192, 0.7)',
                background: 'linear-gradient(90deg, #0d47a1, #1565c0)'
              }
            }}
          >
            Get Funding
          </Link>
        </div>

        {/* Info Card */}
        {showInfoCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              color: darkMode ? 'white' : '#333',
              padding: '1.5rem',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              zIndex: 10,
              border: `1px solid ${darkMode ? '#333' : '#eee'}`
            }}
            onClick={() => setShowInfoCard(false)}
          >
            <h3 style={{ 
              marginTop: 0,
              color: '#4caf50',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{activeElement.label}</span>
            </h3>
            <p>{activeElement.info}</p>
            <button 
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'none',
                border: 'none',
                color: darkMode ? '#aaa' : '#666',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;