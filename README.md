# Ecommerce platform using React Router 6, Firebase and Firestore, Context API, Redux, Redux-thunk and Redux-saga

### Installation
Clone the Github repository from the following steps:
```
$git@github.com:chints87/ecommerce.git *name of folder*
$cd *name of folder*
```
## Install dependencies
```
npm i
```

## Start the application
```
npm run start
```

## Firebase Setup

1. Go to Firebase
2. Create a new project
3. Toggle off Google Analytics
4. Give a name to your project
5. Create a web app for this project
6. Give it a name
7. Get the config file called firebase.js. This will contain firebase config of the your web app that you can use it in your React application
8. On your terminal, install firebase
9. In the src folder, create a utilities folder, and within that a firebase folder and create a firebase.js file

## Setting up google sign in authentication in Firebase Firebase

*Refer to firebase utils folder : src/utils/firebase/firebase.utils*

1. You can use different services to enable the user to signIn
2. Over here, we shall use sign in with email and sign in with google 
3. In the firbase console for the app, click on the *Authentication* tab.
4. Click on *Sign-in-method* and click on *Google* .
5. Toogle on enable Sign-in.
6. In the authorized domain, are a list of default domains that allow the
   application to use Google Sign-In
7. Choose an email of yours to recieve support emails.
8. Hit *Save* and check if Google has been enabled in Sign-in-providers.

## Setting up email/password sign in authentication in Firebase

Refer to sign up component

1. In the firbase console for the app, click on the *Authentication* tab.
2. Click on *Sign-in-method* and click on *Email/Password* and toggle to enable it.


## Setting up firestore

1. In the Firebase console for the app, click on the *Firestore* service
2. Click on *Create database*
3. Choose *Start in production mode*
4. Choose location, ideally the one your application users are closet at.
5. Click *Enable*
6. Once in the database, click on the *Rules* tab and
   change allow read, write: if *false* to *true* and hit *Publish*
   

## Redux setup for global state management

**Refer to /store/store.js to setup store**
**Refer to /store/root-reducer.js to setup reducer**
**Refer to /index.js to pass store in a Provider component to provide application with global state**

1. useSelector() is used to extract a specific part of the state that
   would be required for the component to use










