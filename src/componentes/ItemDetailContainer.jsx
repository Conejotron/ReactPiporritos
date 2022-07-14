import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { dbase } from '../services/firebase';
import { useParams } from 'react-router-dom'

import './Styles/ItemDetailContainer.css';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  

  const { productId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const docRef = doc(dbase, 'products', productId)

    getDoc(docRef).then(doc => {
      const productFormatted = { id: doc.id, ...doc.data() }      
          setProduct(productFormatted)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })  
    }, [productId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }
  

  return (
    <div>
    <section className="item-detail-container">
      <ItemDetail item={product} /> : <p>Obteniendo producto...</p>
    </section>
    </div>
  );
};

export default ItemDetailContainer;
