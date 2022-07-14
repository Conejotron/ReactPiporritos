import React from 'react';
import { memo } from 'react'
import Item from './Item';

import './Styles/ItemList.css';

const ItemList = ({products}) => {  
  
    return (
      <div className='product-list-container'>
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
  </div>   
  );
};



export default memo(ItemList)
