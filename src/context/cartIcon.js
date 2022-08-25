import { createContext, useReducer } from "react";

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

export const CART_ACTION_TYPES = {
    TOOGLE_CART_ICON: 'TOOGLE_CART_ICON',
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS'    
}


const cartReducer = (state,action) => {
    const { type, payload } = action
    switch(type){
        case CART_ACTION_TYPES.TOOGLE_CART_ICON:
         return{
            ...state,
            cartIcon: payload
        }
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
         return{
            ...state,
            ...payload
        }
         default:
            throw new Error('error')
    }
}

const INITIAL_STATE = {
    cartIcon: false,
    cartItems: [],
    cartCountItem: 0,
    totalItemsCost: 0
}

export const CartIconProvider = ({children}) => {
    // const [cartIcon, setCartIcon] = useState(false);
    const [state, dispatch] = useReducer(cartReducer,INITIAL_STATE)
    const { cartIcon, cartItems, cartCountItem, totalItemsCost} = state
    
    const setCartIcon = (bool) => dispatch({
        type: CART_ACTION_TYPES.TOOGLE_CART_ICON,
        payload: bool
    })

    const updateCartItems = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); 
        const totalCost = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0); 
        
        return dispatch({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, 
        payload: {
            cartItems: newCartItems,
            cartCountItem: newCartCount,
            totalItemsCost: totalCost
        }})
    }

    const addItemToCart = (itemToAdd) => {
        const newCartItems = addItem(cartItems, itemToAdd);
        updateCartItems(newCartItems)
    }
    const removeItemFromCart = (itemToRemove) => {
        const newCartItems = removeItem(cartItems,itemToRemove)
        updateCartItems(newCartItems)
    }
    const deleteItemFromCart = (itemToDelete) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
        updateCartItems(newCartItems)  
     }


   
    return (
    <CartIconContext.Provider value={{cartIcon, setCartIcon, cartItems, 
        addItemToCart, cartCountItem, removeItemFromCart,deleteItemFromCart, totalItemsCost}}>
        {children}
    </CartIconContext.Provider>
  )
}
