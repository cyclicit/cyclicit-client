import React from 'react';
import { Link } from 'react-router-dom';

const Process = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const lightGreen = '#e8f5e9';
  const darkGreen = '#1b5e20';

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
          }}>Our Process</h2>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>End-to-End Development Solutions</h1>
        </div>

        {/* Process Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {[
            { number: 1, title: "Discovery", desc: "Requirement analysis and planning" },
            { number: 2, title: "Design", desc: "UI/UX and architecture design" },
            { number: 3, title: "Development", desc: "Agile development sprints" },
            { number: 4, title: "Deployment", desc: "Launch and maintenance" }
          ].map((step, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                padding: '1.5rem',
                borderRadius: '12px',
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
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
                flexShrink: 0
              }}>
                {step.number}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: darkMode ? '#ffffff' : primaryGreen,
                  margin: '0 0 0.5rem 0'
                }}>{step.title}</h3>
                <p style={{
                  color: darkMode ? '#cccccc' : '#666666',
                  margin: 0,
                  lineHeight: 1.6
                }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {[
            { icon: "🧩", title: "Modular Approach", desc: "Scalable component architecture" },
            { icon: "📊", title: "Transparency", desc: "Weekly progress reports" },
            { icon: "🔒", title: "Security First", desc: "Built-in security protocols" }
          ].map((feature, index) => (
            <div 
              key={index}
              style={{
                background: `linear-gradient(135deg, rgba(46, 125, 50, 0.1), rgba(76, 175, 80, 0.1))`,
                border: `1px solid ${darkMode ? '#2d2d2d' : '#e0e0e0'}`,
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 400}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>{feature.icon}</div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: darkMode ? '#ffffff' : primaryGreen,
                margin: '0 0 0.5rem 0'
              }}>{feature.title}</h4>
              <p style={{
                color: darkMode ? '#cccccc' : '#666666',
                margin: 0,
                lineHeight: 1.6
              }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-block',
              padding: '0.8rem 2.5rem',
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
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Process;