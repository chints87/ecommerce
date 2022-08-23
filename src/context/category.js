import { createContext, useState, useEffect } from 'react';
/* import {addCollectionAndDocuments } from '../utilities/firebase/firebase' */
/* import SHOP_DATA from '../shop-data.js' */

import {getCategoriesAndDocuments } from '../utilities/firebase/firebase'

export const CategoryContext = createContext({
    categories: {},
    setCategories: () => {},
});

export const CategoryProvider = ({ children }) => {
  const[categories, setCategories] = useState({});
//   To upload static data from front end. Should be done only
//   once
  /* useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  },[]) */
  useEffect(() => {
    const categoryMapData = async() => {
       const categoryMap = await getCategoriesAndDocuments()
       setCategories(categoryMap)
    }
    categoryMapData()
  },[])
    return (
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )      
}