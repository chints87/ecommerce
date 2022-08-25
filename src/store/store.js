import { compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer';

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: rootReducer,
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)