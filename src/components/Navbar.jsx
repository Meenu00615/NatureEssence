import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Meenu Patel</div>
      <div className="menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Flower
        </NavLink>
        <NavLink 
          to="/nature" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Nature
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Contact
        </NavLink>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram_icon.png" alt="Instagram" className="instagram-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
