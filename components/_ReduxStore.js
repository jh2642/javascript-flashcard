import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Redux reducer function
function termReducer (state = {score: 0}, action) {

  // Clone existing state into a new object we can mutate
  var newState = Object.assign({}, state)

  // Based on the type being dispatched, mutate newState
  switch (action.type) {
    case 'CORRECT':
      newState.score += 1
      break
  }

  return newState
}

// Merge our reducers with the React Router Redux reducer helper
const store = createStore(
  combineReducers({
    termState: termReducer,
    routing: routerReducer
  })
)

export default store
