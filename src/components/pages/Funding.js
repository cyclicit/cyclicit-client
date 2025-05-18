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
      padding: '4rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.2rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>Tech Funding</h2>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
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
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.2em' }}>💡</span> Got an Idea? 
            <span style={{ fontSize: '1.2em' }}>🚀</span> We've Got Resources
          </h1>
        </div>

        {/* Value Propositions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
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
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                color: secondaryGreen
              }}>{item.icon}</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 0.5rem 0'
              }}>{item.title}</h3>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: 0,
                lineHeight: 1.6
              }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: darkMode ? '#ffffff' : primaryGreen,
            marginBottom: '2rem'
          }}>How It Works</h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
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
                  flex: '1 1 200px',
                  maxWidth: '250px',
                  background: darkMode ? '#1e1e1e' : '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${darkGreen}, ${secondaryGreen})`,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  margin: '0 auto 1rem auto'
                }}>
                  {index + 1}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
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
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              background: `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})`,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
              ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(46, 125, 50, 0.4)',
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