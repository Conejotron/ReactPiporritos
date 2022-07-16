import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
 
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

    
  const addToCart = (item, qty) => {
    
    if (cart.some((el) => el.id === item.id)) {
      
      const newCart = cart.map((el) => {
        if (el.id === item.id) {
          
          el.qty += qty; 
          return el;
        } else {
          return el; 
        }
      });

      setCart(newCart); 
    } else {
      
      let newProduct = { ...item, qty };
      setCart([...cart, newProduct]);
      return setTotal;
    }
    return total;
  };

  const getTotal = () => {
    let total = 0
    cart.forEach(el=> {
        total += el.qty * el.price
    })

    return total;
};

  const deleteCartById = (id) => {
    
    const newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteCartById,
        deleteCart,
        getTotal
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
