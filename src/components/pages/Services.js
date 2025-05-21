import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = ({ darkMode }) => {
  const services = [
    { icon: '⚡', title: 'Fast Project Delivery', desc: 'Rapid implementation with agile methodologies' },
    { icon: '📚', title: 'Custom Code Library', desc: 'Reusable components for efficient development' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at competitive rates' },
    { icon: '👨‍💻', title: 'Experienced Team', desc: 'Experts across multiple industries' },
    { icon: '🔄', title: 'End-to-End Solutions', desc: 'From concept to deployment and beyond' },
    { icon: '🖥️', title: 'Hosting Options', desc: 'Flexible VPS solutions for all needs' }
  ];

  const serviceTypes = [
    { icon: '🌐', title: 'Web Applications', desc: 'Interactive, database-driven applications accessible through browsers' },
    { icon: '🖥️', title: 'Websites', desc: 'Beautiful, responsive websites that represent your brand / e-commerce' },
    { icon: '📱', title: 'Mobile Apps', desc: 'iOS and Android apps built with native or cross-platform technologies' },
    { icon: '💻', title: 'Custom Software', desc: 'Tailored solutions for your specific business needs' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: darkMode 
        ? "0 25px 50px -12px rgba(76, 175, 80, 0.25)"
        : "0 25px 50px -12px rgba(46, 125, 50, 0.25)"
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundColor: darkMode ? '#121212' : '#f8f9fa',
        color: darkMode ? '#ffffff' : '#333333',
        minHeight: '100vh',
        padding: '1rem 0.5rem'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 0.5rem'
      }}>
        

        {/* Existing Animated Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ 
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            padding: '0 0.5rem'
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #2e7d32, #4caf50)',
              borderRadius: '2px'
            }}
          />
          
         
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              margin: '0.5rem 0',
              background: 'linear-gradient(90deg, #2e7d32, #4caf50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Digital Solutions That Grow With You
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              maxWidth: '700px',
              margin: '1rem auto 0',
              color: darkMode ? '#bdbdbd' : '#555555',
              padding: '0 0.5rem'
            }}
          >
            Powered by <span style={{ 
              color: '#4caf50',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}>CycliciT</span>
          </motion.p>
        </motion.div>


        {/* New Service Types Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <motion.h2 
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: darkMode ? '#81c784' : '#2e7d32',
              padding: '0 0.5rem'
            }}
          >
            Our Core Development Services
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              perspective: '1000px',
              padding: '0 0.5rem'
            }}
          >
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                style={{
                  background: darkMode 
                    ? 'linear-gradient(145deg, #1a1a1a, #222)' 
                    : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: darkMode ? '#ffffff' : '#333333',
                  boxShadow: darkMode 
                    ? '0 8px 20px -10px rgba(0,0,0,0.3)' 
                    : '0 8px 20px -10px rgba(0,0,0,0.1)',
                  border: `1px solid ${darkMode ? '#2e7d32' : '#e8f5e9'}`,
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '180px'
                }}
              >
                <motion.div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: '#4caf50'
                  }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: darkMode ? '#ffffff' : '#2e7d32'
                  }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    color: darkMode ? '#cccccc' : '#555555'
                  }}
                >
                  {service.desc}
                </motion.p>

                {/* Floating icon background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  position: 'absolute',
                  fontSize: '8rem',
                  color: '#4caf50',
                  zIndex: 0,
                  userSelect: 'none'
                }}
              >
                {service.icon}
              </motion.div>

                



              </motion.div>
            ))}
          </motion.div>
        </motion.div>

<h2 style={{
            fontSize: '0.9rem',
            textAlign: 'center',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: darkMode ? '#81c784' : '#2e7d32'
          }}>
            Our Premium Services
          </h2>


       
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
            perspective: '1000px',
            padding: '0 0.5rem'
          }}

          
        >  
         



          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              style={{
                background: darkMode 
                  ? 'linear-gradient(145deg, #1a1a1a, #222)' 
                  : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                borderRadius: '16px',
                padding: '1.5rem',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: darkMode ? '#ffffff' : '#333333',
                boxShadow: darkMode 
                  ? '0 8px 20px -10px rgba(0,0,0,0.3)' 
                  : '0 8px 20px -10px rgba(0,0,0,0.1)',
                border: `1px solid ${darkMode ? '#2e7d32' : '#e8f5e9'}`,
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Floating icon background */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 0.05 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  position: 'absolute',
                  fontSize: '8rem',
                  color: '#4caf50',
                  zIndex: 0,
                  userSelect: 'none'
                }}
              >
                {service.icon}
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.2 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#4caf50',
                  zIndex: 1,
                  textShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  margin: '0.5rem 0 1rem',
                  color: darkMode ? '#ffffff' : '#2e7d32',
                  zIndex: 1
                }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: darkMode ? '#cccccc' : '#555555',
                  zIndex: 1,
                  padding: '0 0.5rem'
                }}
              >
                {service.desc}
              </motion.p>
              
              {/* Hover effect line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '80%' }}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2e7d32, #4caf50)',
                  borderRadius: '3px'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '1.5rem',
            borderRadius: '16px',
            background: darkMode 
              ? 'linear-gradient(145deg, #1a1a1a, #222)' 
              : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
            boxShadow: darkMode 
              ? '0 8px 20px -10px rgba(0,0,0,0.3)' 
              : '0 8px 20px -10px rgba(0,0,0,0.1)',
            border: `1px solid ${darkMode ? '#2e7d32' : '#e8f5e9'}`,
            margin: '0 0.5rem'
          }}
        >
          <motion.h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: darkMode ? '#ffffff' : '#2e7d32'
            }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <Link 
                to="/funding" 
                style={{
                  display: 'inline-block',
                  width: '100%',
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 8px 15px rgba(27, 94, 32, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  Request Tech-Funding
                </span>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    marginLeft: '0.5rem',
                    fontSize: '1.1rem',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  →
                </motion.span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 10 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '8px',
                    height: '8px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    zIndex: 1
                  }}
                />
              </Link>
            </motion.div>
          
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <Link 
                to="/contact" 
                style={{
                  display: 'inline-block',
                  width: '100%',
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  background: darkMode ? '#333' : '#e8f5e9',
                  color: darkMode ? '#fff' : '#2e7d32',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Get Started Today
              </Link>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <Link 
                to="/internship" 
                style={{
                  display: 'inline-block',
                  width: '100%',
                  padding: '1rem 1.5rem',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: darkMode ? '#4caf50' : '#2e7d32',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: darkMode 
                    ? '0 0 0 2px #4caf50 inset' 
                    : '0 0 0 2px #2e7d32 inset',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Apply for Internship
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;