import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import './Styles/CartWidget.css';

const CartWidget = () => {
  
  return (
    <div className="cart-widget">
      
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
