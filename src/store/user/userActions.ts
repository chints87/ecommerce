import { USER_ACTION_TYPES } from "./userActionTypes"
import { AdditionalInformation, UserData } from "../../utilities/firebase/firebase"
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utilities/reducer/reducer"

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export const setCurrentUser = withMatcher((user : UserData) => createAction(
     USER_ACTION_TYPES.SET_CURRENT_USER,
     user
))

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export const checkUserSession = withMatcher((): CheckUserSession => createAction(
    USER_ACTION_TYPES.CHECK_USER_SESSION
))

export type SignInWithGoogle = Action<USER_ACTION_TYPES.SIGN_IN_GOOGLE_START>
export const signInWithGoogle = withMatcher(() : SignInWithGoogle => createAction(
     USER_ACTION_TYPES.SIGN_IN_GOOGLE_START
))

export type SignInWithEmail = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_EMAIL_START, { email: string, password: string}>
export const signInWithEmail = withMatcher((email: string, password: string) : SignInWithEmail => createAction(
     USER_ACTION_TYPES.SIGN_IN_EMAIL_START,
     {email, password}
))

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export const signInSuccess = withMatcher((user : UserData): SignInSuccess => createAction(
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
     user
))

export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE, Error>
export const signInFailure = withMatcher((error : Error) : SignInFailure => createAction(
     USER_ACTION_TYPES.SIGN_IN_FAILURE,
     error
))

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string , displayName: string}>
export const signUpStart = withMatcher((email: string,password: string,displayName: string) : SignUpStart => createAction(
     USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName}))

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_EMAIL_START, { user: UserData, additionalInfo: AdditionalInformation}>     
export const signUpSuccess = withMatcher((user: UserData, additionalInfo: AdditionalInformation) => createAction(
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    {user, additionalInfo}
 ))

 export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE, Error> 
export const signUpFailure = withMatcher((error : Error) : SignUpFailure => createAction(
    USER_ACTION_TYPES.SIGN_UP_FAILURE,
    error))

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export const signOutStart = withMatcher(() : SignOutStart => createAction(
    USER_ACTION_TYPES.SIGN_OUT_START
))

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export const signOutSuccess = withMatcher(() : SignOutSuccess => createAction(
    USER_ACTION_TYPES.SIGN_OUT_SUCCESS))

export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE, Error>
export const signOutFailure = withMatcher((error: Error) : SignOutFailure => createAction(
     USER_ACTION_TYPES.SIGN_OUT_FAILURE, error))
