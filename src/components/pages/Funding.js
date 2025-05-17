import React from 'react';
import { Link } from 'react-router-dom';

const Funding = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      padding: '2rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>Tech Funding</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <span style={{ fontSize: '1em' }}>💡</span> Got an Idea? 
            <span style={{ fontSize: '1em' }}>🚀</span> We've Got Resources
          </h1>
        </div>

        {/* Value Propositions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {[
            { icon: "🔍", title: "Idea Evaluation", desc: "Expert feedback on your concept" },
            { icon: "🛠️", title: "Development", desc: "Technical resources to build" },
            { icon: "📊", title: "Strategy", desc: "Custom growth roadmap" }
          ].map((item, index) => (
            <div 
              key={index}
              style={{
                background: darkMode ? '#1e1e1e' : '#ffffff',
                padding: '1.5rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-3px)'
                }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem',
                color: secondaryGreen
              }}>{item.icon}</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 0.5rem 0'
              }}>{item.title}</h3>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: 0,
                lineHeight: 1.5,
                fontSize: '0.9rem'
              }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            color: darkMode ? '#ffffff' : primaryGreen,
            marginBottom: '1.5rem'
          }}>How It Works</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {[
              "Submit Your Idea",
              "Evaluation Phase",
              "Development Support",
              "Launch & Growth"
            ].map((step, index) => (
              <div 
                key={index}
                style={{
                  background: darkMode ? '#1e1e1e' : '#ffffff',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-3px)'
                  }
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${darkGreen}, ${secondaryGreen})`,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  margin: '0 auto 0.8rem auto'
                }}>
                  {index + 1}
                </div>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: darkMode ? '#ffffff' : '#333333',
                  margin: 0
                }}>{step}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              background: `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})`,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 10px rgba(46, 125, 50, 0.3)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 15px rgba(46, 125, 50, 0.4)',
                background: `linear-gradient(90deg, ${primaryGreen}, ${secondaryGreen})`
              }
            }}
          >
            Apply for Funding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funding;