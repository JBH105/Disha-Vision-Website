import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div className="navbar-logo">Disha Vision</div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/aboutus">About us</a></li>
        </ul>
        <button className="contact-btn" >Get in touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
