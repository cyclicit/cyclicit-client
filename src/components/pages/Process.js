import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Process = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const lightGreen = '#e8f5e9';
  const darkGreen = '#1b5e20';

  const [expandedStep, setExpandedStep] = useState(null);
  const [isBengali, setIsBengali] = useState(true);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleLanguage = () => {
    setIsBengali(!isBengali);
  };

  // English content
  const content = {
    header: {
      subtitle: "Our Development Process",
      title: "End-to-End Development Solutions",
    },
    features: [
      { 
        icon: "🧩", 
        title: "Modular Approach", 
        desc: "Scalable component architecture",
        details: "Our modular design allows for easy updates and feature additions without disrupting existing functionality."
      },
      { 
        icon: "📊", 
        title: "Transparent Process", 
        desc: "Weekly progress reports",
        details: "Regular updates with detailed reports, code demos, and milestone tracking keep you informed at every stage."
      },
      { 
        icon: "🔒", 
        title: "Security First", 
        desc: "Built-in security protocols",
        details: "From secure coding practices to regular vulnerability scans, we prioritize your data protection."
      },
      { 
        icon: "🔄", 
        title: "Iterative Feedback", 
        desc: "Continuous improvement cycles",
        details: "We incorporate your feedback at every stage to ensure the final product meets all expectations."
      }
    ],
    cta: {
      title: "Ready to Start Your Project?",
      description: "Our process is designed to deliver exceptional results while keeping you informed every step of the way. Let's discuss how we can bring your vision to life.",
      button: "Get Started"
    }
  };

  // Bengali content
  const bengaliContent = {
    header: {
      subtitle: "আমাদের উন্নয়ন প্রক্রিয়া",
      title: "এন্ড-টু-এন্ড ডেভেলপমেন্ট সমাধান",
    },
    features: [
      { 
        icon: "🧩", 
        title: "মডুলার পদ্ধতি", 
        desc: "স্কেলযোগ্য কম্পোনেন্ট আর্কিটেকচার",
        details: "আমাদের মডুলার ডিজাইন বিদ্যমান কার্যকারিতা বিঘ্নিত না করে সহজে আপডেট এবং ফিচার সংযোজন করতে দেয়।"
      },
      { 
        icon: "📊", 
        title: "স্বচ্ছ প্রক্রিয়া", 
        desc: "সাপ্তাহিক অগ্রগতি রিপোর্ট",
        details: "বিস্তারিত রিপোর্ট, কোড ডেমো এবং মাইলস্টোন ট্র্যাকিং সহ নিয়মিত আপডেট আপনাকে প্রতিটি পর্যায়ে অবহিত রাখে।"
      },
      { 
        icon: "🔒", 
        title: "সুরক্ষা প্রথম", 
        desc: "অন্তর্নির্মিত সুরক্ষা প্রোটোকল",
        details: "সুরক্ষিত কোডিং অনুশীলন থেকে নিয়মিত দুর্বলতা স্ক্যান পর্যন্ত, আমরা আপনার ডেটা সুরক্ষাকে অগ্রাধিকার দিই।"
      },
      { 
        icon: "🔄", 
        title: "পুনরাবৃত্তিমূলক প্রতিক্রিয়া", 
        desc: "ক্রমাগত উন্নয়ন চক্র",
        details: "চূড়ান্ত পণ্যটি সমস্ত প্রত্যাশা পূরণ করে তা নিশ্চিত করতে আমরা প্রতিটি পর্যায়ে আপনার প্রতিক্রিয়া অন্তর্ভুক্ত করি।"
      }
    ],
    cta: {
      title: "আপনার প্রকল্প শুরু করতে প্রস্তুত?",
      description: "আমাদের প্রক্রিয়াটি ব্যতিক্রমী ফলাফল প্রদানের জন্য ডিজাইন করা হয়েছে যখন আপনাকে প্রতিটি পদক্ষেপে অবহিত রাখা হয়। আসুন আলোচনা করি আমরা কিভাবে আপনার দৃষ্টিভঙ্গিকে বাস্তবে রূপ দিতে পারি।",
      button: "শুরু করুন"
    }
  };

  const currentContent = isBengali ? bengaliContent : content;

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      padding: '3rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      position: 'relative'
    }}>
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '0.5rem 1rem',
          background: darkMode ? '#2e7d32' : '#fff',
          color: darkMode ? '#fff' : '#2e7d32',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          zIndex: 100,
          
        }}
      >
        {isBengali ? 'English' : 'বাংলা'}
      </button>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '0.9rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.8rem'
          }}>{currentContent.header.subtitle}</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.3'
          }}>{currentContent.header.title}</h1>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {currentContent.features.map((feature, index) => (
            <div 
              key={index}
              style={{
                background: `linear-gradient(135deg, rgba(46, 125, 50, 0.08), rgba(76, 175, 80, 0.08))`,
                border: `1px solid ${darkMode ? '#2d2d2d' : '#e0e0e0'}`,
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 8px 24px rgba(76, 175, 80, 0.15)`,
                  borderColor: darkMode ? secondaryGreen : primaryGreen
                }
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 400}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, rgba(46, 125, 50, 0.2), rgba(76, 175, 80, 0.2))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 0.6rem 0'
              }}>{feature.title}</h4>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: '0 0 0.8rem 0',
                lineHeight: 1.5,
                fontSize: '0.95rem',
                fontWeight: 500
              }}>{feature.desc}</p>
              <p style={{
                color: darkMode ? '#aaaaaa' : '#777777',
                margin: 0,
                lineHeight: 1.6,
                fontSize: '0.85rem'
              }}>{feature.details}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '12px',
          background: darkMode 
            ? `linear-gradient(135deg, rgba(27, 94, 32, 0.2), rgba(46, 125, 50, 0.3))` 
            : `linear-gradient(135deg, rgba(232, 245, 233, 0.8), rgba(200, 230, 201, 0.9))`,
          border: `1px solid ${darkMode ? '#2d2d2d' : '#e0e0e0'}`,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: darkMode ? '#ffffff' : darkGreen,
            margin: '0 0 1rem 0'
          }}>{currentContent.cta.title}</h3>
          <p style={{
            color: darkMode ? '#cccccc' : '#666666',
            margin: '0 auto 1.5rem',
            lineHeight: 1.6,
            fontSize: '1rem',
            maxWidth: '600px'
          }}>
            {currentContent.cta.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 2.2rem',
                borderRadius: '50px',
                background: `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})`,
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(46, 125, 50, 0.4)'
                }
              }}
            >
              {currentContent.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;