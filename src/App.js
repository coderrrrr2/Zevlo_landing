import React, { useState } from 'react';
import './App.css';
import ZevloLogo from './zevlo_logo.png';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder file for download (replace with actual file path)
const downloadFile = '/zevlo_app.apk'; // Ensure file is in the public folder

export default function ZevloLogisticsLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle file download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadFile;
    link.download = 'Zevlo_Logistics.apk'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="shuttle-landing">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <motion.span
              className="logo-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img src={ZevloLogo} alt="App Logo" style={{ width: '50px', height: '50px' }} />
            </motion.span>
            <span className="logo-text">
              Zevlo<span className="highlight">Logistics</span>
            </span>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="nav desktop">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <motion.a
            href="#download"
            className="download-button"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download App
          </motion.a>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
                <li><a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a></li>
                <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                <li><a href="#download" onClick={handleDownload}>Download App</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Your Campus Commute, <span className="highlight">Simplified</span>
            </h1>
            <p className="hero-description">
              Zevlo Logistics provides safe, reliable, and convenient transportation within and around your campus. Book rides, track shuttles in real-time, and pay digitally—all from your smartphone.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="#download"
                className="btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              Key <span className="highlight">Features</span>
            </h2>
            <p>Experience seamless campus transportation with our innovative app features designed specifically for students and staff.</p>
          </motion.div>

          <div className="features-grid">
            {[
              {
                icon: '📍',
                title: 'Campus-wide Coverage',
                description: 'Book rides anywhere on campus and to nearby locations with just a few taps.',
              },
              {
                icon: '🔍',
                title: 'Real-time Tracking',
                description: 'Know exactly where your shuttle is and when it will arrive with live GPS tracking.',
              },
              {
                icon: '💳',
                title: 'Digital Wallet',
                description: 'Pay for your rides easily using a variety of payment methods. Top up your wallet and pay instantly with secure, cashless transactions through the app.',
              },
              {
                icon: '🗓️',
                title: 'Book on the go',
                description: 'Plan your campus commute effortlessly by booking rides on the go—no hassle, just tap and ride.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="steps-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              How It <span className="highlight">Works</span>
            </h2>
            <p>Follow these simple steps to get started with Zevlo Logistics.</p>
          </motion.div>
          <div className="steps-grid">
            {[
              {
                number: 1,
                title: 'Download the App',
                description: 'Get Zevlo Logistics from the App Store or Google Play Store.',
              },
              {
                number: 2,
                title: 'Create an Account',
                description: 'Sign up with your student email for exclusive access.',
              },
              {
                number: 3,
                title: 'Book Your Ride',
                description: 'Select your pickup and drop-off locations.',
              },
              {
                number: 4,
                title: 'Enjoy the Journey',
                description: 'Stay updated in real-time and ride with ease—your shuttle, your schedule',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="step"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo">
                <motion.span
                  className="logo-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={ZevloLogo} alt="App Logo" style={{ width: '50px', height: '50px' }} />
                </motion.span>
                <span className="logo-text">
                  Zevlo<span className="highlight">Logistics</span>
                </span>
              </div>
              <p>Your reliable campus shuttle solution.</p>
            </div>
            <div>
              <h4>Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#download" onClick={handleDownload}>Download App</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p>Email: zevlo.bussiness@gmail.com</p>
            </div>
          </div>
          <p className="footer-copy">© 2025 Zevlo Logistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}