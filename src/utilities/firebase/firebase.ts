import { initializeApp } from 'firebase/app'
import { User, getAuth, signInWithPopup, createUserWithEmailAndPassword, 
  GoogleAuthProvider,signInWithEmailAndPassword, onAuthStateChanged, signOut, NextOrObserver } from 'firebase/auth'
import { QueryDocumentSnapshot, getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
import { Category } from '../../store/categories/categoriesActionTypes';

//app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvtTw4e8Bc1NknGVxrZXt4yyIFWRFOhP8",
    authDomain: "ecommerce-db-e9bbf.firebaseapp.com",
    projectId: "ecommerce-db-e9bbf",
    storageBucket: "ecommerce-db-e9bbf.appspot.com",
    messagingSenderId: "948297066947",
    appId: "1:948297066947:web:4b765f612e71c617463576"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set up google login access to the application
const provider = new GoogleAuthProvider();
// Prompt the user to select a google account to provide 
// credentials to access the application
provider.setCustomParameters({
    prompt: "select_account"
})

// Create an auth instance
export const auth = getAuth();

// Create a google pop up that returns a 
// function that takes in the auth and provider instance
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth,provider)
}

// Create a firestore instance
export const db = getFirestore();

export type ObjectToAdd = {
  title: string
}

// Add existing data on front-end to db
export const addCollectionAndDocuments = async<T extends ObjectToAdd>
(collectionKey : string, objectsToAdd : T[]) : Promise<void> => {
  // Create a collection reference from the collection i.e. collection key
  const collectionRef = collection(db, collectionKey)
  // Create a batch instance to create a transaction to the db
  const batch = writeBatch(db)
  

  objectsToAdd.map((object) => {
    // Create a document reference based on the 'title' field
    const docRef = doc(collectionRef, object.title.toLowerCase())
    // Set the docRef with the object
    batch.set(docRef,object)
    return null    
  })
  
  // Fire off the the different batch sets to write on the db
  await batch.commit();
  console.log('done')
}

// Fetch categories and documents from the db
export const getCategoriesAndDocuments = async(): Promise<Category[]> => {
  // Get collection reference from the db
  const collectionRef = collection(db, 'categories');
  // Create a query from the collection reference
  const q = query(collectionRef);
  // Fetch all document snapshots in the collection
  const querySnapShots = await getDocs(q)
  
  // Extract data from each document by mapping from documents i.e querySnapShots.docs
  return querySnapShots.docs.map((docSnapShot) => docSnapShot.data() as Category)
  
  // const categoryMap = querySnapShots.docs.reduce((acc,docSnapShot) => {
  //   const { title, items } = docSnapShot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc
  // }, {})

  // return categoryMap
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;

}

export type AdditionalInformation = {
  displayName?: string;
}

// Obtain auth object from Google Sign in and pass it in this
// function to create this user document 
// The additional information over here contains displayName since
// there is no displayName in the userAuth object obtained from 'Sign up with
// email and password' option
export const createUserDocumentFromAuth = async(userAuth: User, additionalInfo = 
  {} as AdditionalInformation) : Promise<void | QueryDocumentSnapshot<UserData>> => {
  // From the db and users collection, obtain the document reference based
  // on userAuth.uid 
   const userDocRef = doc(db, 'users', userAuth.uid)
  //  Use 'getDoc' to obtain data from the document reference
   const userSnapShot = await getDoc(userDocRef)
   
  // Check if any data exists
   if(!userSnapShot.exists()){
    // Destructure auth object
     const { displayName, email } = userAuth;
    // Create a variable that corresponds to a new field in the db
     const createdAt = new Date()

     try{
        // Use 'setDoc' function to add these data at that particular
        // document reference
        await setDoc(userDocRef, {
            displayName, email, createdAt, ...additionalInfo
        })
     }catch(error){
        console.log('error', error)
     }
   }
   
  //  Return user data from the db
   return userSnapShot as QueryDocumentSnapshot<UserData>
}

// Create a user with email and password 
export const registerUserWithEmailAndPassword = async(email: string, password: string) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  } 
  const userCredential = await createUserWithEmailAndPassword(auth,email, password)
  return userCredential
}

// Once signed up, signing up with email and password
export const logInWithEmailAndPassword = async(email: string, password: string) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  }
  const userCredential = await signInWithEmailAndPassword(auth,email, password)
  return userCredential
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback : NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

// Change from observable listener to prmoise based function
export const getCurrentUser = () : Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsuscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsuscribe();
        resolve(userAuth)
      },
      reject
    )
  })
}
