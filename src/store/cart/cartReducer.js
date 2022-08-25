import { CART_ACTION_TYPES } from "./cartActionTypes";

const INITIAL_STATE = {
    cartIcon: false,
    cartItems: [],
    // cartCountItem: 0,
    // totalItemsCost: 0
}

export const cartReducer = (state = INITIAL_STATE,action) => {
    const { type, payload } = action
    switch(type){
        case CART_ACTION_TYPES.TOGGLE_CART_ITEMS:
         return{
            ...state,
            cartIcon: payload
        }
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
         return{
            ...state,
            cartItems: payload
        }
         default:
          return state
    }
}