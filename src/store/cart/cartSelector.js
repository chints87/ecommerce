import { createSelector } from "reselect";

export const selectCartReducers = (state) => state.cart

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


