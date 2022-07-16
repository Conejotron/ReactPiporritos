import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { dbase } from '../services/firebase';
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import './Styles/CartListItem.css'

const CartListItem = () => {
    
    const cartContext = useContext(CartContext);
    const { cart, deleteCartById, deleteCart, getTotal } = cartContext;
    const [formFields, setFormFields] = useState({
        name: "",
        phone: "",
        email: ""
      });

    const total = getTotal()    
    
    const labelStyle = { marginRight: 4 }
    const divItemStyle = { display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "stretch"}
    
  
    const inputs = [
      {
        label: "Nombre",
        name: "name"
      },
      {
        label: "Telefono",
        name: "phone"
      },
      {
        label: "Email",
        name: "email"
      },
    ];
  
     
    function handleChange(evt) {
      setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }
    
    function onSubmit(event) {
        alert(
          `Se ha emitido una orden de compra a nombre de ${formFields.name}. Teléfono: ${formFields.phone} Email: ${formFields.email} por el valor total de ${total}.`
        );
  
        const order = {
          Buyer: {Name: formFields.name, Phone: formFields.phone, Email: formFields.email},
          Items: cart,
          Total: total
        };  
          
        
        const ordersCollection = collection(dbase, "orders");
  
        addDoc(ordersCollection, order)
          .then(({ id }) => console.log(id));
  
        deleteCart();
  
      };

    
    return (
        <section className="list-cart-container">
            {cart ? (cart.map( product => {
                return( <CartItem key={product.id} 
                            item={product} 
                            deleteCartById={deleteCartById} 
                    /> );
                    }))
                : <p>cargando productos</p>
                }
            {cart.length ? (<button 
                            className="button-primary button-padding"
                            onClick={deleteCart}
                        >Vaciar Carrito</button>)
                : <p>No hay productos en el carrito</p>
                }
            {cart.length ? (<button className="button-primary button-padding" onClick={onSubmit} disabled={!(formFields.name && formFields.phone && formFields.email)}>Comprar</button>)
                : <p>Compra Realizada</p>               
                } 
                <div style={divItemStyle}>
                <h4>Datos del comprador:</h4>
                {inputs.map((input) => (
                  <div key={input.name} >
                    <label style={labelStyle}>{input.label}</label>
                    <input
                      value={formFields[input.name]}
                      name={input.name}
                      type="text"
                      onChange={handleChange}
                    />
                  </div> 
                  ))}
                  </div>
                  <Link to="/"><button className="button-primary button-padding" >Home</button></Link>              
        </section>
    )
}    


export default CartListItem