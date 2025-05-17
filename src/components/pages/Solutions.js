import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = ({ darkMode }) => {
  const deals = [
    {
      title: "🚀 Prime Deal",
      tag: "Limited",
      duration: "21 Days",
      price: "$$$",
      features: ["Responsive design", "SEO optimized", "1 year free hosting", "Priority support", "Custom analytics"],
      color: "linear-gradient(135deg, #2e7d32, #4caf50)",
      buttonText: "Claim Deal"
    },
    {
      title: "🌱 Genuine Deal",
      tag: "Standard",
      duration: "50 Days",
      price: "$$",
      features: ["Mobile-friendly", "Basic SEO", "6 months hosting", "Email support", "Performance reports"],
      color: "linear-gradient(135deg, #388e3c, #66bb6a)",
      buttonText: "Get Started"
    },
    {
      title: "✨ Ready Deal",
      tag: "Instant",
      duration: "7 Days",
      price: "$",
      features: ["Pre-designed", "Quick setup", "3 months hosting", "Documentation", "Community support"],
      color: "linear-gradient(135deg, #1b5e20, #43a047)",
      buttonText: "Browse Templates"
    }
  ];

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f5f7fa',
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
            color: darkMode ? '#81c784' : '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>Our Solutions</h2>
          
          <h1 style={{
            fontSize: '1.5rem',
            margin: '0.5rem 0',
            lineHeight: '1.3'
          }}>Tailored Packages for Every Need</h1>
        </div>

        {/* Deals Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          {deals.map((deal, index) => (
            <div 
              key={index}
              style={{
                background: deal.color,
                borderRadius: '12px',
                padding: '1.5rem',
                color: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
              data-aos="flip-up"
              data-aos-delay={index * 200}
            >
              {/* Deal Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  margin: 0
                }}>{deal.title}</h3>
                
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600
                }}>{deal.tag}</span>
              </div>
              
              {/* Duration Circle */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 700
                  }}>{deal.duration.split(' ')[0]}</span>
                  <small style={{
                    fontSize: '0.8rem',
                    opacity: 0.8
                  }}>{deal.duration.split(' ')[1]}</small>
                </div>
              </div>
              
              {/* Features List */}
              <div style={{ flex: 1 }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  {deal.features.map((feature, i) => (
                    <li key={i} style={{
                      padding: '0.4rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        marginRight: '0.4rem',
                        fontSize: '1rem'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Button */}
              <Link 
                to="/contact" 
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'white',
                  color: '#2e7d32',
                  padding: '0.6rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  marginBottom: '1rem',
                  ':hover': {
                    background: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {deal.buttonText}
              </Link>
              
              {/* Popularity Bar */}
              <div style={{
                height: '4px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{ 
                    height: '100%',
                    width: `${100 - (index * 30)}%`,
                    background: 'white',
                    borderRadius: '2px'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;