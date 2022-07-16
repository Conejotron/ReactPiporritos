import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import './Navbar.css';


const NavBar = () => { 
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">
        <img src="https://i.ibb.co/3hn05sy/kross-2-1.png" alt="Kross" />
        </Link>

        <div className="icon navbar-nav ">
        <li>
          <Link className="nav-link" to="/cart">
          <CartWidget />
          </Link>
        </li>
        </div>           

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>     
          
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav-container ml-auto">
              
              <div className="menu-button">
                <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                <span>Menu</span>
              </div>

              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Inicio <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Productos
                </Link>
              </li>              
                 
              <li className="nav-item">
                  <ul className="nav-link"> 
                      <a href="/Category">Categorias</a>
                      <li><Link to="/category/Stout">Stout</Link></li> 
                      <li><Link to="/category/Pale Ale">Pale Ale</Link></li>
                      <li><Link to="/category/ESB">ESB</Link></li>                
                  </ul>
              </li>
              <li className="nav-link">
                  <a href="http://elrincondelcervecero.com/">Blog</a>
              </li>
              <li className="nav-link">
                  <a href="mailto:daniel.arenasc@gmail.com">Contacto</a>
              </li>
              
            </ul>             
                
                       
        </div>     
    </nav>   
  );
};

export default NavBar;
