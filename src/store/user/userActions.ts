import { USER_ACTION_TYPES } from "./userActionTypes"
import { User } from "firebase/auth"
import { UserData, AdditionalInfo } from "../../utilities/firebase/firebase"
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utilities/reducer/reducer"

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => (
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)))

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export const checkUserSession = withMatcher(() : CheckUserSession => (
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
))

export type SignInWithGoogle = Action<USER_ACTION_TYPES.SIGN_IN_GOOGLE_START>
export const signInWithGoogle = withMatcher(() => (
    createAction(USER_ACTION_TYPES.SIGN_IN_GOOGLE_START)
))

export type SignInWithEmail = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_EMAIL_START, {email: string, password: string}>
export const signInWithEmail = withMatcher((email : string, password : string) => 
    createAction(USER_ACTION_TYPES.SIGN_IN_EMAIL_START, {email, password}))

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>    
export const signInSuccess = withMatcher((user : UserData & {id : string}) => 
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
)

export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE,{ error: Error} >    
export const signInFailure = withMatcher((error: Error) => (
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)))

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email : string, password : string ,displayName: string}>    
export const signUpStart = withMatcher((email : string, password : string ,displayName: string) => (
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})
 ))

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user: User, additionalInfo: AdditionalInfo} >    
export const signUpSuccess = withMatcher((user: User, additionalInfo: AdditionalInfo) => (
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalInfo})))

export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE,{ error: Error} >    
export const signUpFailure = withMatcher((error: Error) => (
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE,error)))


export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>    
export const signOutStart = withMatcher(() => (
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)
))

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export const signOutSuccess = withMatcher(() => (
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)))

export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE, { error: Error} >    
export const signOutFailure = withMatcher((error : Error) => (
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE,error)))