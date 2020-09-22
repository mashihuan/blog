import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = {
  articles: []
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_ARTICLES:
      return state.set('articles', action.articles);
    default:
      return state
  }
}

export default reducer