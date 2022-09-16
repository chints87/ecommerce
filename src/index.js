import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user';
import { CategoryProvider } from './context/category';
import { CartIconProvider } from './context/cartIcon';
import { Elements } from '@stripe/react-stripe-js'
import * as serviceWorker from './service-worker'


import { store, persistor } from './store/store'
import { stripePromise } from './utilities/stripe/stripe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider>         */}
              {/* <CategoryProvider> */}
                {/* <CartIconProvider> */}
                <Elements stripe={stripePromise}>
                  <App /> 
                </Elements>                  
                {/* </CartIconProvider>         */}
              {/* </CategoryProvider>   */}      
          {/* </UserProvider> */}
        </BrowserRouter>   
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorker.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
