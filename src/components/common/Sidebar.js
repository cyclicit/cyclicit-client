import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../finalcylick.svg'; // Adjust the path as necessary

const Sidebar = ({ menuOpen, darkMode, toggleDarkMode, setMenuOpen }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en'); // 'en' for English, 'bn' for Bengali

  const handleNavClick = () => {
    // Close the sidebar when a nav item is clicked (for mobile)
    if (window.innerWidth <= 992) {
      setMenuOpen(false);
    }
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    navigate('/');
    handleNavClick();
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  // Navigation items with translations
  const navItems = [
    { path: '/', label: { en: 'Home', bn: 'হোম' } },
    { path: '/services', label: { en: 'Services', bn: 'সেবা' } },
    { path: '/solutions', label: { en: 'Deals', bn: 'ডিলস' } },
     { path: '/buy', label: { en: 'Buy Site', bn: 'সাইট কিনুন' } },
   
    { path: '/funding', label: { en: 'Entrepreneur', bn: 'উদ্যোক্তা' } },
   
   
     { path: '/process', label: { en: 'E2E', bn: 'ই-টু-ই' } },
      { path: '/internship', label: { en: 'Internship', bn: 'ইন্টার্নশিপ' } },
    { path: '/contact', label: { en: 'Contact', bn: 'যোগাযোগ' } },
  ];

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`} style={{
      marginBottom: '3rem',
      background: darkMode 
        ? 'linear-gradient(to bottom, #1b3a1f, #2d5e31)' 
        : 'linear-gradient(to bottom, #e8f5e9, #c8e6c9)',
      transition: 'all 0.3s ease'
    }}>
      {/* Language Toggle */}
{/* Language Toggle */}
<div style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}}>
  <button 
    onClick={toggleLanguage}
    style={{
      padding: '0.3rem 0.6rem',
      borderRadius: '20px',
      border: 'none',
      background: darkMode ? '#2E7D32' : '#1B5E20', // Darker greens (AAA compliant)
      color: '#FFFFFF', // Pure white for max contrast
      cursor: 'pointer',
      fontSize: '0.8rem',
      fontWeight: '600', // Semi-bold for better legibility
      transition: 'background 0.2s ease' // Smooth hover effect (optional)
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? '#1B5E20' : '#2E7D32'} // Darken on hover
    onMouseLeave={(e) => e.currentTarget.style.background = darkMode ? '#2E7D32' : '#1B5E20'} // Revert
  >
    {language === 'en' ? 'বাংলা' : 'English'}
  </button>
</div>
      
      {/* Logo Container */}
      <div 
        style={{
          display: 'flex',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
        onClick={handleLogoClick}
      >
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          margin: 0,
          color: darkMode ? '#ffffff' : '#333333',
          display: 'flex',
          alignItems: 'center'
        }}>
          Cyclic<span style={{ color: '#4caf50' }}>-iT</span>
        </h1>
      </div>
      <div>
        <p style={{
          fontSize: '0.9rem',
          color: darkMode ? '#aaaaaa' : '#666666',
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          {language === 'en' 
            ? 'Where imagination meets execution' 
            : 'Where imagination meets execution'}
        </p>
      </div>
      
      
      
      {/* Theme Toggle */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          marginBottom: '1rem',
          padding: '0.5rem',
          borderRadius: '50px',
          background: darkMode ? '#1e1e1e' : '#f5f5f5',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onClick={toggleDarkMode}
      >
        <div style={{
          width: '50px',
          height: '26px',
          borderRadius: '50px',
          background: darkMode ? '#4caf50' : '#cccccc',
          position: 'relative',
          marginRight: '0.8rem',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            position: 'absolute',
            top: '3px',
            left: darkMode ? 'calc(100% - 23px)' : '3px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#ffffff',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}></div>
        </div>
        <span style={{
          fontSize: '0.9rem',
          fontWeight: 500,
          color: darkMode ? '#ffffff' : '#333333'
        }}>
          {darkMode 
            ? (language === 'en' ? 'Dark Mode' : 'ডার্ক মোড') 
            : (language === 'en' ? 'Light Mode' : 'লাইট মোড')}
        </span>
      </div>
      
      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flex: 1
      }}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: isActive 
                ? '#ffffff' 
                : darkMode ? '#cccccc' : '#666666',
              background: isActive 
                ? 'linear-gradient(90deg, #2e7d32, #4caf50)' 
                : 'transparent',
              fontWeight: isActive ? 600 : 500,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              ':hover': {
                background: isActive 
                  ? 'linear-gradient(90deg, #1b5e20, #388e3c)' 
                  : darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)'
              }
            })}
            onClick={handleNavClick}
          >
            {item.label[language]}
          </NavLink>
        ))}
      </div>

      



      {/* Social Media Links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        marginTop: '1rem'
      }}>
        <a 
          href="https://www.facebook.com/share/1AqqVT54Rv/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: darkMode ? '#ffffff' : '#333333',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? '#ffffff' : '#1877F2'}>
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
          <span>{language === 'en' ? 'Facebook' : 'ফেসবুক'}</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/cyclic-it-919083367/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: darkMode ? '#ffffff' : '#333333',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? '#ffffff' : '#0077B5'}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>{language === 'en' ? 'LinkedIn' : 'লিঙ্কডইন'}</span>
         
        </a>
      </div>
      

     


    </div>
  );
};

export default Sidebar;