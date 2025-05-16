import React from 'react';
import { Link } from 'react-router-dom';

const Internship = ({ darkMode }) => {
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
          }}>Internship Program</h2>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Launch Your Tech Career with Us</h1>
        </div>

        {/* Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Contact Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}
            data-aos="fade-right"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 1rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>📞 Contact</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: '0 0 1.5rem 0',
              fontSize: '1.1rem'
            }}>+8801577148188</p>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 1.5rem',
                borderRadius: '6px',
                background: lightGreen,
                color: primaryGreen,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: '#c8e6c9'
                }
              }}
            >
              cyclicit@gmail.com
            </Link>
          </div>
          
          {/* Learning Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}
            data-aos="fade-up"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 1rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>🎓 Learning</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                "Hands-on project experience",
                "Skill development programs",
                "Collaborative environment"
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.5rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: secondaryGreen }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Growth Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}
            data-aos="fade-left"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 1rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>🚀 Growth</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                "Production best practices",
                "Performance optimization",
                "Team growth strategies"
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.5rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: secondaryGreen }}>✓</span> {item}
                </li>
              ))}
            </ul>
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
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internship;