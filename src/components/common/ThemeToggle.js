import React from 'react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle" onClick={toggleDarkMode}>
      <div className={`toggle-switch ${darkMode ? 'dark' : ''}`}>
        <div className="toggle-knob"></div>
      </div>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;