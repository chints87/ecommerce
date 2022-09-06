import { CATEGORIES_ACTION_TYPES, Category } from "./categoriesActionTypes";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer";
// import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED, Error>


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START)) 

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]) : FetchCategoriesSuccess => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS, categoriesArray))


export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED, error))

export type CategoryAction = 
FetchCategoriesStart 
| FetchCategoriesSuccess 
| FetchCategoriesFailed;

// export const fetchCategoriesAsync = () => async(dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
       
//         const categoriesArray = await getCategoriesAndDocuments(); 
//         dispatch(fetchCategoriesSuccess(categoriesArray));
        
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }   

// }