import React, { useState, useEffect, useRef } from 'react';
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

function MouseEffects() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: -100, y: -100 }); // Start off-screen
  const animationFrameId = useRef(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Check if it's a touch device
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      createParticles(e.clientX, e.clientY);
    };

    // For touch devices, only create effects on touch start, not during movement
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      mousePos.current = { x: touch.clientX, y: touch.clientY };
      createParticles(touch.clientX, touch.clientY);
    };

    // Create particles at position
    const createParticles = (x, y) => {
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x,
          y,
          size: Math.random() * 5 + 2,
          color: `rgba(0, 255, 100, ${Math.random() * 0.5 + 0.3})`,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          life: 100
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only show glow if not on touch device or if recently touched
      if (!isTouchDevice.current || particles.current.length > 0) {
        const gradient = ctx.createRadialGradient(
          mousePos.current.x, mousePos.current.y, 0,
          mousePos.current.x, mousePos.current.y, 50
        );
        gradient.addColorStop(0, 'rgba(0, 255, 100, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 100, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.life / 100), 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      // Reset mouse position if it's a touch device (to hide the glow while scrolling)
      if (isTouchDevice.current && particles.current.length === 0) {
        mousePos.current = { x: -100, y: -100 };
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
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
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="App">
        {/* Add the MouseEffects component */}
        <MouseEffects />
        
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