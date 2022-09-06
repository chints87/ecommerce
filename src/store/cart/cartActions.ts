// import { CategoryItem } from "../categories/categoriesActionTypes";
import { CartItem } from "./cartActionTypes";
import { CART_ACTION_TYPES } from "./cartActionTypes"
import { ActionWithPayload ,createAction, withMatcher } from "../../utilities/reducer/reducer";


export type SetCartIcon = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART_ICON, boolean>

export type UpdateCartItems = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>

export const setCartIcon = withMatcher((bool : boolean) : SetCartIcon => (
    // type: CART_ACTION_TYPES.TOGGLE_CART_ICON,
    // payload: bool
    createAction(CART_ACTION_TYPES.TOGGLE_CART_ICON, bool)
))

export const updateCartItems = withMatcher((cartItems : CartItem[]) : UpdateCartItems => 
    createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, cartItems)
)


export const addItemToCart = (cartItems: CartItem[],itemToAdd: CartItem) => {
    const newCartItems = addItem(cartItems, itemToAdd);
    // return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
    return updateCartItems(newCartItems)
}

export const removeItemFromCart = (cartItems: CartItem[],itemToRemove : CartItem) => {
    const newCartItems = removeItem(cartItems,itemToRemove)
    // return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
    return updateCartItems(newCartItems)
}
export const deleteItemFromCart = (cartItems: CartItem[],itemToDelete : CartItem) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
    // return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems})
    return updateCartItems(newCartItems)
 }

const addItem = (cartItems: CartItem[], itemToAdd: CartItem): CartItem[] => {
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

const removeItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
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

