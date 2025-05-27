import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../finalcylick.svg'; // Adjust the path as necessary

const Sidebar = ({ menuOpen, darkMode, toggleDarkMode, setMenuOpen }) => {
  const navigate = useNavigate();

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

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      {/* Logo Container */}
      <div 
        style={{
          marginBottom: '2rem',
          cursor: 'pointer'
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
          Cyclic<span style={{ color: '#4caf50' }}>iT</span>
        </h1>
        <p style={{
          fontSize: '0.9rem',
          color: darkMode ? '#aaaaaa' : '#666666',
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
        Where  <span style={{ color: '#4caf50' }}>imagination</span> meets <span style={{ color: '#4caf50' }}>execution </span>
        </p>
      </div>
      
      {/* Theme Toggle */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem',
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
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
      
      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flex: 1
      }}>
        {[
          { path: '/', label: 'Home' },
          { path: '/services', label: 'Services' },
          { path: '/solutions', label: 'Deals' },
          { path: '/process', label: 'E2E' },
          { path: '/funding', label: 'Funding' },
          { path: '/internship', label: 'Internship' },
          {path: '/buy', label: 'Buy Site' },
          { path: '/contact', label: 'Contact' }
          
        ].map((item, index) => (
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
                  : darkMode ? '#1e1e1e' : '#f5f5f5'
              }
            })}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;