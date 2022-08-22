import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext({
    products: [],
    setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const[products, setProducts] = useState(SHOP_DATA);
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )      
}