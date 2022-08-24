import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

export const setCategories = (categoriesArray) => ({
    type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES_DATA,
    payload: categoriesArray
}) 