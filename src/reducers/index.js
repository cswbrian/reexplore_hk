import { combineReducers } from 'redux'
import todos from './todos'
import { appInfo } from './rootReducer'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    appInfo,
    visibilityFilter
})