import { createContext, useState, useEffect } from "react";

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

export const CartIconContext = createContext({
    cartIcon: false,
    setCartIcon: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCountItem: 0,
});

export const CartIconProvider = ({children}) => {
    const [cartIcon, setCartIcon] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCountItem, setCartCountItem] = useState(0);
    const addItemToCart = (itemToAdd) => {
        setCartItems(addItem(cartItems, itemToAdd));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCountItem(newCartCount);
    }, [cartItems]);    

    return (
    <CartIconContext.Provider value={{cartIcon, setCartIcon, cartItems, addItemToCart, cartCountItem}}>
        {children}
    </CartIconContext.Provider>
)
}

