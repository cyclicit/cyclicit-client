import React, { useState } from 'react';
import Sidebar from './common/Sidebar';
import Header from './common/Header';

const AppLayout = ({ children, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Mobile Header with Hamburger Menu */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      
      {/* Sidebar Navigation */}
      <Sidebar 
        menuOpen={menuOpen} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        setMenuOpen={setMenuOpen}  // Pass the setter function to Sidebar
      />
      
      {/* Main Content Area */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;