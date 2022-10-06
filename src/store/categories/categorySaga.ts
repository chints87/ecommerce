import { takeLatest, all, call, put} from 'typed-redux-saga/macro'

import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase";
import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categoriesActions";

// Function generator to obtain data from firestore
export function* fetchCategoriesAsync() {    
    try {       
        // Use call effect to obtain data for categoriesArray
        const categoriesArray = yield* call(getCategoriesAndDocuments); 
        // Dispatch fetchCategoriesSuccess action using put 
        yield* put(fetchCategoriesSuccess(categoriesArray));
        
    } catch (error) {
        // Dispatch fetchCategoriesFailed action with put 
        yield* put(fetchCategoriesFailed(error as Error))
    }   

}

// Function generator responds to the FETCH_CATEGRORIES_DATA_START action
export function* onFetchCategories(){
    // Receives the latest action and triggers a function generator
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DATA_START, fetchCategoriesAsync)
}


export function* categoriesSaga(){
    // all takes an array of call function generator 
    yield* all([call(onFetchCategories)])
}