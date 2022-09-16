import {combineReducers} from 'redux'
import UserReducer from './UsersCheckIn/user.reducer'

const rootReducer = combineReducers({
  users: UserReducer,
})

export default rootReducer
