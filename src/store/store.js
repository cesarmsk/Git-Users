import { createStore, combineReducers } from 'redux'
import reducer from './repos/reducer'

const rootReducer = combineReducers({
  repos: reducer,
  person: reducer
})

export default createStore(rootReducer)