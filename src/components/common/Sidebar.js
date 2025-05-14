import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ menuOpen, darkMode, toggleDarkMode, setMenuOpen }) => {
  const handleNavClick = () => {
    // Close the sidebar when a nav item is clicked (for mobile)
    if (window.innerWidth <= 992) { // Match your mobile breakpoint
      setMenuOpen(false);
    }
  };

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <h1 className="logo">Cyclici<span>T</span></h1>
        <p className="motto">where imagination meets execution</p>
      </div>
      
      <div className="theme-toggle" onClick={toggleDarkMode}>
        <div className={`toggle-switch ${darkMode ? 'dark' : ''}`}>
          <div className="toggle-knob"></div>
        </div>
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
      
      <div className="nav-buttons">
        {[
          { path: '/', label: 'Home' },
          { path: '/services', label: 'Services' },
          { path: '/solutions', label: 'Solutions' },
          { path: '/process', label: 'Process' },
          { path: '/funding', label: 'Funding' },
          { path: '/internship', label: 'Internship' },
          { path: '/contact', label: 'Contact' }
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `nav-button ${isActive ? 'active' : ''}`
            }
            onClick={handleNavClick} // Add click handler here
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;