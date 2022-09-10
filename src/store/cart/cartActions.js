import { CART_ACTION_TYPES } from "./cartActionTypes"


export const setCartIcon = (bool) => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_ICON,
    payload: bool
})

export const addItemToCart = (cartItems,itemToAdd) => {
    const newCartItems = addItem(cartItems, itemToAdd);
    return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
}

export const removeItemFromCart = (cartItems,itemToRemove) => {
    const newCartItems = removeItem(cartItems,itemToRemove)
    return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
}
export const deleteItemFromCart = (cartItems,itemToDelete) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
    return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
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

// export const updateCartItems = (newCartItems) => {
//     const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); 
//     const totalCost = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0); 
    
//     return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, 
//     payload: {
//         cartItems: newCartItems,
//         cartCountItem: newCartCount,
//         totalItemsCost: totalCost
//     }})
// }

