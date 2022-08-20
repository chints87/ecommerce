import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignInSignUp from './routes/SignInSignUp/SignInSignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignInSignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
