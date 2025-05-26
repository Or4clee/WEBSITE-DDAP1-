import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav>
        <div class="header">
            <div className="logo">
              <a href='/'>NovaTech</a>
              </div>
            <div className="menu">
              <Link to = 'home' smooth = {true} duration={300}>Home</Link>
              <Link to = 'home' smooth = {true} duration={300}>Categories</Link>
              <Link to = 'news' smooth = {true} duration={300}>News</Link>
              <Link to = 'lowonganpekerjaan' smooth = {true} duration={300}>Company</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
