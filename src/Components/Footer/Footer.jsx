import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="subscribe">
        <h3>Be the First to Know</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">FAQs</a></li>
            {/* Add more links */}
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>+44 221 153 9680</p>
          <p>customercare@domain.com</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
