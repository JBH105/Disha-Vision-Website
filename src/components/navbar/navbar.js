import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import ContactForm from '../../pages/contactform.js';
import logo from '../../../src/assets/dishalogo.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <div className="navbar-logo"><img src={logo} alt='dishalogos'></img></div>
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About us
              </NavLink>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
            Get in touch
          </button>
        </div>
      </nav>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
