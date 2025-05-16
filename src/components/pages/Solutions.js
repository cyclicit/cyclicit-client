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
            color: darkMode ? '#81c784' : '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>Our Solutions</h2>
          
          <h1 >Tailored Packages for Every Need</h1>
        </div>

        {/* Deals Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {deals.map((deal, index) => (
            <div 
              key={index}
              style={{
                background: deal.color,
                borderRadius: '16px',
                padding: '2rem',
                color: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                ':hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
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
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  margin: 0
                }}>{deal.title}</h3>
                
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>{deal.tag}</span>
              </div>
              
              {/* Duration Circle */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1.5rem 0'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '3px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 700
                  }}>{deal.duration.split(' ')[0]}</span>
                  <small style={{
                    fontSize: '0.9rem',
                    opacity: 0.8
                  }}>{deal.duration.split(' ')[1]}</small>
                </div>
              </div>
              
              {/* Features List */}
              <div style={{ flex: 1 }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0'
                }}>
                  {deal.features.map((feature, i) => (
                    <li key={i} style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        marginRight: '0.5rem',
                        fontSize: '1.2rem'
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
                  padding: '0.8rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  marginBottom: '1.5rem',
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
                height: '6px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{ 
                    height: '100%',
                    width: `${100 - (index * 30)}%`,
                    background: 'white',
                    borderRadius: '3px'
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