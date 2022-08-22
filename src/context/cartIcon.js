import { createContext, useState } from "react";

export const CartIconContext = createContext({
    cartIcon: false,
    setCartIcon: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartIconProvider = ({children}) => {
    const [cartIcon, setCartIcon] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (itemToAdd) => {
        setCartItems(addItem(cartItems, itemToAdd));
    }

    return (
    <CartIconContext.Provider value={{cartIcon, setCartIcon, cartItems, addItemToCart}}>
        {children}
    </CartIconContext.Provider>
)
}

const addItem = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
    if(existingCartItem) {
       return cartItems.map((cartItem) => 
        cartItem.id === itemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem        
       )
    }       
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}