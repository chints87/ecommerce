import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCurrentUser } from './utilities/firebase/firebase';


import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';
import SignInSignUp from './routes/SignInSignUp/SignInSignUp';
import Checkout from './routes/Checkout/Checkout';
import { setCurrentUser, checkUserSession} from './store/user/userActions'



function App() {
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
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<SignInSignUp />} />
          <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
