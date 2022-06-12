import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const NavBar = () => {
  const brand =
    'https://i.ibb.co/3hn05sy/kross-2-1.png';
  return (
    <header className={`header background--transparent`}>
      <div className="header-container">
        
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>

        
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
        
        <div className="logo-container">
          <a href='/'>
          <img src={brand} alt="logo" />
          </a>
        </div>
        
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
