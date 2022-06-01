import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos destacados</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;