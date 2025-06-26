import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = ({ darkMode }) => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('development');

  const serviceCategories = {
    development: [
      
      { icon: '🖥️', title: 'Websites', 
        desc: 'Beautiful, responsive websites that represent your brand / e-commerce',
        details: [
          'SEO-optimized landing pages',
          'E-commerce with payment gateways',
          'Content Management Systems',
          'Portfolio & brochure sites',
          'Multilingual support'
        ],
        technologies: ['Next.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'Webflow']
      },
      { icon: '📱', title: 'Mobile Apps', 
        desc: 'iOS and Android apps built with native or cross-platform technologies',
        details: [
          'Native iOS (Swift) development',
          'Native Android (Kotlin) development',
          'Cross-platform (React Native/Flutter)',
          'App store optimization',
          'Push notification systems'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
      },
      { icon: '💻', title: 'Custom Software', 
        desc: 'Tailored solutions for your specific business needs',
        details: [
          'Inventory management systems',
          'Automated workflow solutions',
          'Data analytics dashboards',
          'AI/ML integration',
          'Desktop applications'
        ],
        technologies: ['Python', 'Java', 'C#', 'Electron', 'TensorFlow']
      }
    ],
    consulting: [
      { icon: '📊', title: 'Tech Strategy', 
        desc: 'Roadmap planning for digital transformation',
        details: [
          'Technology stack evaluation',
          'Digital maturity assessment',
          'Innovation workshops',
          'Competitor analysis',
          '5-year planning'
        ]
      },
      { icon: '🔒', title: 'Security Audit', 
        desc: 'Comprehensive security assessment for your systems',
        details: [
          'Penetration testing',
          'Compliance checks (GDPR, HIPAA)',
          'Vulnerability scanning',
          'Security training',
          'Incident response planning'
        ]
      },
      { icon: '📈', title: 'Performance Optimization', 
        desc: 'Speed and efficiency improvements for existing systems',
        details: [
          'Database optimization',
          'Code refactoring',
          'Load testing',
          'Caching strategies',
          'CDN implementation'
        ]
      }
    ]
  };

  const benefits = [
    { icon: '⚡', title: 'Fast Project Delivery', 
      desc: 'Rapid implementation with agile methodologies',
      details: '2-week sprints with continuous deployment, daily standups, and bi-weekly demos ensure we deliver features quickly while maintaining quality.'
    },
    { icon: '📚', title: 'Custom Code Library', 
      desc: 'Reusable components for efficient development',
      details: 'Our proprietary library of 500+ components reduces development time by 40% while ensuring consistency and best practices.'
    },
    { icon: '💰', title: 'Affordable Pricing', 
      desc: 'Premium quality at competitive rates',
      details: 'Flexible engagement models (hourly, project-based, retainer) with transparent pricing and no hidden costs.'
    },
    { icon: '👨‍💻', title: 'Experienced Team', 
      desc: 'Experts across multiple industries',
      details: '10+ years average experience across our team, with specialists in healthcare, finance, e-commerce, and education sectors.'
    },
    { icon: '🔄', title: 'End-to-End Solutions', 
      desc: 'From concept to deployment and beyond',
      details: 'Full product lifecycle support including discovery, design, development, testing, deployment, and maintenance.'
    },
    { icon: '🖥️', title: 'Hosting Options', 
      desc: 'Flexible VPS solutions for all needs',
      details: 'Managed hosting solutions with 99.9% uptime, automatic backups, and 24/7 monitoring starting at just $29/month.'
    }
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

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
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
        
        {/* Animated Header */}
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
            }}>CycliciT</span> - Trusted by Real Institutions 
          </motion.p>
        </motion.div>

        {/* Service Categories Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          {Object.keys(serviceCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(category)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                background: activeTab === category 
                  ? 'linear-gradient(135deg, #2e7d32, #4caf50)'
                  : darkMode ? '#333' : '#e8f5e9',
                color: activeTab === category ? 'white' : (darkMode ? '#ddd' : '#2e7d32'),
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: activeTab === category 
                  ? '0 4px 15px rgba(46, 125, 50, 0.4)' 
                  : '0 2px 5px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {category.replace('-', ' ')}
            </motion.button>
          ))}
        </motion.div>

        {/* Service Types Section */}
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
            Our {activeTab === 'development' ? 'Development' : 'Consulting'} Services
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              perspective: '1000px',
              padding: '0 0.5rem'
            }}
          >
            {serviceCategories[activeTab].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => toggleExpand(index)}
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
                  minHeight: expandedService === index ? '400px' : '220px',
                  cursor: 'pointer',
                  transition: 'min-height 0.3s ease'
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
                    color: darkMode ? '#cccccc' : '#555555',
                    marginBottom: '1rem'
                  }}
                >
                  {service.desc}
                </motion.p>

                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0',
                      borderTop: `1px solid ${darkMode ? '#333' : '#eee'}`,
                      marginTop: '0.5rem'
                    }}
                  >
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#4caf50',
                      margin: '0.5rem 0'
                    }}>
                      What We Offer:
                    </h4>
                    <ul style={{
                      paddingLeft: '1.2rem',
                      marginBottom: '1rem'
                    }}>
                      {service.details.map((detail, i) => (
                        <li key={i} style={{
                          marginBottom: '0.3rem',
                          fontSize: '0.9rem',
                          lineHeight: '1.5',
                          color: darkMode ? '#ddd' : '#555'
                        }}>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {service.technologies && (
                      <>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#4caf50',
                          margin: '0.5rem 0'
                        }}>
                          Technologies:
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          marginBottom: '1rem'
                        }}>
                          {service.technologies.map((tech, i) => (
                            <span key={i} style={{
                              background: darkMode ? '#333' : '#e8f5e9',
                              color: darkMode ? '#81c784' : '#2e7d32',
                              padding: '0.3rem 0.6rem',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 500
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                <motion.div
                  animate={{ rotate: expandedService === index ? 180 : 0 }}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    color: '#4caf50',
                    fontSize: '1.2rem'
                  }}
                >
                  ▼
                </motion.div>

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

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '0.9rem',
            textAlign: 'center',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: darkMode ? '#81c784' : '#2e7d32'
          }}>
            Why Choose Us
          </h2>
          
          <motion.h2 
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontWeight: 700,
              marginBottom: '2rem',
              color: darkMode ? '#ffffff' : '#333333',
              padding: '0 0.5rem'
            }}
          >
            Our Competitive Advantages
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              perspective: '1000px',
              padding: '0 0.5rem'
            }}
          >
            {benefits.map((benefit, index) => (
               <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => toggleExpand(index)}
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
                  minHeight: expandedService === index ? '400px' : '220px',
                  cursor: 'pointer',
                  transition: 'min-height 0.3s ease'
                }}
              >
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
                  {benefit.icon}
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
                  {benefit.title}
                </motion.h3>
                
                <motion.p 
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: darkMode ? '#cccccc' : '#555555',
                    zIndex: 1,
                    padding: '0 0.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  {benefit.desc}
                </motion.p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: 'auto', opacity: 1 }}
                  style={{
                    overflow: 'hidden',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: darkMode ? '#bdbdbd' : '#666',
                    textAlign: 'left',
                    padding: '0 0.5rem'
                  }}
                >
                  {benefit.details}
                </motion.div>
               
                
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
                  {benefit.icon}
                </motion.div>
                
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

       

        {/* Animated CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2.5rem 1.5rem',
            borderRadius: '16px',
            background: darkMode 
              ? 'linear-gradient(145deg, #1a1a1a, #222)' 
              : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
            boxShadow: darkMode 
              ? '0 8px 20px -10px rgba(0,0,0,0.3)' 
              : '0 8px 20px -10px rgba(0,0,0,0.1)',
            border: `1px solid ${darkMode ? '#2e7d32' : '#e8f5e9'}`,
            margin: '0 0.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated background elements */}
          <motion.div
            initial={{ x: -100, y: -100, rotate: 0 }}
            animate={{ x: '100%', y: '100%', rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}
          />
          <motion.div
            initial={{ x: '100%', y: '50%', rotate: 0 }}
            animate={{ x: '-100%', y: '-50%', rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(46,125,50,0.1) 0%, rgba(46,125,50,0) 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}
          />
          
          <motion.h3 
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: darkMode ? '#ffffff' : '#2e7d32',
              position: 'relative',
              zIndex: 1
            }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          
          <motion.p
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: darkMode ? '#e0e0e0' : '#555555',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            Whether you need a complete digital transformation or specific technical expertise, our team is ready to help you achieve your goals with custom solutions tailored to your needs.
          </motion.p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            position: 'relative',
            zIndex: 1
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
    </div>
  );
};

export default Services;