import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';
import SignInSignUp from './routes/SignInSignUp/SignInSignUp';
import Checkout from './routes/Checkout/Checkout';


function App() {
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
