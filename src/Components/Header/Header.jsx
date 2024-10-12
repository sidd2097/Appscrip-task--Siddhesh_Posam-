import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        LOGO
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Stories</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
