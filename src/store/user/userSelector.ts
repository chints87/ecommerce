import { createSelector } from 'reselect'
import { RootState } from '../store'
import { UserState } from './userReducer'

const selectUserReducer = (state : RootState) : UserState => state.user

// Cached value of the sliced currentUser 
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
)