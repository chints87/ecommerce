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

const removeItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
    } 

    return cartItems.map((cartItem) => 
        cartItem.id === itemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem        
    )

}

export const CartIconContext = createContext({
    cartIcon: false,
    setCartIcon: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCountItem: 0,
    totalItemsCost: 0,
});

export const CartIconProvider = ({children}) => {
    const [cartIcon, setCartIcon] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCountItem, setCartCountItem] = useState(0);
    const [totalItemsCost, setTotalItemsCost] = useState(0);
    const addItemToCart = (itemToAdd) => {
        setCartItems(addItem(cartItems, itemToAdd));
    }
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeItem(cartItems,itemToRemove))
    }
    const deleteItemFromCart = (itemToDelete) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id))    }


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);    
        setCartCountItem(newCartCount);        
    }, [cartItems]);    

    useEffect(() => {        
        const totalItemsCost = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);       
        setTotalItemsCost(totalItemsCost);
    }, [cartItems]);    

    return (
    <CartIconContext.Provider value={{cartIcon, setCartIcon, cartItems, 
        addItemToCart, cartCountItem, removeItemFromCart,deleteItemFromCart, totalItemsCost}}>
        {children}
    </CartIconContext.Provider>
  )
}
