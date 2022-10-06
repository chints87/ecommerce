import { CATEGORIES_ACTION_TYPES, Category } from "./categoriesActionTypes";
import { createAction } from "../../utilities/reducer/reducer";
// import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase";
import { Action, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS, Category[]>
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED, Error>

// Action updates reducer to loading status
export const fetchCategoriesStart = withMatcher(() : FetchCategoriesStart => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START
)) 

// Action updates reducer, after successful API call with categories array 
export const fetchCategoriesSuccess = withMatcher((categoriesArray : Category[]): FetchCategoriesSuccess => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS,
    categoriesArray
)) 

// Action updates reducer, after failed API call with error
export const fetchCategoriesFailed = withMatcher((error : Error) : FetchCategoriesFailed => createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED,
    error
)) 

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed

// Using redux-thunk to dispatch different actions for a
// async call
// export const fetchCategoriesAsync = () => async(dispatch) => {
//    // Update reducer to show loading state
//     dispatch(fetchCategoriesStart());
//     try {
           // Fetch data from firestore    
//         const categoriesArray = await getCategoriesAndDocuments(); 
//         // Update reducer to add categories array state and change loading status state
//         dispatch(fetchCategoriesSuccess(categoriesArray));
        
//     } catch (error) {
          // Update reducer to show user error state and change loading state  
//         dispatch(fetchCategoriesFailed(error))
//     }   

// }