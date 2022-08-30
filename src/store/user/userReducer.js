import { USER_ACTION_TYPES } from "./userActionTypes"

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE,action) => {
    const { type, payload} = action
    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        return{
           ...state,
           currentUser: payload,
           isLoading: false
        }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return{
            ...state,
            currentUser:null
        }
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
        case USER_ACTION_TYPES.SIGN_UP_FAILURE:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        return{
            ...state,
            error: payload,
            isLoading: false,
        }
        default:        
          return state;
    }
}

