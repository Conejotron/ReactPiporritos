import { dbase } from "."
import { getDocs, query, where , collection } from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from "../../adapters/productAdapter"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? ( 
            query(collection(dbase, 'products'), where('category', '==', categoryId))
        ) : ( collection(dbase, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            resolve(productsFormatted)
        }).catch(error => {
            reject(error)
        })
    })

}