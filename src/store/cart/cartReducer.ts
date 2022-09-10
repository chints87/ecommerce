import { AnyAction } from "redux";
import { CartItem } from "./cartActionTypes";
// import { CART_ACTION_TYPES } from "./cartActionTypes";
import { setCartIcon, updateCartItems } from "./cartActions";

export type CartState = {
    readonly cartIcon: boolean,
    readonly cartItems: CartItem[]
}

const INITIAL_STATE : CartState =  {
    cartIcon: false,
    cartItems: [],
    // cartCountItem: 0,
    // totalItemsCost: 0
}

export const cartReducer = (state = INITIAL_STATE,action = {} as AnyAction) => {
    if(setCartIcon.match(action)){
        return{
            ...state,
            cartIcon: action.payload,
        }
    }
    if(updateCartItems.match(action)){
        return{
            ...state,
            cartItems: action.payload
        }
    }    
    return state
}
    // const { type, payload } = action
    // switch(type){
    //     case CART_ACTION_TYPES.TOGGLE_CART_ICON:
    //      return{
    //         ...state,
    //         cartIcon: payload
    //     }
    //     case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
    //      return{
    //         ...state,
    //         cartItems: payload
    //     }
    //      default:
    //       return state
    // }
