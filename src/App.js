import React, { useState } from 'react';
import './App.css';
import { ReactComponent as GooglePlayIcon } from './google_play_badge.svg';
import ZevloLogo from './zevlo_logo.png';




export default function ZevloLogisticsLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="shuttle-landing">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">
              <img src={ZevloLogo} alt="App Logo" style={{ width: '50px', height: '50px' }} />
            </span>

            <span className="logo-text">Zevlo<span className="highlight">Logistics</span></span>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="nav desktop">
            <ul>
              <li><a href="#home">Home</a></li>
              {/* <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li> */}
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <a href="#download" className="download-button">Download App</a>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav">
            <ul>
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
              <li><a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a></li>
              <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              <li><a href="#download">Download App</a></li>
            </ul>
          </div>
        )}
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Campus Commute, <span className="highlight">Simplified</span></h1>
            <p className="hero-description">Zevlo Logistics provides safe, reliable, and convenient transportation within and around your campus. Book rides, track shuttles in real-time, and pay digitally—all from your smartphone.</p>
            <div className="cta-buttons">
              <a href="#download" className="btn primary">Get Started</a>
              <a href="#how-it-works" className="btn secondary">Learn More</a>
            </div>
            <div className="app-buttons">
              <GooglePlayIcon style={{ width: '200px', height: '400px' }} />
            </div>


          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Key <span className="highlight">Features</span></h2>
            <p>Experience seamless campus transportation with our innovative app features designed specifically for students and staff.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">📍</div>
              <h3>Campus-wide Coverage</h3>
              <p>Book rides anywhere on campus and to nearby locations with just a few taps.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔍</div>
              <h3>Real-time Tracking</h3>
              <p>Know exactly where your shuttle is and when it will arrive with live GPS tracking.</p>
            </div>
            <div className="feature-card">
              <div className="icon">💳</div>
              <h3>Digital Wallet</h3>
              <p>Pay for your rides easily using a variety of payment methods. Top up your wallet and pay instantly with secure, cashless transactions through the app.</p>

            </div>
            <div className="feature-card">
              <div className="icon">🗓️</div>
              <h3>Book on the go</h3>
              <p>Plan your campus commute by scheduling rides in advance for important events.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="steps-section">
        <div className="container">
          <div className="section-header">
            <h2>How It <span className="highlight">Works</span></h2>
            <p>Follow these simple steps to get started with Zevlo Logistics.</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Download the App</h3>
              <p>Get Zevlo Logistics from the App Store or Google Play Store.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Create an Account</h3>
              <p>Sign up with your student email for exclusive access.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Book Your Ride</h3>
              <p>Select your pickup and drop-off locations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Enjoy the Journey</h3>
              <p>Track your shuttle and enjoy the ride.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
            <div className="logo">
            <span className="logo-icon">
              <img src={ZevloLogo} alt="App Logo" style={{ width: '50px', height: '50px' }} />
            </span>

            <span className="logo-text">Zevlo<span className="highlight">Logistics</span></span>
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
                <li><a href="#download">Download App</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p>Email: zevlo.bussiness@gmail.com</p>
              {/* <p>Phone: (555) 123-4567</p> */}
            </div>
          </div>
          <p className="footer-copy">&copy; 2025 Zevlo Logistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
