import { combineReducers } from 'redux-immutable'

import {
  reducer as commonReducer
} from './app'

const reducer = combineReducers({
  app: commonReducer
})

export default reducer
