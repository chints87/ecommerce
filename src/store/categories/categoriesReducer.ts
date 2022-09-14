import { AnyAction } from "redux";
import { CATEGORIES_ACTION_TYPES, Category } from "./categoriesActionTypes"

import { CategoryAction, fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./categoriesActions"

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}


const INITIAL_STATE : CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = INITIAL_STATE, action = {} as AnyAction) : CategoriesState => {
    // const {type, payload} = action
    if(fetchCategoriesStart.match(action)){
        return{
            ...state,
            isLoading: true
        }
    }
    if(fetchCategoriesSuccess.match(action)){
        return{
            
            ...state,
            isLoading: false,
            categories: action.payload     
        }
    }
    if(fetchCategoriesFailed.match(action)){
        return{            
            ...state,
            isLoading: false,
            error: action.payload     
        }
    }
    return state
}
    // switch(action.type){
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START:
    //         return{
    //             ...state,
    //             isLoading: true
    //         }
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS:
    //         return{
    //             ...state,
    //             isLoading: false,
    //             categories: action.payload
    //         }
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED:
    //             return{
    //                 ...state,
    //                 isLoading: false,
    //                 error: action.payload
    //         }    
    //     default:
    //         return state    
    // }
