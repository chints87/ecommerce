import { createContext, useState, useEffect } from 'react';
import {addCollectionAndDocuments } from '../utilities/firebase/firebase'
import SHOP_DATA from '../shop-data.js'

export const ProductContext = createContext({
    products: [],
    setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const[products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  },[])
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )      
}