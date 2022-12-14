import { AnyAction } from 'redux'
import { USER_ACTION_TYPES } from "./userActionTypes"
import { signInSuccess, signOutSuccess, signInFailure,
 signOutFailure, signUpFailure} from "./userActions"
 import { UserData } from '../../utilities/firebase/firebase'

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
} 

// Set up inital state to be used when the application
// runs the first time 
const INITIAL_STATE : UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}


export const userReducer = (state = INITIAL_STATE,action : AnyAction) => {
    if(signInSuccess.match(action)){
        return{
            ...state,
            currentUser: action.payload,
            isLoading: false
         }
    }
    if(signOutSuccess.match(action)){
        return{
            ...state,
            currentUser:null
        }
    }
    if(signInFailure.match(action) || signUpFailure.match(action) || signOutFailure.match(action)){
        return{
            ...state,
            error: action.payload,
            isLoading: false,
        }
    }
    return state
}
//     const { type, payload} = action
//     switch(type){
//         case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//         return{
//            ...state,
//            currentUser: payload,
//            isLoading: false
//         }
//         case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//         return{
//             ...state,
//             currentUser:null
//         }
//         case USER_ACTION_TYPES.SIGN_IN_FAILURE:
//         case USER_ACTION_TYPES.SIGN_UP_FAILURE:
//         case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//         return{
//             ...state,
//             error: payload,
//             isLoading: false,
//         }
//         default:        
//           return state;
//     }
// }

