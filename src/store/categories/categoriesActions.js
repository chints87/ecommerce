import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

export const setCategories = (categoriesMap) => ({
    type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES_DATA,
    payload: categoriesMap
}) 