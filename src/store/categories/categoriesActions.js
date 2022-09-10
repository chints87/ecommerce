import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";
// import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase";

export const fetchCategoriesStart = () => ({
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START
}) 

export const fetchCategoriesSuccess = (categoriesArray) => ({
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_SUCCESS,
    payload: categoriesArray
}) 

export const fetchCategoriesFailed = (error) => ({
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_FAILED,
    payload: error
}) 

// export const fetchCategoriesAsync = () => async(dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
       
//         const categoriesArray = await getCategoriesAndDocuments(); 
//         dispatch(fetchCategoriesSuccess(categoriesArray));
        
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }   

// }