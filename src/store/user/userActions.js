import { USER_ACTION_TYPES } from "./userActionTypes"


export const setCurrentUser = (user) => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
})

export const checkUserSession = () => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION
})

export const signInWithGoogle = () => ({
    type: USER_ACTION_TYPES.SIGN_IN_GOOGLE_START
})

export const signInWithEmail = (email, password) => ({
    type: USER_ACTION_TYPES.SIGN_IN_EMAIL_START,
    payload: {email, password}
})

export const signInSuccess = (user) => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
    payload: error
})

export const signUpStart = (email,password,displayName) => ({
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: {email, password, displayName}
 })

export const signUpSuccess = (user, additionalInfo) => ({
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: {user, additionalInfo}
 })

export const signUpFailure = (error) => ({
    type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
    payload: error
})

export const signOutStart = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
    payload: error
})