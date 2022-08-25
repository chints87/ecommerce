import { createContext, useState, useEffect } from 'react';
/* import {addCollectionAndDocuments } from '../utilities/firebase/firebase' */
/* import SHOP_DATA from '../shop-data.js' */

import {getCategoriesAndDocuments } from '../utilities/firebase/firebase'

export const ProductContext = createContext({
    categoriesMap: [],
    setCategoriesMap: () => {},
});

export const ProductProvider = ({ children }) => {
  const[categoriesMap, setCategoriesMap] = useState([]);
//   To upload static data from front end. Should be done only
//   once
  /* useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  },[]) */
  useEffect(() => {
    const categoryMapData = async() => {
       const categoryMap = await getCategoriesAndDocuments()
       setCategoriesMap(categoryMap)
       
    }
    categoryMapData()
  },[])
    return (
        <ProductContext.Provider value={{categoriesMap, setCategoriesMap}}>
            {children}
        </ProductContext.Provider>
    )      
}