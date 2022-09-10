import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, 
  GoogleAuthProvider,signInWithEmailAndPassword, onAuthStateChanged, signOut, User, NextOrObserver } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot} from 'firebase/firestore'
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth,provider)
}

export const db = getFirestore();

export type ObjectToAdd = {
  title: string,
}

export const addCollectionAndDocuments = async<T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]) 
: Promise<void> => {
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


export const getCategoriesAndDocuments = async() : Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShots = await getDocs(q) 
  return querySnapShots.docs.map((docSnapShot) => docSnapShot.data() as Category)
  
  // reduce((acc,docSnapShot) => {
  //   const { title, items } = docSnapShot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc
  // }, {})

  // return categoryMap
}

export type AdditionalInfo = {
  displayName?: string,  
}

export type UserData = {
  displayName: string,
  email: string,
  createdAt: Date,
}


export const createUserDocumentFromAuth = async(userAuth: User , additionalInfo = {} as AdditionalInfo):
 Promise<void | QueryDocumentSnapshot<UserData>> => {
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
        console.log('error', error)
     }
   }

   return userSnapShot as QueryDocumentSnapshot<UserData>
}

export const registerUserWithEmailAndPassword = async(email: string, password: string) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  }
  const userCredential = await createUserWithEmailAndPassword(auth,email, password)
  return userCredential
}

export const logInWithEmailAndPassword = async(email: string, password: string) => {
  if(!email || !password){
    throw new Error('Please provide an email and password')
  }
  const userCredential = await signInWithEmailAndPassword(auth,email, password)
  return userCredential
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}

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
