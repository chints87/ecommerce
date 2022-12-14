import { CategoryItem } from "../categories/categoriesActionTypes";

export enum CART_ACTION_TYPES {
    TOGGLE_CART_ICON = 'TOGGLE_CART_ICON',
    UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS'    
}

export type CartItem = CategoryItem & {
    quantity: number
}
