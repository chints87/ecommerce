import { AnyAction } from "redux"
import { signInSuccess, signOutSuccess, signInFailure, signUpFailure, signOutFailure } from "./userActions"
import { UserData } from "../../utilities/firebase/firebase"
// import { USER_ACTION_TYPES } from "./userActionTypes"

export type UserState = {
    readonly currentUser: UserData | null,
    readonly isLoading: boolean,
    readonly error: Error | null
}

const INITIAL_STATE : UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE,action = {} as AnyAction) : UserState => {
    if(signInSuccess.match(action)){
        return {
            ...state,
            currentUser: action.payload,
            isLoading: false
        }
    }
    if(signOutSuccess.match(action)){
        return {
            ...state,
            currentUser: null
            
        }
    }
    if(signUpFailure.match(action) || signOutFailure.match(action) || signInFailure.match(action) ){
        return {
            ...state,
            error: action.payload,
            isLoading: false
            
        }
    }
    return state
    // const { type, payload} = action
    // switch(type){
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //     return{
    //        ...state,
    //        currentUser: payload,
    //        isLoading: false
    //     }
    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //     return{
    //         ...state,
    //         currentUser:null
    //     }
    //     case USER_ACTION_TYPES.SIGN_IN_FAILURE:
    //     case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     return{
    //         ...state,
    //         error: payload,
    //         isLoading: false,
    //     }
    //     default:        
    //       return state;
    // }
}

