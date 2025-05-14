import React from 'react';

const Header = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="mobile-menu-button" onClick={toggleMenu}>
      <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
      <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
      <div className={`menu-line ${menuOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default Header;