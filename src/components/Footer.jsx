import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li>Online Store</li>
            <li>Online Booking</li>
            <li>Restaurant Website</li>
            <li>Blog Website</li>
            <li>Portfolio Website</li>
            <li>eCommerce Website</li>
            <li>Professional Tools</li>
            <li>Logo Maker</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Hire a Professional</li>
            <li>Report</li>
          </ul>
        </div>
        
        <div className="footer-column footer-brand">
          <h3>MyBlog</h3>
          <p>
          Love for Nature
          </p>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <span>Facebook</span>
          <span>YouTube</span>
          <span>Pinterest</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
        <div className="legal-links">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>&copy; 2025 MyBlog</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
