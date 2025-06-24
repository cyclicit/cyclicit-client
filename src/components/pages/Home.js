import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ darkMode }) => {
  const [activeElement, setActiveElement] = useState(null);
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'bn' for Bengali

  // English phrases
  const enPhrases = ["Web sites", "Mobile Apps", "AI Solutions", "Cloud Services", "IoT Systems"];
  // Bengali phrases
  const bnPhrases = ["ওয়েবসাইট", "মোবাইল অ্যাপ", "এআই সমাধান", "ক্লাউড সার্ভিস", "আইওটি সিস্টেম"];

  const phrases = language === 'en' ? enPhrases : bnPhrases;

  useEffect(() => {
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
  }, [typedText, currentPhraseIndex, typingForward, language]);

  const floatingElements = [
    {
      id: 'web',
      label: language === 'en' ? 'Web' : 'ওয়েব',
      size: 60,
      top: '5%',
      left: '10%',
      fontSize: '1.1rem',
      borderRadius: '24px',
      info: language === 'en' 
        ? 'Modern, responsive websites with cutting-edge technologies like React, Next.js, and Node.js.'
        : 'আধুনিক, রেস্পন্সিভ ওয়েবসাইট রিয়েক্ট, নেক্সট.জেএস এবং নোড.জেএস এর মত উন্নত প্রযুক্তি দিয়ে তৈরি।'
    },
    {
      id: 'mobile',
      label: language === 'en' ? 'Mobile' : 'মোবাইল',
      size: 70,
      top: '50%',
      left: '5%',
      fontSize: '1rem',
      borderRadius: '20px',
      info: language === 'en' 
        ? 'Cross-platform mobile apps using React Native and Flutter for iOS and Android.'
        : 'ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ রিয়েক্ট নেটিভ এবং ফ্লাটার ব্যবহার করে আইওএস এবং অ্যান্ড্রয়েডের জন্য।'
    },
    {
      id: 'E-commerce',
      label: language === 'en' ? 'E-commerce' : 'ই-কমার্স',
      size: 100,
      top: '5%',
      right: '10%',
      fontSize: '1rem',
      borderRadius: '20px',
      info: language === 'en' 
        ? 'Complete e-commerce solutions with secure payment gateways and inventory management.'
        : 'সুরক্ষিত পেমেন্ট গেটওয়ে এবং ইনভেন্টরি ম্যানেজমেন্ট সহ সম্পূর্ণ ই-কমার্স সমাধান।'
    },
    {
      id: 'ai',
      label: language === 'en' ? 'ai' : 'এআই',
      size: 60,
      top: '50%',
      right: '5%',
      fontSize: '1.3rem',
      borderRadius: '30px',
      info: language === 'en' 
        ? 'AI-powered solutions including machine learning models, chatbots, and computer vision applications.'
        : 'মেশিন লার্নিং মডেল, চ্যাটবট এবং কম্পিউটার ভিশন অ্যাপ্লিকেশন সহ এআই-চালিত সমাধান।'
    },
    {
      id: 'cloud',
      label: language === 'en' ? 'Cloud' : 'ক্লাউড',
      size: 60,
      bottom: '5%',
      left: '10%',
      fontSize: '0.9rem',
      borderRadius: '16px',
      info: language === 'en' 
        ? 'Cloud architecture, deployment, and management on AWS, Azure, and Google Cloud Platform.'
        : 'AWS, Azure এবং Google Cloud Platform এ ক্লাউড আর্কিটেকচার, ডেপ্লয়মেন্ট এবং ম্যানেজমেন্ট।'
    },
    {
      id: 'iot',
      label: language === 'en' ? 'iot' : 'আইওটি',
      size: 60,
      bottom: '5%',
      right: '20%',
      fontSize: '1rem',
      borderRadius: '22px',
      info: language === 'en' 
        ? 'Internet of Things solutions connecting devices and creating smart ecosystems.'
        : 'ডিভাইস সংযোগ এবং স্মার্ট ইকোসিস্টেম তৈরি করার জন্য ইন্টারনেট অফ থিংস সমাধান।'
    }
  ];

  const handleElementClick = (element) => {
    setActiveElement(element);
    setShowInfoCard(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      boxSizing: 'border-box'
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: darkMode 
        ? 'radial-gradient(circle at 75% 30%, #1a2e1a 0%, #121212 60%)' 
        : 'radial-gradient(circle at 75% 30%, #e8f5e9 0%, #f8f9fa 60%)',
      zIndex: 0
    },
    floatingContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      margin: '3rem auto',
      overflow: 'hidden',
      zIndex: 1
    },
    contentContainer: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      boxSizing: 'border-box'
    },
    heading: {
      fontSize: 'clamp(2.5rem, 7vw, 5rem)',
      fontWeight: 800,
      margin: '0 0 1rem',
      color: darkMode ? 'white' : '#2d3436',
      textShadow: darkMode ? '0 2px 10px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.1)',
      lineHeight: 1.2
    },
    typewriterContainer: {
      position: 'relative',
      height: '3rem',
      margin: '1rem 0'
    },
    typewriterText: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      color: '#4caf50',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    },
    cursor: {
      display: 'inline-block',
      width: '2px',
      height: '1.5rem',
      backgroundColor: '#4caf50',
      marginLeft: '0.5rem',
      verticalAlign: 'middle'
    },
    servicesText: {
      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
      color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)',
      margin: '0 0 2rem',
      fontWeight: 300,
      maxWidth: '800px',
      textShadow: darkMode ? '0 1px 5px rgba(0,0,0,0.3)' : '0 1px 5px rgba(0,0,0,0.1)'
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%'
    },
    buttonWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '300px'
    },
    primaryButton: {
      display: 'inline-block',
      padding: '0.8rem 1.5rem',
      borderRadius: '50px',
      background: 'linear-gradient(90deg, #2e7d32, #4caf50)',
      color: 'white',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 'clamp(1rem, 3vw, 1.1rem)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(46, 125, 50, 0.4)',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    secondaryButton: {
      display: 'inline-block',
      padding: '0.8rem 1.5rem',
      borderRadius: '50px',
      background: 'linear-gradient(90deg, #1565c0, #1976d2)',
      color: 'white',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 'clamp(1rem, 3vw, 1.1rem)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(21, 101, 192, 0.4)',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    infoCard: {
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
    },
    closeButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      background: 'none',
      border: 'none',
      color: darkMode ? '#aaa' : '#666',
      fontSize: '1.2rem',
      cursor: 'pointer'
    },
    languageToggle: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
      color: darkMode ? 'white' : '#333',
      border: `1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
      cursor: 'pointer',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Language Toggle */}
      <motion.button
        style={styles.languageToggle}
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === 'en' ? 'বাংলা' : 'English'}
      </motion.button>

      {/* Background */}
      <div style={styles.background}></div>

      {/* Floating Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={styles.floatingContainer}
      >
        {floatingElements.map((el, index) => (
          <motion.div
            key={el.id}
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

      {/* Main Content */}
      <div style={styles.contentContainer}>
       <h1 style={styles.heading}>
  {language === 'en' ? (
    'Welcome to '
  ) : (
    <span style={{ fontFamily: "'Noto Sans Bengali', 'SolaimanLipi', sans-serif" }}>স্বাগতম </span>
  )}
  Cyclic<span style={{ color: '#4caf50' }}>-iT</span>
  {language === 'bn' && (
    <span style={{ 
      fontFamily: "'Noto Sans Bengali', 'SolaimanLipi', sans-serif",
      fontSize: '0.9em',
      marginLeft: '0.3em'
    }}>এ</span>
  )}
</h1>

        <div style={styles.typewriterContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.typewriterText}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              style={styles.cursor}
            />
          </motion.div>
        </div>

        <p style={styles.servicesText}>
          <span style={{whiteSpace: 'nowrap'}}>🌐 {language === 'en' ? 'Websites' : 'ওয়েবসাইট'}</span>{' '}
          <span style={{whiteSpace: 'nowrap'}}>📱 {language === 'en' ? 'Mobile Apps' : 'মোবাইল অ্যাপ'}</span>{' '}
          <span style={{whiteSpace: 'nowrap'}}>💻 {language === 'en' ? 'Custom Software' : 'কাস্টম সফটওয়্যার'}</span>
        </p>

        <div style={styles.buttonsContainer}>
          <motion.div 
            style={styles.buttonWrapper}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/services" 
              style={styles.primaryButton}
            >
              {language === 'en' ? 'Explore Our Services' : 'আমাদের সেবা সমূহ'}
            </Link>
          </motion.div>
          
          <motion.div 
            style={styles.buttonWrapper}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/buy" 
              style={styles.secondaryButton}
            >
              {language === 'en' ? 'Browse Templates' : 'টেমপ্লেট ব্রাউজ করুন'}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Info Card */}
      {showInfoCard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={styles.infoCard}
        >
          <button 
            style={styles.closeButton}
            onClick={() => setShowInfoCard(false)}
          >
            ×
          </button>
          <h3>{activeElement?.label}</h3>
          <p>{activeElement?.info}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Home;