import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Set darkMode to true by default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
    
    // Override system preference and always start with dark mode
    // (commented out the system preference check)
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   setDarkMode(true);
    // }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    // Optionally store the preference in localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="App">
        <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/solutions" element={<Solutions darkMode={darkMode} />} />
            <Route path="/process" element={<Process darkMode={darkMode} />} />
            <Route path="/funding" element={<Funding darkMode={darkMode} />} />
            <Route path="/internship" element={<Internship darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />

            {/* Redirect to home if route doesn't exist */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;