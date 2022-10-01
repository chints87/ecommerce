import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cartReducer";

// Obtain cart state
export const selectCartReducers = (state : RootState) : CartState => state.cart

// Obtain cartItems slice
export const selectCartItems = createSelector(
    [selectCartReducers],
    (cartItemsSlice) => cartItemsSlice.cartItems
)

// Obtain IsCartOpen slice 
export const selectIsCartOpen = createSelector(
    [selectCartReducers],
    (cartItemsSlice) => cartItemsSlice.cartIcon
)

// Evaluates the total items value based on cartItems slice
export const selectCountCartItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

// Evaluates the total cost value based on cartItems slice
export const selectTotalCostItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
)


