import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Solutions = ({ darkMode }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const deals = [
    {
      id: 'prime',
      title: "🚀 Prime Deal",
      tag: "Limited",
      duration: "21 Days",
      price: "$$$",
      priceValue: 2999,
      features: [
        { name: "Responsive design", description: "Fully responsive across all devices with mobile-first approach" },
        { name: "SEO optimized", description: "Advanced SEO techniques including schema markup and performance optimization" },
        { name: "1 year free hosting", description: "Premium hosting with 99.9% uptime guarantee and CDN" },
        { name: "Priority support", description: "24/7 dedicated support with 1-hour response time" },
        { name: "Custom analytics", description: "Advanced analytics dashboard with custom KPIs" }
      ],
      color: "linear-gradient(135deg, #2e7d32, #4caf50)",
      buttonText: "Claim Deal",
      bestFor: "Businesses needing premium features and support",
      projectsCompleted: 142,
      clientSatisfaction: "98%"
    },
    {
      id: 'genuine',
      title: "🌱 Genuine Deal",
      tag: "Standard",
      duration: "50 Days",
      price: "$$",
      priceValue: 1499,
      features: [
        { name: "Mobile-friendly", description: "Responsive design that works well on mobile devices" },
        { name: "Basic SEO", description: "Standard SEO setup including meta tags and sitemap" },
        { name: "6 months hosting", description: "Shared hosting with regular backups" },
        { name: "Email support", description: "Business-day email support with 24-hour response" },
        { name: "Performance reports", description: "Monthly performance reports with basic metrics" }
      ],
      color: "linear-gradient(135deg, #388e3c, #66bb6a)",
      buttonText: "Get Started",
      bestFor: "Small businesses and startups",
      projectsCompleted: 287,
      clientSatisfaction: "95%"
    },
    {
      id: 'ready',
      title: "✨ Ready Deal",
      tag: "Instant",
      duration: "7 Days",
      price: "$",
      priceValue: 499,
      features: [
        { name: "Pre-designed", description: "Choose from our library of professional templates" },
        { name: "Quick setup", description: "Get your site live in just a few days" },
        { name: "3 months hosting", description: "Basic shared hosting with limited resources" },
        { name: "Documentation", description: "Comprehensive guides and tutorials" },
        { name: "Community support", description: "Access to our community forums" }
      ],
      color: "linear-gradient(135deg, #1b5e20, #43a047)",
      buttonText: "Browse Templates",
      bestFor: "Individuals and side projects",
      projectsCompleted: 512,
      clientSatisfaction: "89%"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const allFeatures = [...new Set(deals.flatMap(deal => deal.features.map(f => f.name)))];
  
  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f5f7fa',
      padding: '3rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '0.9rem',
            color: darkMode ? '#81c784' : '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>Our Solutions</h2>
          
          <h1 style={{
            fontSize: '1.8rem',
            margin: '0.5rem 0 1rem',
            lineHeight: '1.3'
          }}>Tailored Packages for Every Need</h1>
          
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            Choose the perfect package for your project. All plans include free consultations, 
            quality assurance, and our satisfaction guarantee.
          </p>
        </div>

        {/* Feature Comparison Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            borderRadius: '50px',
            padding: '0.3rem',
            display: 'inline-flex'
          }}>
            <button 
              onClick={() => setSelectedFeature(null)}
              style={{
                background: !selectedFeature ? (darkMode ? '#2e7d32' : '#4caf50') : 'transparent',
                border: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '50px',
                color: !selectedFeature ? 'white' : (darkMode ? '#ddd' : '#555'),
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Package Overview
            </button>
            <button 
              onClick={() => setSelectedFeature('compare')}
              style={{
                background: selectedFeature === 'compare' ? (darkMode ? '#2e7d32' : '#4caf50') : 'transparent',
                border: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '50px',
                color: selectedFeature === 'compare' ? 'white' : (darkMode ? '#ddd' : '#555'),
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              Compare Features
            </button>
          </div>
        </div>

        {selectedFeature === 'compare' ? (
  // Feature Comparison View - UPDATED VERSION
  <div style={{
    background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '2rem'
  }}>
    <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Detailed Feature Comparison</h3>
    
    {/* Comparison Highlights */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    }}>
      {deals.map(deal => (
        <div key={deal.id} style={{
          background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.03)',
          borderRadius: '8px',
          padding: '1rem',
          borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
        }}>
          <h4 style={{ 
            marginTop: 0,
            color: darkMode ? '#81c784' : '#2e7d32',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '0.5rem' }}>{deal.title.split(' ')[0]}</span>
            {deal.title.split(' ').slice(1).join(' ')}
          </h4>
          <p style={{ 
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
            opacity: 0.9
          }}>
            <strong>Best for:</strong> {deal.bestFor}
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            marginBottom: '0.5rem'
          }}>
            <span>Price: {deal.price}</span>
            <span>Delivery: {deal.duration}</span>
          </div>
          <div style={{ fontSize: '0.85rem' }}>
            <span>Satisfaction: {deal.clientSatisfaction}</span>
          </div>
        </div>
      ))}
    </div>

    
    
    {/* Comparison Summary */}
    <div style={{
      marginTop: '2rem',
      padding: '1rem',
      background: darkMode ? 'rgba(46, 125, 50, 0.1)' : 'rgba(76, 175, 80, 0.1)',
      borderRadius: '8px',
      borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
    }}>
      <h4 style={{ 
        marginTop: 0,
        color: darkMode ? '#81c784' : '#2e7d32'
      }}>
        How to choose?
      </h4>
      <ul style={{
        paddingLeft: '1.2rem',
        marginBottom: 0
      }}>
        <li><strong>Prime Deal</strong>: Best for businesses needing premium features and support</li>
        <li><strong>Genuine Deal</strong>: Ideal for small businesses and startups</li>
        <li><strong>Ready Deal</strong>: Perfect for individuals and side projects</li>
      </ul>
    </div>
  </div>
)  : (
          // Regular Package View
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {deals.map((deal, index) => (
              <div 
                key={deal.id}
                style={{
                  background: deal.color,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  color: 'white',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: expandedCard === deal.id ? 'auto' : '100%',
                  transform: expandedCard === deal.id ? 'translateY(-10px)' : 'none',
                  zIndex: expandedCard === deal.id ? 10 : 1,
                  cursor: 'pointer'
                }}
                onClick={() => toggleExpand(deal.id)}
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
                  
                  <div>
                    <span style={{
                      background: 'rgba(255,255,255,0.2)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      marginRight: '0.5rem'
                    }}>{deal.tag}</span>
                    <span style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}>{deal.price}</span>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {expandedCard === deal.id && (
                  <div style={{
                    marginBottom: '1rem',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <p style={{ 
                      fontSize: '0.9rem',
                      marginTop: 0,
                      opacity: 0.9
                    }}>
                      <strong>Best for:</strong> {deal.bestFor}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      opacity: 0.8,
                      margin: '0.5rem 0'
                    }}>
                      <span>Projects completed: {deal.projectsCompleted}</span>
                      <span>Satisfaction: {deal.clientSatisfaction}</span>
                    </div>
                  </div>
                )}
                
                {/* Duration Circle */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(0,0,0,0.1)'
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
                  {expandedCard === deal.id && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      background: 'rgba(0,0,0,0.3)',
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.7rem'
                    }}>
                      Estimated delivery
                    </div>
                  )}
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
                      <li 
                        key={i} 
                        style={{
                          padding: '0.4rem 0',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        data-tooltip-id={`tooltip-${deal.id}-${i}`}
                        data-tooltip-content={feature.description}
                      >
                        <span style={{
                          marginRight: '0.4rem',
                          fontSize: '1rem'
                        }}>✓</span>
                        {feature.name}
                        <Tooltip id={`tooltip-${deal.id}-${i}`} />
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Button */}
                <Link 
                  to="/buy" 
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'white',
                    color: '#2e7d32',
                    padding: '0.8rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    marginBottom: '1rem',
                    ':hover': {
                      background: 'rgba(255,255,255,0.9)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {deal.buttonText}
                </Link>
                
                {/* Popularity Bar */}
                <div style={{
                  height: '4px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div 
                    style={{ 
                      height: '100%',
                      width: `${100 - (index * 30)}%`,
                      background: 'white',
                      borderRadius: '2px',
                      transition: 'width 0.5s ease'
                    }}
                  ></div>
                  {expandedCard === deal.id && (
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      top: '-20px',
                      fontSize: '0.7rem',
                      opacity: 0.8
                    }}>
                      {Math.round(100 - (index * 30))}% of clients choose this
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Info Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>Not sure which package is right for you?</h3>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            opacity: 0.8
          }}>
            Our experts can help you choose the perfect solution based on your 
            budget, timeline, and specific requirements.
          </p>
          <Link 
            to="/buy" 
            style={{
              display: 'inline-block',
              background: darkMode ? '#2e7d32' : '#4caf50',
              color: 'white',
              padding: '0.8rem 1.8rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              ':hover': {
                background: darkMode ? '#1b5e20' : '#388e3c',
                transform: 'translateY(-2px)',
                boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
              }
            }}
          >
            Get Personalized Recommendation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;