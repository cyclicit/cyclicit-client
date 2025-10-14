import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = ({ darkMode }) => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [activeTab, setActiveTab] = useState('development');
  const [isBengali, setIsBengali] = useState(false);

  const toggleLanguage = () => {
    setIsBengali(!isBengali);
  };

  const toggleServiceExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const toggleBenefitExpand = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  const serviceCategories = {
    development: [
      { 
        icon: '🖥️', 
        title: isBengali ? 'ওয়েবসাইট' : 'Websites', 
        desc: isBengali ? 
          'আপনার ব্র্যান্ড/ই-কমার্সের জন্য সুন্দর, প্রতিক্রিয়াশীল ওয়েবসাইট' : 
          'Beautiful, responsive websites that represent your brand / e-commerce',
        details: isBengali ? [
          'এসইও-অপ্টিমাইজড ল্যান্ডিং পেজ',
          'পেমেন্ট গেটওয়ে সহ ই-কমার্স',
          'কন্টেন্ট ম্যানেজমেন্ট সিস্টেম',
          'পোর্টফোলিও ও ব্রোশার সাইট',
          'বহুভাষিক সমর্থন'
        ] : [
          'SEO-optimized landing pages',
          'E-commerce with payment gateways',
          'Content Management Systems',
          'Portfolio & brochure sites',
          'Multilingual support'
        ],
        technologies: ['Next.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'Webflow']
      },
      { 
        icon: '📱', 
        title: isBengali ? 'মোবাইল অ্যাপস' : 'Mobile Apps', 
        desc: isBengali ? 
          'নেটিভ বা ক্রস-প্ল্যাটফর্ম প্রযুক্তি দিয়ে নির্মিত iOS এবং Android অ্যাপস' : 
          'iOS and Android apps built with native or cross-platform technologies',
        details: isBengali ? [
          'নেটিভ iOS (Swift) ডেভেলপমেন্ট',
          'নেটিভ Android (Kotlin) ডেভেলপমেন্ট',
          'ক্রস-প্ল্যাটফর্ম (React Native/Flutter)',
          'অ্যাপ স্টোর অপ্টিমাইজেশন',
          'পুশ নোটিফিকেশন সিস্টেম'
        ] : [
          'Native iOS (Swift) development',
          'Native Android (Kotlin) development',
          'Cross-platform (React Native/Flutter)',
          'App store optimization',
          'Push notification systems'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
      },
      { 
        icon: '💻', 
        title: isBengali ? 'কাস্টম সফ্টওয়্যার' : 'Custom Software', 
        desc: isBengali ? 
          'আপনার নির্দিষ্ট ব্যবসায়িক প্রয়োজন অনুযায়ী সমাধান' : 
          'Tailored solutions for your specific business needs',
        details: isBengali ? [
          'ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম',
          'স্বয়ংক্রিয় ওয়ার্কফ্লো সমাধান',
          'ডেটা অ্যানালিটিক্স ড্যাশবোর্ড',
          'AI/ML ইন্টিগ্রেশন',
          'ডেস্কটপ অ্যাপ্লিকেশন'
        ] : [
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
      { 
        icon: '📊', 
        title: isBengali ? 'টেক স্ট্র্যাটেজি' : 'Tech Strategy', 
        desc: isBengali ? 
          'ডিজিটাল রূপান্তরের জন্য রোডম্যাপ পরিকল্পনা' : 
          'Roadmap planning for digital transformation',
        details: isBengali ? [
          'প্রযুক্তি স্ট্যাক মূল্যায়ন',
          'ডিজিটাল পরিপক্কতা মূল্যায়ন',
          'নতুনত্ব কর্মশালা',
          'প্রতিযোগী বিশ্লেষণ',
          '৫-বছর পরিকল্পনা'
        ] : [
          'Technology stack evaluation',
          'Digital maturity assessment',
          'Innovation workshops',
          'Competitor analysis',
          '5-year planning'
        ]
      },
      { 
        icon: '🔒', 
        title: isBengali ? 'সিকিউরিটি অডিট' : 'Security Audit', 
        desc: isBengali ? 
          'আপনার সিস্টেমের জন্য ব্যাপক নিরাপত্তা মূল্যায়ন' : 
          'Comprehensive security assessment for your systems',
        details: isBengali ? [
          'পেনিট্রেশন টেস্টিং',
          'কমপ্লায়েন্স চেক (GDPR, HIPAA)',
          'দুর্বলতা স্ক্যানিং',
          'নিরাপত্তা প্রশিক্ষণ',
          'ঘটনা প্রতিক্রিয়া পরিকল্পনা'
        ] : [
          'Penetration testing',
          'Compliance checks (GDPR, HIPAA)',
          'Vulnerability scanning',
          'Security training',
          'Incident response planning'
        ]
      },
      { 
        icon: '📈', 
        title: isBengali ? 'পারফরম্যান্স অপ্টিমাইজেশন' : 'Performance Optimization', 
        desc: isBengali ? 
          'বিদ্যমান সিস্টেমের জন্য গতি এবং দক্ষতা উন্নতি' : 
          'Speed and efficiency improvements for existing systems',
        details: isBengali ? [
          'ডাটাবেস অপ্টিমাইজেশন',
          'কোড রিফ্যাক্টরিং',
          'লোড টেস্টিং',
          'ক্যাশিং কৌশল',
          'CDN বাস্তবায়ন'
        ] : [
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
    { 
      icon: '⚡', 
      title: isBengali ? 'দ্রুত প্রকল্প বিতরণ' : 'Fast Project Delivery', 
      desc: isBengali ? 
        'চটপট বাস্তবায়ন সহ নমনীয় পদ্ধতি' : 
        'Rapid implementation with agile methodologies',
      details: isBengali ? 
        '২-সপ্তাহের স্প্রিন্টের সাথে অবিচ্ছিন্ন স্থাপনা, দৈনিক স্ট্যান্ডআপ এবং দ্বি-সাপ্তাহিক ডেমো নিশ্চিত করে যে আমরা গুণমান বজায় রেখে দ্রুত বৈশিষ্ট্যগুলি সরবরাহ করি।' : 
        '2-week sprints with continuous deployment, daily standups, and bi-weekly demos ensure we deliver features quickly while maintaining quality.'
    },
    { 
      icon: '📚', 
      title: isBengali ? 'কাস্টম কোড লাইব্রেরি' : 'Custom Code Library', 
      desc: isBengali ? 
        'দক্ষ উন্নয়নের জন্য পুনরায় ব্যবহারযোগ্য উপাদান' : 
        'Reusable components for efficient development',
      details: isBengali ? 
        '৫০০+ উপাদানের আমাদের মালিকানাধীন লাইব্রেরি উন্নয়নের সময় ৪০% কমিয়ে দেয় যখন সামঞ্জস্য এবং সেরা অনুশীলন নিশ্চিত করে।' : 
        'Our proprietary library of 500+ components reduces development time by 40% while ensuring consistency and best practices.'
    },
    { 
      icon: '💰', 
      title: isBengali ? 'সাশ্রয়ী মূল্য' : 'Affordable Pricing', 
      desc: isBengali ? 
        'প্রতিযোগিতামূলক মূল্যে প্রিমিয়াম মানের' : 
        'Premium quality at competitive rates',
      details: isBengali ? 
        'নমনীয় জড়িত মডেল (ঘন্টাভিত্তিক, প্রকল্প-ভিত্তিক, ধারক) স্বচ্ছ মূল্য এবং কোন গোপন খরচ নেই।' : 
        'Flexible engagement models (hourly, project-based, retainer) with transparent pricing and no hidden costs.'
    },
    { 
      icon: '👨‍💻', 
      title: isBengali ? 'অভিজ্ঞ দল' : 'Experienced Team', 
      desc: isBengali ? 
        'বিভিন্ন শিল্প জুড়ে বিশেষজ্ঞ' : 
        'Experts across multiple industries',
      details: isBengali ? 
        'স্বাস্থ্যসেবা, অর্থ, ই-কমার্স এবং শিক্ষা খাতে বিশেষজ্ঞদের সাথে আমাদের দলের গড় অভিজ্ঞতা ১০+ বছর।' : 
        '10+ years average experience across our team, with specialists in healthcare, finance, e-commerce, and education sectors.'
    },
    { 
      icon: '🔄', 
      title: isBengali ? 'এন্ড-টু-এন্ড সমাধান' : 'End-to-End Solutions', 
      desc: isBengali ? 
        'ধারণা থেকে স্থাপনা এবং তার পরেও' : 
        'From concept to deployment and beyond',
      details: isBengali ? 
        'আবিষ্কার, নকশা, উন্নয়ন, পরীক্ষা, স্থাপনা এবং রক্ষণাবেক্ষণ সহ সম্পূর্ণ পণ্য জীবনচক্র সমর্থন।' : 
        'Full product lifecycle support including discovery, design, development, testing, deployment, and maintenance.'
    },
    { 
      icon: '🖥️', 
      title: isBengali ? 'হোস্টিং বিকল্প' : 'Hosting Options', 
      desc: isBengali ? 
        'সব প্রয়োজন জন্য নমনীয় VPS সমাধান' : 
        'Flexible VPS solutions for all needs',
      details: isBengali ? 
        '৯৯.৯% আপটাইম সহ পরিচালিত হোস্টিং সমাধান, স্বয়ংক্রিয় ব্যাকআপ এবং ২৪/৭ মনিটরিং মাত্র $২৯/মাস থেকে শুরু।' : 
        'Managed hosting solutions with 99.9% uptime, automatic backups, and 24/7 monitoring starting at just $29/month.'
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

  return (
    <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
      {/* Language Toggle Button */}
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          background: isBengali ? 
            'linear-gradient(135deg, #2e7d32, #4caf50)' : 
            darkMode ? ' #2e7d32' : '#e8f5e9',
          color: isBengali ? 'white' : (darkMode ? '#ddd' : '#2e7d32'),
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        {isBengali ? (
          <>
            <span>English</span>
          </>
        ) : (
          <>
            <span>বাংলা</span>
          </>
        )}
      </motion.button>

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
            {isBengali ? 'আপনার অগ্রযাত্রার ডিজিটাল সঙ্গী' : 'Digital Solutions That Grow With You'}
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
            {isBengali ? (
              <>
                <span style={{ 
                  color: '#4caf50',
                  fontWeight: 600,
                }}>CycliciT</span> প্রযুক্তি খাতে আস্থার প্রতীক
              </>
            ) : (
              <>
                <span style={{ 
                  color: '#4caf50',
                  fontWeight: 600,
                }}>CycliciT</span> - Trusted by Real Institutions 
              </>
            )}
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
              {isBengali ? 
                (category === 'development' ? 'উন্নয়ন' : 'পরামর্শ') : 
                category.replace('-', ' ')}
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
            {isBengali ? 'আমাদের' : 'Our'} {activeTab === 'development' ? 
              (isBengali ? 'উন্নয়ন সেবা' : 'Development') : 
              (isBengali ? 'পরামর্শ সেবা' : 'Consulting')} {isBengali ? '' : 'Services'}
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
                onClick={() => toggleServiceExpand(index)}
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
                      {isBengali ? 'আমরা যা অফার করি:' : 'What We Offer:'}
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
                          {isBengali ? 'প্রযুক্তি:' : 'Technologies:'}
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
            {isBengali ? 'আমাদের কেন বেছে নেবেন' : 'Why Choose Us'}
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
            {isBengali ? 'আমাদের প্রতিযোগিতামূলক সুবিধা' : 'Our Competitive Advantages'}
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
                onClick={() => toggleBenefitExpand(index)}
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
                  minHeight: expandedBenefit === index ? '400px' : '220px',
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

                {expandedBenefit === index && (
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
                      {isBengali ? 'বিস্তারিত:' : 'Details:'}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      color: darkMode ? '#ddd' : '#555',
                      marginBottom: '1rem'
                    }}>
                      {benefit.details}
                    </p>
                  </motion.div>
                )}

                <motion.div
                  animate={{ rotate: expandedBenefit === index ? 180 : 0 }}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    color: '#4caf50',
                    fontSize: '1.2rem'
                  }}
                >
                  ▼
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
            {isBengali ? 'আপনার ব্যবসা রূপান্তর করতে প্রস্তুত?' : 'Ready to Transform Your Business?'}
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
            {isBengali ? 
              'আপনার একটি সম্পূর্ণ ডিজিটাল রূপান্তর বা নির্দিষ্ট প্রযুক্তিগত দক্ষতা প্রয়োজন হোক না কেন, আমাদের দল আপনার প্রয়োজন অনুযায়ী কাস্টম সমাধান দিয়ে আপনার লক্ষ্য অর্জনে আপনাকে সাহায্য করতে প্রস্তুত।' : 
              'Whether you need a complete digital transformation or specific technical expertise, our team is ready to help you achieve your goals with custom solutions tailored to your needs.'}
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
                  {isBengali ? 'টেক-ফান্ডিং অনুরোধ করুন' : 'Request Tech-Funding'}
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
                {isBengali ? 'আজই শুরু করুন' : 'Get Started Today'}
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