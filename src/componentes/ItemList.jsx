import React from 'react';
import Item from './Item';

import './Styles/ItemList.css';

const ItemList = ({products}) => {  

    return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  stock={product.stock}
                  id={product.id}
                  category={product.category}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};



export default ItemList;
