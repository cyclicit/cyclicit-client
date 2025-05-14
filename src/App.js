import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppLayout from './components/AppLayout';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Solutions from './components/pages/Solutions';
import Process from './components/pages/Process';
import Funding from './components/pages/Funding';
import Internship from './components/pages/Internship';
import Contact from './components/pages/Contact';


import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
    
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/solutions" element={<Solutions darkMode={darkMode} />} />
          <Route path="/process" element={<Process darkMode={darkMode} />} />
          <Route path="/funding" element={<Funding darkMode={darkMode} />} />
          <Route path="/internship" element={<Internship darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;