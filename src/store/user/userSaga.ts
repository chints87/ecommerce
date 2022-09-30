import { takeLatest, put, all, call } from 'typed-redux-saga/macro'
import { getCurrentUser, createUserDocumentFromAuth, 
  logInWithEmailAndPassword, 
  signInWithGooglePopup, registerUserWithEmailAndPassword, 
  signOutUser } from '../../utilities/firebase/firebase'
import { User } from 'firebase/auth'
import { AdditionalInformation } from '../../utilities/firebase/firebase'
import { USER_ACTION_TYPES } from './userActionTypes'
import { SignInWithEmail, SignUpStart, SignUpSuccess } from './userActions'

import { signInSuccess, signInFailure, signUpFailure, signUpSuccess, signOutSuccess, 
  signOutFailure } from './userActions'


export function* getSnapShotFromUserAuth(userAuth: User, additionalInfo?: AdditionalInformation){
    try{
      // Obtain user data from db from userAuth credentials and additional information 
      const userSnapShot = yield* call(createUserDocumentFromAuth, userAuth, additionalInfo)
      if(userSnapShot){
        // Call the 'SIGN_IN_SUCCESS' action and pass parameters to it
        yield* put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
      }      
    }catch(error){
      yield* put(signInFailure(error as Error))
    }
}

// Check if user already authenticated
export function* isUserAuthenticated(){
    try{
      const userAuth = yield* call(getCurrentUser)
      if(!userAuth) return 
      yield* call(getSnapShotFromUserAuth, userAuth)
    }catch(error){
        yield* put(signInFailure(error as Error))
    }
}

export function* checkUserSession(){
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

// SignIn with email and password
// The payload from the 'SIGN_IN_EMAIL_START' is passed in this function
export function* userAuthEmailAndPasswordSignIn({payload : {email, password}} : SignInWithEmail){
  try{
    const userCredential = yield* call(logInWithEmailAndPassword, email, password)
    if(userCredential){
      const { user }  = userCredential
      // Triggers the getSnapShopFromUserAuth function to obtain user data from the db
      yield* call(getSnapShotFromUserAuth, user)
    }     
  }catch(error){
    yield* put(signInFailure(error as Error))
  }  
}

// Listens for the 'SiGN_IN_EMAIL_START' action and triggers the userAuthEmailAndPasswordSignIn function
export function* onSignInWithEmailAndPassword(){
  yield* takeLatest(USER_ACTION_TYPES.SIGN_IN_EMAIL_START, userAuthEmailAndPasswordSignIn)
}

// Google Sign-in
export function* userAuthGoogleSignIn(){
  try{
    const {user} = yield* call(signInWithGooglePopup)
    if(!user) return 
    yield* call(getSnapShotFromUserAuth, user)
  }catch(error){
    yield* put(signInFailure(error as Error))
  }  
}

export function* onSignInWithGoogle(){
  yield* takeLatest(USER_ACTION_TYPES.SIGN_IN_GOOGLE_START, userAuthGoogleSignIn)
}



// SIGN UP SAGAS
// Over here the getSnapShotFromUserAuth function is called with user and 
// additionalInfo as parameters
export function* onSignInAfterSignUp({payload: {user, additionalInfo}} : SignUpSuccess){
  yield* call(getSnapShotFromUserAuth, user, additionalInfo)
}

// Listens to the 'SIGN_UP_SUCCESS' Action and calls onSignInAfterSignUp and passes
// payload to it
export function* onSignUpSuccess(){
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, onSignInAfterSignUp)
}

// This function accepts the input parameters
// passed as payload in the 'SIGN_UP_START' action
export function* onUserSignUp({payload: {email, password, displayName}}: SignUpStart){
  // const { email, password, displayName} = action.payload
  try{
   const userCredential = yield* call(registerUserWithEmailAndPassword, email, password)
   if(userCredential){
    const { user } = userCredential
    // Call the 'SIGN_UP_SUCCESS' action
    yield* put(signUpSuccess(user, { displayName }))
   }
  
  }catch(error){
    yield* put(signUpFailure(error as Error))
  }
}

// This function listens for the for the 'SIGN_UP_START' action and calls
// onUserSignup function
export function* onSignUpStart(){
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, onUserSignUp)
}


// Sign Out
export function* signOut(){
  try{
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  }catch(error){
    yield* put(signOutFailure(error as Error))
  }
}

export function* onSignOutStart(){
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}


export function* userSaga(){
    yield* all([call(checkUserSession), call(onSignInWithGoogle), 
      call(onSignInWithEmailAndPassword), call(onSignUpStart), 
      call(onSignUpSuccess), call(onSignOutStart)])
}