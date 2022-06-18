import React, { useState } from 'react';
import { productList } from '../data/data.js';



const ItemCategory = () => {

    const [setdato]=useState(productList);
    const filterResult=(catItem)=>{
      const result=productList.filter((curData)=>{
        return curData.category===catItem;
      });
      setdato(result);
    }  
        
    return (
    <>
      <div>
        <button className="btn" onClick={()=>filterResult('Stout')}></button>        
        <button className="btn" onClick={()=>filterResult('PaleAle')}></button>
        <button className="btn" onClick={()=>filterResult('ESB')}></button>
      </div>      
      
    </>
  );
};

export default ItemCategory;