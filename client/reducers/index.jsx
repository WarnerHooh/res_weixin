
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import appData from './todos'

export default combineReducers({
  routing,
  appData
});
