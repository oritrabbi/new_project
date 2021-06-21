
import {createStore,combineReducers,applyMiddleware} from 'redux'
import user from '../redux/reducer/user'
import {middelUser} from './middlwear'
const reducers=combineReducers({user})
const store=createStore(reducers,applyMiddleware(middelUser))
window.store=store
export default store
