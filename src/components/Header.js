import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Logo</h1>
      <nav className="nav">
        <ul className="nav-list">
        <li className="nav-item"><Link to='/'> Home </Link></li>
          <li className="nav-item"><Link to='/about'> About </Link></li>
          <li className="nav-item"><Link to='/contact'> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;