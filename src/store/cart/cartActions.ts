import { CategoryItem } from "../categories/categoriesActionTypes";
import { CartItem } from "./cartActionTypes";
import { CART_ACTION_TYPES } from "./cartActionTypes"
import { createAction, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer";

// On adding the new items to cart, the cartItems information is updated
const addItem = (cartItems : CartItem[], itemToAdd: CategoryItem) => {
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

// On removing items from cart, the cartItems information is updated
const removeItem = (cartItems: CartItem[], itemToRemove: CartItem) : CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);
    
    if(existingCartItem && existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
    } 

    return cartItems.map((cartItem) => 
        cartItem.id === itemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem        
    )

}


export type SetCartIcon = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART_ICON, boolean>

export type UpdateCartItems = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>

// Updates setCartIcon in reducer with a boolean value
export const setCartIcon = withMatcher((bool : boolean) : SetCartIcon => createAction(
    CART_ACTION_TYPES.TOGGLE_CART_ICON,
    bool
))

// Updates cartItems in reducer the a new cartItems value 
export const updateCartItems = withMatcher((cartItems: CartItem[]) : UpdateCartItems => createAction(
    CART_ACTION_TYPES.UPDATE_CART_ITEMS, 
    cartItems
))

// On Adding items, call addItem helper function and return updateCartItems action to update reducer
export const addItemToCart = (cartItems: CartItem[],itemToAdd: CategoryItem) => {
    const newCartItems = addItem(cartItems, itemToAdd);
    return updateCartItems(newCartItems)
}

// On Removing items, call removeItem helper function and return updateCartItems action to update reducer
export const removeItemFromCart = (cartItems: CartItem[],itemToRemove: CartItem) => {
    const newCartItems = removeItem(cartItems,itemToRemove)
    return updateCartItems(newCartItems)
}

// On deleting items, return updateCartItems action to update reducer
export const deleteItemFromCart = (cartItems: CartItem[],itemToDelete: CartItem) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
    return updateCartItems(newCartItems)
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

