import { compose, createStore, applyMiddleware, Middleware} from 'redux';
import { persistStore, persistReducer, PersistConfig} from 'redux-persist'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer';
import { rootSaga } from './rootSaga';

declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : typeof compose
    }
}

export type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist : (keyof RootState)[]
}

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()


const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware]
.filter((middleware) : middleware is Middleware  => Boolean(middleware))

const composedEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// Additional functionality added using compose to add middlwares
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

// Setting up configuration to store state in the 
// localstorage of the browser, to save data
// on refresh 
const persistConfig : ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// Create a reducer that will persist on refresh using config and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create store that will be passed to the Provider in index.js
export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)