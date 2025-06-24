import React, { useState, useEffect } from 'react';
import Sidebar from './common/Sidebar';
import Header from './common/Header';

const AppLayout = ({ children, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close menu when switching from mobile to desktop
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (isMobile && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`} style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      
      position: 'relative',
      width: '100vw'
    }}>
      {/* Mobile Header with Hamburger Menu */}
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        isMobile={isMobile} 
        darkMode={darkMode}
      />
      
      <div style={{
        display: 'flex',
        flex: 1,
        position: 'relative',
        width: '100%'
      }}>
        {/* Sidebar Navigation */}
       <div className='sidebar-container' 
      //  style={{
         
      //     width: menuOpen && isMobile ? '50px' : '0',
      //     height: '100vh',
      //     overflowX: 'hidden',
      //     transition: 'width 0.3s ease',
      //     zIndex: 1000,
      //     backgroundColor: darkMode ? '#121212' : '#f8f9fa'
      //     }}
          >
         <Sidebar 
          menuOpen={menuOpen} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          setMenuOpen={setMenuOpen}
          isMobile={isMobile}
        />
       </div>
        
        {/* Main Content Area */}
<div 
  className="main-content" 
  onClick={closeMenu}
  style={{
    flex: 1,
    
    
    width: '100%',
   height: isMobile ? 'calc(100vh - 64px)' : '100vh',
    position: 'relative',
    transition: 'margin-left 0.3s ease',
    marginLeft: menuOpen && isMobile ? '250px' : '0',
    
    boxSizing: 'border-box',
    // Add these to ensure proper containment
    display: 'flex',
    flexDirection: 'column'
  }}
>
  <div style={{
    width: '100%',
    maxWidth: '100%',
    
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }}>
    {children}
  </div>
</div>
      </div>
    </div>
  );
};

export default AppLayout;