import { createSelector } from "reselect";
import { CartState } from "./cartReducer";
import { RootState } from '../store'

export const selectCartReducers = (state: RootState) : CartState => state.cart

export const selectCartItems = createSelector(
    [selectCartReducers],
    (cartItemsSlice) => cartItemsSlice.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducers],
    (cartItemsSlice) => cartItemsSlice.cartIcon
)

export const selectCountCartItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectTotalCostItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
)


