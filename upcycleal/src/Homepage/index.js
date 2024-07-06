import React, { useState } from 'react';
import './index.css';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <div>
      <div className="navLogo">
        <div className="nav-logo">
          <img src="Image/blue.png" alt="Logo"/>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#" onClick={toggleMenu}>Roadmap</a></li>
          <li><a href="#" onClick={toggleMenu}>Team</a></li>
          <li><a href="#" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <div className="cta">
        <div>
          <p className='ctawords'>
            Join the UpCycleIt and turn Used clothes <br /> into treasure with our gamified app.
          </p>
          <button>Join Now</button>
        </div>
        <img className='landingImg' src='Image/landing.png' alt='Landing image'/>
      </div>
    </div>
  );
}

export default Homepage;