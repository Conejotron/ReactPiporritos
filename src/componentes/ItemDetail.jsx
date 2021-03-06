import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

import './Styles/ItemDetail.css';


const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);
  const { addToCart} = cartContext;

  const onAdd = (qty) => {
    addToCart(item, qty)
  }

  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.size}</li>
          <li>Vendor:</li>
          <li>{item.vendor}</li>
          <li>Category:</li>
          <li>{item.category}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        <Link to='/cart'>Terminar compra</Link>
      </div>
    </article>
  );
};

export default ItemDetail;