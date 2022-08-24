import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes"

const INITIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch(type){
        case CATEGORIES_ACTION_TYPES.GET_CATEGORIES_DATA:
            return{
                ...state,
                categories: payload
            }
        default:
            return state    
    }
}