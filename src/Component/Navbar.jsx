import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav>
        <div className="header">
            <div className="logo">
              <a href='/'>NovaTech</a>
            </div>
            <div className="menu-icon" onClick={() => document.querySelector('.menu').classList.toggle('show')}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="menu">
              <Link to="main" smooth={true} duration={300}>Home</Link>
              <Link to="categories" smooth={true} duration={300}>Categories</Link>
              <Link to="news" smooth={true} duration={300}>News</Link>
              <Link to="lowonganpekerjaan" smooth={true} duration={300}>Company</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
