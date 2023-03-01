import { combineReducers } from 'redux'
import cardReducer from './cards'

const reducers = combineReducers({
    cards : cardReducer,    
})

export default reducers