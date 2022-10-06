import { all, call } from 'typed-redux-saga/macro'

import { categoriesSaga } from './categories/categorySaga'
import { userSaga } from './user/userSaga'

// Encapsulate all sagas
export function* rootSaga(){
    yield* all([call(categoriesSaga), call(userSaga)])
}