import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, 
  GoogleAuthProvider,signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth,provider)
}

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.map((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef,object)
    return null    
  })

  await batch.commit();
  console.log('done')
}


export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShots = await getDocs(q) 
  return querySnapShots.docs.map((docSnapShot) => docSnapShot.data())
  
  // reduce((acc,docSnapShot) => {
  //   const { title, items } = docSnapShot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc
  // }, {})

  // return categoryMap
}
export const createUserDocumentFromAuth = async(userAuth, additionalInfo) => {
   const userDocRef = doc(db, 'users', userAuth.uid)
   const userSnapShot = await getDoc(userDocRef)
   
   if(!userSnapShot.exists()){
     const { displayName, email } = userAuth;
     const createdAt = new Date()

     try{
        await setDoc(userDocRef, {
            displayName, email, createdAt, ...additionalInfo
        })
     }catch(error){
        console.log('error', error.message)
     }
   }

   return userSnapShot
}

export const registerUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  }
  const userCredential = await createUserWithEmailAndPassword(auth,email, password)
  return userCredential
}

export const logInWithEmailAndPassword = async(email, password) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  }
  const userCredential = await signInWithEmailAndPassword(auth,email, password)
  return userCredential
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}
