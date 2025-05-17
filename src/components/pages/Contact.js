import React from 'react';

const Contact = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mblodkej', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

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
          }}>Contact Us</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.3'
          }}>Let's Build Something Amazing Together</h1>
        </div>

        {/* Contact Methods */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: darkMode ? '#1e1e1e' : '#ffffff',
            padding: '1.5rem',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }} data-aos="fade-right">
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.8rem',
              color: secondaryGreen
            }}>📧</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: darkMode ? '#ffffff' : primaryGreen,
              margin: '0 0 0.5rem 0'
            }}>Email</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: 0,
              wordBreak: 'break-word',
              fontSize: '0.9rem'
            }}>cyclicit@gmail.com</p>
          </div>
          
          <div style={{
            background: darkMode ? '#1e1e1e' : '#ffffff',
            padding: '1.5rem',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }} data-aos="fade-left">
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.8rem',
              color: secondaryGreen
            }}>📱</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: darkMode ? '#ffffff' : primaryGreen,
              margin: '0 0 0.5rem 0'
            }}>Phone</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: 0,
              fontSize: '0.9rem'
            }}>+8801577148188</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: darkMode ? '#1e1e1e' : '#ffffff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }} data-aos="zoom-in">
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
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
              <label htmlFor="name" style={{
                position: 'absolute',
                top: '0.8rem',
                left: 0,
                color: darkMode ? '#999' : '#666',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                fontSize: '0.9rem'
              }}>Full Name</label>
            </div>
            
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
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
              <label htmlFor="email" style={{
                position: 'absolute',
                top: '0.8rem',
                left: 0,
                color: darkMode ? '#999' : '#666',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                fontSize: '0.9rem'
              }}>Email Address</label>
            </div>
            
            <div style={{ position: 'relative' }}>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows="4"
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
              <label htmlFor="message" style={{
                position: 'absolute',
                top: '0.8rem',
                left: 0,
                color: darkMode ? '#999' : '#666',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                fontSize: '0.9rem'
              }}>Your Message</label>
            </div>
            
            <button type="submit" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.5rem',
              borderRadius: '50px',
              background: `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})`,
              color: 'white',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '0.5rem',
              ':hover': {
                background: `linear-gradient(90deg, ${primaryGreen}, ${secondaryGreen})`,
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 12px rgba(46, 125, 50, 0.3)'
              }
            }}>
              <span>Send Message</span>
              <div style={{
                width: '18px',
                height: '18px',
                position: 'relative',
                transition: 'transform 0.3s ease'
              }}>
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
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;