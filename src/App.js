import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCurrentUser } from './utilities/firebase/firebase';


// import Home from './routes/Home/Home';
// import Navigation from './routes/Navigation/Navigation';
// import Shop from './routes/Shop/Shop';
// import SignInSignUp from './routes/SignInSignUp/SignInSignUp';
// import Checkout from './routes/Checkout/Checkout';
import { setCurrentUser, checkUserSession} from './store/user/userActions'

const Home = lazy(() => import('./routes/Home/Home'))
const Navigation = lazy(() => import('./routes/Navigation/Navigation'))
const Shop = lazy(() => import('./routes/Shop/Shop'))
const SignInSignUp = lazy(() => import('./routes/SignInSignUp/SignInSignUp'))
const Checkout = lazy(() => import('./routes/Checkout/Checkout'))

function App() {
  // Variable used to dispatch actions
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
    // const unsubscribe = onAuthStateChangedListener((user)=> { 
    //     if(user){
    //         createUserDocumentFromAuth(user);
    //     }
    //     dispatch(setCurrentUser(user));
    // })
    // return unsubscribe
},[])
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="sign-in" element={<SignInSignUp />} />
            <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>    
  );
}

export default App;
