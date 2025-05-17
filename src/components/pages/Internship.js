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
      padding: '2rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '0.9rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>Internship Program</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.3'
          }}>Launch Your Tech Career with Us</h1>
        </div>

        {/* Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Contact Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            data-aos="fade-right"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>📞 Contact</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: '0 0 1rem 0',
              fontSize: '1rem'
            }}>+8801577148188</p>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                background: lightGreen,
                color: primaryGreen,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              cyclicit@gmail.com
            </Link>
          </div>
          
          {/* Learning Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            data-aos="fade-up"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
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
                  padding: '0.4rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
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
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            data-aos="fade-left"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
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
                  padding: '0.4rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
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
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              background: `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})`,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)'
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