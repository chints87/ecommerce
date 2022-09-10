import { compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean)

const composedEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

const persistConfig = {
    key: rootReducer,
    storage,
    whitelist: ['cart']
}



const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)