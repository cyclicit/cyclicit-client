import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ darkMode }) => {
  // Color theme
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    topic: ''
  });

  // Interactive state
  const [activeTab, setActiveTab] = useState('form');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ["Let's collaborate!", "Ready to help!", "Ideas welcome!", "Contact us today!"];
  
  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[currentWordIndex];
      if (typingText.length < currentWord.length) {
        setTimeout(() => {
          setTypingText(currentWord.substring(0, typingText.length + 1));
        }, 100);
      } else {
        setTimeout(() => {
          setTypingText('');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    };
    
    const timer = setTimeout(typeWriter, 150);
    return () => clearTimeout(timer);
  }, [typingText, currentWordIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mblodkej', {
        method: 'POST',
        body: formDataObj,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setFormData({ name: '', email: '', message: '', phone: "", topic: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundColor: darkMode ? '#121212' : '#f8f9fa',
        padding: '2rem 1rem',
        color: darkMode ? '#ffffff' : '#333333',
        minHeight: '100vh'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          <motion.h2 
            style={{
              fontSize: '0.8rem',
              color: darkMode ? '#81c784' : primaryGreen,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.8rem'
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.h1
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
              fontWeight: 700,
              margin: '0.5rem 0',
              background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.3',
              minHeight: '60px'
            }}
          >
            {typingText || <span style={{ opacity: 0 }}>Let's Connect</span>}
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              height: '2px',
              background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
              borderRadius: '3px'
            }}
          />
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            gap: '1rem'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('form')}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '50px',
              background: activeTab === 'form' ? 
                `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})` : 
                (darkMode ? '#2a2a2a' : '#e0e0e0'),
              color: activeTab === 'form' ? 'white' : (darkMode ? '#ccc' : '#555'),
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'form' ? '0 4px 12px rgba(46, 125, 50, 0.3)' : 'none'
            }}
          >
            Contact Form
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('info')}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '50px',
              background: activeTab === 'info' ? 
                `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})` : 
                (darkMode ? '#2a2a2a' : '#e0e0e0'),
              color: activeTab === 'info' ? 'white' : (darkMode ? '#ccc' : '#555'),
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'info' ? '0 4px 12px rgba(46, 125, 50, 0.3)' : 'none'
            }}
          >
            Our Information
          </motion.button>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              background: `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})`,
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>✓</div>
            <div>
              <h3 style={{ margin: '0 0 0.2rem 0' }}>Message Sent!</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Contact Form Tab */}
        {activeTab === 'form' && (
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '100%',
              margin: '0 auto',
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          >
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {/* Name Field */}
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0 0.4rem 0',
                    border: 'none',
                    borderBottom: `2px solid ${darkMode ? '#333' : '#e0e0e0'}`,
                    background: 'transparent',
                    color: darkMode ? '#ffffff' : '#333333',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    ':focus': {
                      outline: 'none',
                      borderBottomColor: secondaryGreen
                    }
                  }}
                />
                <label 
                  htmlFor="name" 
                  style={{
                    position: 'absolute',
                    top: formData.name ? '-10px' : '0.8rem',
                    left: 0,
                    color: formData.name ? secondaryGreen : (darkMode ? '#999' : '#666'),
                    fontSize: formData.name ? '0.75rem' : '0.95rem',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    background: darkMode ? '#1e1e1e' : '#ffffff',
                    padding: formData.name ? '0 5px' : '0',
                    zIndex: 1,
                    fontWeight: formData.name ? '600' : '400'
                  }}
                >
                  Full Name
                </label>
              </div>

              {/* Phone Field */}
              <div style={{ position: 'relative' }}>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0 0.4rem 0',
                    border: 'none',
                    borderBottom: `2px solid ${darkMode ? '#333' : '#e0e0e0'}`,
                    background: 'transparent',
                    color: darkMode ? '#ffffff' : '#333333',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    ':focus': {
                      outline: 'none',
                      borderBottomColor: secondaryGreen
                    }
                  }}
                />
                <label 
                  htmlFor="phone" 
                  style={{
                    position: 'absolute',
                    top: formData.phone ? '-10px' : '0.8rem',
                    left: 0,
                    color: formData.phone ? secondaryGreen : (darkMode ? '#999' : '#666'),
                    fontSize: formData.phone ? '0.75rem' : '0.95rem',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    background: darkMode ? '#1e1e1e' : '#ffffff',
                    padding: formData.phone ? '0 5px' : '0',
                    zIndex: 1,
                    fontWeight: formData.phone ? '600' : '400'
                  }}
                >
                  Phone Number
                </label>
              </div>
              
              {/* Email Field */}
              <div style={{ position: 'relative' }}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0 0.4rem 0',
                    border: 'none',
                    borderBottom: `2px solid ${darkMode ? '#333' : '#e0e0e0'}`,
                    background: 'transparent',
                    color: darkMode ? '#ffffff' : '#333333',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    ':focus': {
                      outline: 'none',
                      borderBottomColor: secondaryGreen
                    }
                  }}
                />
                <label 
                  htmlFor="email" 
                  style={{
                    position: 'absolute',
                    top: formData.email ? '-10px' : '0.8rem',
                    left: 0,
                    color: formData.email ? secondaryGreen : (darkMode ? '#999' : '#666'),
                    fontSize: formData.email ? '0.75rem' : '0.95rem',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    background: darkMode ? '#1e1e1e' : '#ffffff',
                    padding: formData.email ? '0 5px' : '0',
                    zIndex: 1,
                    fontWeight: formData.email ? '600' : '400'
                  }}
                >
                  Email Address
                </label>
              </div>

              {/* Topic Field */}
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  id="topic" 
                  name="topic" 
                  required 
                  value={formData.topic}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0 0.4rem 0',
                    border: 'none',
                    borderBottom: `2px solid ${darkMode ? '#333' : '#e0e0e0'}`,
                    background: 'transparent',
                    color: darkMode ? '#ffffff' : '#333333',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    ':focus': {
                      outline: 'none',
                      borderBottomColor: secondaryGreen
                    }
                  }}
                />
                <label 
                  htmlFor="topic" 
                  style={{
                    position: 'absolute',
                    top: formData.topic ? '-10px' : '0.8rem',
                    left: 0,
                    color: formData.topic ? secondaryGreen : (darkMode ? '#999' : '#666'),
                    fontSize: formData.topic ? '0.75rem' : '0.95rem',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    background: darkMode ? '#1e1e1e' : '#ffffff',
                    padding: formData.topic ? '0 5px' : '0',
                    zIndex: 1,
                    fontWeight: formData.topic ? '600' : '400'
                  }}
                >
                  Topic
                </label>
              </div>
              
              {/* Message Field */}
              <div style={{ position: 'relative' }}>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0 0.4rem 0',
                    border: 'none',
                    borderBottom: `2px solid ${darkMode ? '#333' : '#e0e0e0'}`,
                    background: 'transparent',
                    color: darkMode ? '#ffffff' : '#333333',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                    minHeight: '80px',
                    transition: 'all 0.3s ease',
                    ':focus': {
                      outline: 'none',
                      borderBottomColor: secondaryGreen
                    }
                  }}
                ></textarea>
                <label 
                  htmlFor="message" 
                  style={{
                    position: 'absolute',
                    top: formData.message ? '-10px' : '0.8rem',
                    left: 0,
                    color: formData.message ? secondaryGreen : (darkMode ? '#999' : '#666'),
                    fontSize: formData.message ? '0.75rem' : '0.95rem',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    background: darkMode ? '#1e1e1e' : '#ffffff',
                    padding: formData.message ? '0 5px' : '0',
                    zIndex: 1,
                    fontWeight: formData.message ? '600' : '400'
                  }}
                >
                  Your Message
                </label>
              </div>
              
              {/* Submit Button */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '50px',
                  background: `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})`,
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: '18px',
                    height: '18px',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '8px',
                    height: '2px',
                    background: 'white',
                    transform: 'translate(-50%, -50%)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '5px',
                    height: '5px',
                    borderRight: '2px solid white',
                    borderTop: '2px solid white',
                    transform: 'translate(-30%, -50%) rotate(45deg)'
                  }}></div>
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Information Tab */}
        {activeTab === 'info' && (
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Contact Methods */}
            <motion.div
              variants={itemVariants}
              style={{
                background: darkMode ? '#1e1e1e' : '#ffffff',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.12)'
                }
              }}
            >
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📧</span> Email
              </h3>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: '0 0 1rem 0',
                wordBreak: 'break-word',
                fontSize: '0.95rem'
              }}>cyclicit@gmail.com</p>
              <p style={{
                color: darkMode ? '#aaaaaa' : '#888888',
                fontSize: '0.85rem',
                lineHeight: '1.5'
              }}>
                For general inquiries, partnerships, or any questions you might have. We typically respond within 24 hours.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              style={{
                background: darkMode ? '#1e1e1e' : '#ffffff',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.12)'
                }
              }}
            >
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📱</span> Phone
              </h3>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: '0 0 1rem 0',
                fontSize: '0.95rem'
              }}>+8801577148188</p>
              <p style={{
                color: darkMode ? '#aaaaaa' : '#888888',
                fontSize: '0.85rem',
                lineHeight: '1.5'
              }}>
                Available , For urgent matters, please call or text this number.
              </p>
            </motion.div>

            

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              style={{
                background: darkMode ? '#1e1e1e' : '#ffffff',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.12)'
                }
              }}
            >
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🌐</span> Social Media
              </h3>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <motion.a 
                  href="https://www.facebook.com/share/1AqqVT54Rv/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#3b5998',
                    color: 'white',
                    fontSize: '1.2rem',
                    textDecoration: 'none'
                  }}
                >
                  f
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/cyclicit-dhaka-919083367/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#0077b5',
                    color: 'white',
                    fontSize: '1.2rem',
                    textDecoration: 'none'
                  }}
                >
                  in
                </motion.a>
              </div>
              <p style={{
                color: darkMode ? '#aaaaaa' : '#888888',
                fontSize: '0.85rem',
                lineHeight: '1.5'
              }}>
                Connect with us on social media for the latest updates, news, and community discussions.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '3rem',
            background: darkMode ? '#1e1e1e' : '#ffffff',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 600,
            color: darkMode ? '#ffffff' : primaryGreen,
            margin: '0 0 1.5rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>❓</span> Frequently Asked Questions
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {[
              {
                question: "How long does it take to get a response?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our phone number."
              },
              {
                question: "Do you offer support for your products?",
                answer: "Yes, we provide comprehensive support for all our products. Contact us via email or phone for assistance."
              },
              {
                question: "What are your business hours?",
                answer: "Our team is available Monday to Friday from 9AM to 5PM (GMT+6). Limited support is available on Saturdays."
              },
              {
                question: "Can I visit your office?",
                answer: "Currently, we operate remotely but we're happy to arrange meetings when necessary. Contact us to schedule an appointment."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                style={{
                  borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
                  paddingBottom: '1rem'
                }}
              >
                <h4 style={{
                  color: darkMode ? '#ffffff' : '#333333',
                  margin: '0 0 0.5rem 0',
                  fontSize: '1rem'
                }}>{faq.question}</h4>
                <p style={{
                  color: darkMode ? '#aaaaaa' : '#666666',
                  margin: 0,
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;