import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ darkMode }) => {
  const [activeElement, setActiveElement] = useState(null);
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);
  const [language, setLanguage] = useState('bn'); // 'en' for English, 'bn' for Bengali

  // English phrases
  const enPhrases = ["E-commerce", "Mobile Apps", "AI Solutions", "Cloud Services", "Cloud Services ", "Buisness Management", "AI Solutions"];
  // Bengali phrases
  const bnPhrases = ["ই-কমার্স", "মোবাইল অ্যাপ", "এআই সমাধান", "ক্লাউড সার্ভিস", "ক্লাউড সার্ভিস", "বিজনেস ম্যানেজমেন্ট", "এআই সমাধান"];

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
      size: 50,
      top: '10%',
      left: '10%',
      fontSize: '1.1rem',
      borderRadius: '24px',
      info: language === 'en' 
        ? 'Modern, responsive websites with cutting-edge technologies like React, Next.js, and Node.js.'
        : 'আধুনিক, রেস্পন্সিভ ওয়েবসাইট রিয়েক্ট, নেক্সট.জেএস এবং নোড.জেএস এর মত উন্নত প্রযুক্তি দিয়ে তৈরি।'
    },
    {
      id: 'mobile',
      label: language === 'en' ? 'App' : 'অ্যাপ',
      size: 50,
      top: '5%',
      left: '40%',
      fontSize: '1rem',
      borderRadius: '24px',
      info: language === 'en' 
        ? 'Cross-platform mobile apps using React Native and Flutter for iOS and Android.'
        : 'ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ রিয়েক্ট নেটিভ এবং ফ্লাটার ব্যবহার করে আইওএস এবং অ্যান্ড্রয়েডের জন্য।'
    },
    {
      id: 'E-commerce',
      label: language === 'en' ? 'E-commerce' : 'ই-কমার্স',
      size: 70,
      top: '10%',
      right: '10%',
      fontSize: '0.7rem',
      borderRadius: '30px',
      info: language === 'en' 
        ? 'Complete e-commerce solutions with secure payment gateways and inventory management.'
        : 'সুরক্ষিত পেমেন্ট গেটওয়ে এবং ইনভেন্টরি ম্যানেজমেন্ট সহ সম্পূর্ণ ই-কমার্স সমাধান।'
    },
    {
      id: 'ai',
      label: language === 'en' ? 'AI' : 'এআই',
      size: 60,
      top: '30%',
      right: '10%',
      fontSize: '1rem',
      borderRadius: '30px',
      info: language === 'en' 
        ? 'AI-powered solutions including machine learning models, chatbots, and computer vision applications.'
        : 'মেশিন লার্নিং মডেল, চ্যাটবট এবং কম্পিউটার ভিশন অ্যাপ্লিকেশন সহ এআই-চালিত সমাধান।'
    },
    {
      id: 'cloud',
      label: language === 'en' ? 'Cloud' : 'ক্লাউড',
      size: 50,
      bottom: '60%',
      left: '10%',
      fontSize: '0.9rem',
      borderRadius: '16px',
      info: language === 'en' 
        ? 'Cloud architecture, deployment, and management on AWS, Azure, and Google Cloud Platform.'
        : 'AWS, Azure এবং Google Cloud Platform এ ক্লাউড আর্কিটেকচার, ডেপ্লয়মেন্ট এবং ম্যানেজমেন্ট।'
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
        ? 'radial-gradient(circle at 75% 30%,rgba(0, 1, 0, 1) 0%,rgba(1, 36, 1, 1) 60%)' 
        : 'radial-gradient(circle at 75% 30%,rgb(179, 230, 184) 0%,rgb(199, 234, 200) 60%)',
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
      color: '#f2f7f2ff',
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
      fontWeight: 700,
      maxWidth: '800px',
      textShadow: darkMode ? '0 1px 5px rgba(0,0,0,0.3)' : '0 1px 5px rgba(0,0,0,0.1)'
    },
    mainImage: {
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      borderRadius: '12px',
      margin: '2rem 0',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
    },
    sideImage: {
      width: '80%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      margin: '1rem 0'
    },
    imageButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      margin: '1.5rem 0',
      flexWrap: 'wrap'
    },
    imageButton: {
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'white',
      background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
    },
    linksContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.1rem',
      padding: '0rem',
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%'
    },
    link: {
      fontSize: '1.2rem',
      fontWeight: 900,
      color: 'transparent',
      background: 'linear-gradient(90deg, #ecfaecff, #f3f6f3ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      position: 'relative',
      padding: '0.5rem 0',
    },
    linkHover: {
      color: darkMode ? '#009307ff' : '#069501ff',
      textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
    arrow: {
      marginLeft: '0.5rem',
      display: 'inline-block',
      transition: 'transform 0.3s ease',
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
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      padding: '0.5rem 1rem',
      background: darkMode ? '#2e7d32' : '#fff',
      color: darkMode ? '#fff' : '#2e7d32',
      border: 'none',
      borderRadius: '20px',
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
            <span style={{ fontFamily: "'Noto Sans Bengali', 'SolaimanLipi', sans-serif" }}></span>
          )}
          Cyclic<span style={{ color: '#4caf50' }}>-iT</span>
          {language === 'bn' && (
            <span style={{ 
              fontFamily: "'Noto Sans Bengali', 'SolaimanLipi', sans-serif",
              fontSize: '0.9em',
              marginLeft: '0.3em'
            }}></span>
          )}
        </h1>

        <div style={styles.typewriterContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            style={styles.typewriterText}
          >
            {typedText}
            <motion.span />
          </motion.div>
        </div>

        <p style={{
            fontSize: language === 'en' ? '1.3rem' : '1.4rem',
            fontFamily: language === 'en' 
              ? "'Georgia', 'Times New Roman', serif" 
              : "'Noto Sans Bengali', serif",
            fontStyle: 'italic',
            lineHeight: '1.4',
            fontWeight: '900',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          {language === 'en' ? (
            <>
              From E-commerce to Business Management - We are providing Qualityful Websites, Apps, Custom Software
            </>
          ) : (
            <>
              ই-কমার্স থেকে বিজনেস ম্যানেজমেন্ট -আমরা প্রদান করছি মানসম্মত ওয়েবসাইট, অ্যাপস, কাস্টম সফটওয়্যার
            </>
          )}
        </p>

        {/* Main Image */}
        <motion.img
          src="https://github.com/cyclicit/cyclicit-img/blob/main/cycy.jpg?raw=true"
          alt="Cyclic-iT Services"
          style={styles.mainImage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

         {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: 'center',
            margin: '1.5rem 0',
            padding: '1rem',
          }}
        >
          <p style={{
            fontSize: language === 'en' ? '1.3rem' : '1.4rem',
            fontFamily: language === 'en' 
              ? "'Georgia', 'Times New Roman', serif" 
              : "'Noto Sans Bengali', serif",
            fontStyle: 'italic',
            lineHeight: '1.4',
            fontWeight: '900',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {language === 'en' 
              ? '"We want to be the Long-term Technology Partner for Local Entrepreneurs and Buisnesses"' 
              : '"আমরা স্থানীয় বাংলাদেশী উদ্যোক্তা এবং ব্যবসায়ীদের দীর্ঘমেয়াদী প্রযুক্তি অংশীদার হতে চাই।"'
            }
          </p>
        </motion.div>

        {/* Buttons after main image */}
        <motion.div 
          style={styles.imageButtonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/services" 
            style={styles.imageButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
            }}
          >
            {language === 'en' ? 'Explore Our Services' : 'আমাদের সেবা সমূহ'} ➔
          </Link>
          <Link 
            to="/c&p" 
            style={styles.imageButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
            }}
          >
            {language === 'en' ? 'Clients & Packages' : 'ক্লায়েন্ট ও প্যাকেজস'} ➔
          </Link>
        </motion.div>

       

        {/* Links Section with Side Images */}
        <div style={styles.linksContainer}>

          {/* First Side Image */}
          <motion.img
            src="https://github.com/cyclicit/cyclicit-img/blob/main/cycy2.jpg?raw=true"
            alt="Cyclic-iT Project 1"
            style={styles.sideImage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <Link to="/funding" style={styles.link} onMouseEnter={(e) => e.currentTarget.style.color = styles.linkHover.color} onMouseLeave={(e) => e.currentTarget.style.color = 'transparent'}>
            {language === 'en' ? 'Entrepreneur Section' : 'উদ্যোক্তা সেকশন'}
            <span style={styles.arrow}> ➔</span>
          </Link>
          
          <Link to="/buy" style={styles.link} onMouseEnter={(e) => e.currentTarget.style.color = styles.linkHover.color} onMouseLeave={(e) => e.currentTarget.style.color = 'transparent'}>
            {language === 'en' ? 'Browse Templates' : 'টেমপ্লেট ব্রাউজ করুন'}
            <span style={styles.arrow}> ➔</span>
          </Link>

          

         

          {/* Second Side Image */}
          <motion.img
            src="https://github.com/cyclicit/cyclicit-img/blob/main/cycy3.jpg?raw=true"
            alt="Cyclic-iT Project 2"
            style={styles.sideImage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />

          {/* Buttons after second image */}
          <motion.div 
            style={styles.imageButtonContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link 
              to="/contact" 
              style={styles.imageButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
              }}
            >
              {language === 'en' ? 'Contact us' : 'যোগাযোগ করুন'} ➔
            </Link>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;