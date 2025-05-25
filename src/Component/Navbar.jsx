import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <div class="header">
            <div className="logo">
              <a href='#home'>NovaTech</a>
              </div>
            <div className="menu">
              <a href="#home">Home</a>
              <a href="#categories">Categories</a>
              <a href="#news">News</a>
              <a href="#company">Company</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
