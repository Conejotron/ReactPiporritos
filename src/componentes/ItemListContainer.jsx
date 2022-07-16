import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { dbase } from '../services/firebase';
import { Link } from 'react-router-dom';

import './Styles/ItemListContainer.css';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('Welcome')
  
  const { categoryId } = useParams()
  

  useEffect(() => {
      setLoading(true)
      
        const collectionRef = categoryId ? ( 
            query(collection( dbase, 'products'), where('category', '==', categoryId))
        ) : ( collection(dbase, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
      }, [categoryId])

      useEffect(() => {
          setTimeout(() => {
              setTitle('Nuestras Cervezas')
          }, 3000)
      }, [])
  
      if(loading) {
          return <h1>Cargando productos...</h1>
      }
  
  
      return(
            <div className="product-detail__info">
              <h1>{title}</h1>
              { products.length > 0 
                   ? <ItemList products={products}/>                  
                  : <h1>No hay productos</h1>                  
              }
              <Link to='/cart'>Terminar compra</Link>
            </div>          
      )
      
      
  }        

export default ItemListContainer;