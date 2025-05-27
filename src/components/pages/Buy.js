import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import farmer from "../../assets/Screenshot 2025-05-05 105451.png"

const Buy = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const websiteTemplates = [
    {
      id: 'ecommerce-pro',
      title: "E-Commerce Pro",
      category: "ecommerce",
      price: 2499,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Complete online store with product management, cart, and secure checkout",
      features: [
        "Product catalog",
        "Shopping cart",
        "Secure payments",
        "Inventory management",
        "Customer accounts"
      ],
      liveDemo: "https://themewagon.github.io/stylish/",
      rating: 4.8,
      sales: 142,
      color: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
    },
    {
      id: 'portfolio-premium',
      title: "Portfolio Premium",
      category: "portfolio",
      price: 1299,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Elegant portfolio to showcase your work with gallery and contact form",
      features: [
        "Responsive gallery",
        "Project showcase",
        "Blog section",
        "Contact form",
        "SEO optimized"
      ],
      liveDemo: "https://safinsyam.netlify.app/",
      rating: 4.6,
      sales: 87,
      color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    },
    {
      id: 'business-elite',
      title: "Business Elite",
      category: "business",
      price: 1899,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Professional corporate website with services, team, and testimonials",
      features: [
        "Service pages",
        "Team section",
        "Testimonials",
        "Pricing tables",
        "FAQ section"
      ],
      liveDemo: "https://fireflythemes.com/preview/?demo=elite-business-dark-free",
      rating: 4.7,
      sales: 112,
      color: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)"
    },
    {
      id: 'blog-standard',
      title: "Blog Standard",
      category: "blog",
      price: 899,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Modern blog template with article layouts and newsletter integration",
      features: [
        "Article layouts",
        "Categories",
        "Author profiles",
        "Newsletter signup",
        "Social sharing"
      ],
      liveDemo: "https://eris-templateify.blogspot.com/",
      rating: 4.5,
      sales: 156,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 'Farmermers-ecommerce',
      title: "Farmers E-Commerce",
      category: "Agriculture",
      price: 1599,
      image:    "https://i.ibb.co/xqZjj0CK/Screenshot-2025-05-05-105451.png",
      description: "Appetizing restaurant website with menu, reservations, and gallery",
      features: [
        "Menu display",
        "Online reservations",
        "Food gallery",
        "Location map",
        "Reviews section"
      ],
      liveDemo: "https://bengalharvestglobal.netlify.app/",
      rating: 4.9,
      sales: 78,
      color: "linear-gradient(135deg, #f46b45 0%, #eea849 100%)"
    },
    {
      id: 'landing-modern',
      title: "Landing Modern",
      category: "landing",
      price: 699,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "High-converting landing page for products or services",
      features: [
        "Lead capture form",
        "Feature highlights",
        "Testimonials",
        "Call-to-action",
        "Mobile optimized"
      ],
      liveDemo: "https://landing-demo.example.com",
      rating: 4.4,
      sales: 203,
      color: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'business', name: 'Business' },
    { id: 'blog', name: 'Blog' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'landing', name: 'Landing Page' }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? websiteTemplates 
    : websiteTemplates.filter(template => template.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f5f7fa',
      padding: '3rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      minHeight: '100vh'
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
          }}>Website Templates</h2>
          
          <h1 style={{
            fontSize: '1.8rem',
            margin: '0.5rem 0 1rem',
            lineHeight: '1.3'
          }}>Premium Templates for Every Business</h1>
          
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            Browse our collection of professionally designed templates. Each comes with full customization 
            options and dedicated support to make your website stand out.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '0.5rem 0',
          marginBottom: '2rem',
          scrollbarWidth: 'none', // For Firefox
          '::-webkit-scrollbar': {
            display: 'none' // For Chrome/Safari
          }
        }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            margin: '0 auto',
            padding: '0 0.5rem'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: selectedCategory === category.id 
                    ? (darkMode ? '#2e7d32' : '#4caf50') 
                    : (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'),
                  border: 'none',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '50px',
                  color: selectedCategory === category.id 
                    ? 'white' 
                    : (darkMode ? '#ddd' : '#555'),
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  fontSize: '0.85rem'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          {filteredTemplates.map((template) => (
            <div 
              key={template.id}
              style={{
                background: darkMode ? 'rgba(255,255,255,0.05)' : 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: expandedCard === template.id ? 'auto' : '100%',
                transform: expandedCard === template.id ? 'translateY(-10px)' : 'none',
                zIndex: expandedCard === template.id ? 10 : 1,
                cursor: 'pointer'
              }}
              onClick={() => toggleExpand(template.id)}
            >
              {/* Template Image */}
              <div style={{
                height: '180px',
                background: `url(${template.image}) center/cover no-repeat`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {categories.find(c => c.id === template.category)?.name}
                </div>
              </div>
              
              {/* Template Content */}
              <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    margin: 0,
                    color: darkMode ? 'white' : '#333'
                  }}>{template.title}</h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    <span style={{
                      color: darkMode ? '#81c784' : '#2e7d32',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}>${template.price}</span>
                  </div>
                </div>
                
                {/* Rating and Sales */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.8rem',
                  fontSize: '0.85rem',
                  color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
                }}>
                  <span style={{
                    color: '#ffc107',
                    marginRight: '0.3rem'
                  }}>★</span>
                  <span style={{ marginRight: '0.8rem' }}>{template.rating}</span>
                  <span>{template.sales} sales</span>
                </div>
                
                {/* Description (shown when expanded) */}
                {expandedCard === template.id && (
                  <p style={{
                    fontSize: '0.9rem',
                    margin: '0 0 1rem 0',
                    color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                    lineHeight: '1.5'
                  }}>
                    {template.description}
                  </p>
                )}
                
                {/* Features List */}
                <div style={{ margin: '0.5rem 0', flex: 1 }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.85rem'
                  }}>
                    {template.features.slice(0, expandedCard === template.id ? template.features.length : 3).map((feature, i) => (
                      <li 
                        key={i} 
                        style={{
                          padding: '0.3rem 0',
                          display: 'flex',
                          alignItems: 'center',
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                        }}
                      >
                        <span style={{
                          marginRight: '0.4rem',
                          fontSize: '0.9rem',
                          color: darkMode ? '#81c784' : '#2e7d32'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.8rem',
                  marginTop: '1rem'
                }}>
                  <a
                    href={template.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: 'transparent',
                      color: darkMode ? '#81c784' : '#2e7d32',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${darkMode ? '#81c784' : '#2e7d32'}`,
                      ':hover': {
                        background: darkMode ? 'rgba(129, 199, 132, 0.1)' : 'rgba(46, 125, 50, 0.1)'
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                  
                  <Link 
                    to={`/checkout/${template.id}`}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: darkMode ? '#2e7d32' : '#4caf50',
                      color: 'white',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        background: darkMode ? '#1b5e20' : '#388e3c',
                        transform: 'translateY(-2px)'
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Site                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem 1rem',
          background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
          borderRadius: '12px'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: darkMode ? 'white' : '#333'
          }}>
            Need a Custom Website Solution?
          </h3>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            opacity: 0.8,
            color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
          }}>
            Our team can create a completely custom website tailored to your specific business needs.
          </p>
          <Link 
            to="/contact" 
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
            Request Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buy;